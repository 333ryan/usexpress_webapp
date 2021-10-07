from flaskr import create_app
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
