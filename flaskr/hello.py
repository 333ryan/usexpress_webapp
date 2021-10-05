from flask import Flask
from markupsafe import escape

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>TESTING</p>"


@app.route("/<string:name>")
def test(name):
    return f"Hello, {name}!"
