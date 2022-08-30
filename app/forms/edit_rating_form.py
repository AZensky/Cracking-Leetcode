from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class EditRatingForm(FlaskForm):
    rating = IntegerField('rating', validators=[DataRequired()])
