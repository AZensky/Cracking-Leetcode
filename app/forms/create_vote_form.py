from flask_wtf import FlaskForm
from wtforms import BooleanField

class CreateVoteForm(FlaskForm):
    upvote = BooleanField('upvote')
