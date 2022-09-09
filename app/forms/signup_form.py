from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


# def user_exists(form, field):
#     # Checking if user exists
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use')

def password_length(form, field):
    # Checking if password length is at least 4
    password = field.data
    if len(password) < 4:
        raise ValidationError('Password must be at least 4 characters')


class SignUpForm(FlaskForm):
    Username = StringField(
        'username', validators=[DataRequired(), username_exists])
    Password = StringField('password', validators=[DataRequired(), password_length])
