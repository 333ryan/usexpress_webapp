from firebase_admin import credentials, firestore, initialize_app

cred = credentials.Certificate("firestore_key.json")
firestore_app = initialize_app(cred)
firestore_db = firestore.client()