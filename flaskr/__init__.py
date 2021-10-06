from flask import Flask
from markupsafe import escape


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'this key is so secret'

    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(auth, url_prefix="/")

    return app
