from .db import db

class Problem(db.Model):
    __tablename__ = 'problems'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    example = db.Column(db.Text, nullable=False)
    difficulty = db.Column(db.String(255), nullable=False)
    link = db.Column(db.Text, nullable=False)

    ratings = db.relationship('Rating', back_populates='problem', cascade='all, delete')
    solutions = db.relationship('Solution', back_populates='problem', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'example': self.example,
            'difficulty': self.difficulty,
            'link': self.link,
            'ratings': [rating.to_dict_no_relationships() for rating in self.ratings],
            'solutions': [solution.to_dict_no_relationships() for solution in self.solutions]
        }

    def to_dict_no_relationships(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'example': self.example,
            'difficulty': self.difficulty,
            'link': self.link
        }
