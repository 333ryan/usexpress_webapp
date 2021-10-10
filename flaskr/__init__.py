from flask import Flask
from flask_cors import CORS


def create_app():
    app = Flask(__name__, static_url_path="", static_folder="frontend/build")
    app.config['SECRET_KEY'] = 'this key is so secret'
    CORS(app)
    from .views import views
    from .auth import auth
    
    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(auth, url_prefix="/")

    return app
