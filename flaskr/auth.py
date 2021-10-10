from flask import Blueprint, render_template, request, flash

auth = Blueprint('auth', __name__)


@auth.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        password = request.form.get('password')

        if len(password) < 1:
            flash('Please enter a password', category='error')
        else:
            flash('Logged in', category='success')
    return render_template("login.html", text="testing")


@auth.route("/logout")
def logout():
    return "<p>Logout</p>"


@auth.route("/sign-up")
def sign_up():
    return "<p>Sign up</p>"


