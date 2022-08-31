from flask_wtf import FlaskForm
from wtforms import BooleanField
from wtforms.validators import DataRequired

class CreateVoteForm(FlaskForm):
    upvote = BooleanField('upvote', validators=[DataRequired()])
