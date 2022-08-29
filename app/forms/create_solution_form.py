from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class CreateSolutionForm(FlaskForm):
    solution = StringField('solution', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    language = StringField('language', validators=[DataRequired()])
