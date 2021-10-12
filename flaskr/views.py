from flask import Blueprint, render_template
from flaskr.firestore import firestore_db

views = Blueprint('views', __name__)
user_collection = firestore_db.collection("users")


@views.route('/')
def start():
    return render_template("home.html")


@views.route('/firestore')
def firestore():
    doc_ref = user_collection.document("n8tegreoHLQQp2pkL3UkURy8EBf2").get()
    return f"User Data: {doc_ref.to_dict()}"

@views.route('/react')
def react():
    return "REACT PAGE CONTENTS"