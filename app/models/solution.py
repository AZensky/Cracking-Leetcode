from .db import db
import datetime

class Solution(db.Model):
    __tablename__ = 'solutions'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.Text, nullable=False)
    language = db.Column(db.String(255), nullable=False)
    example_solution = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    problem_id = db.Column(db.Integer, db.ForeignKey('problems.id'), nullable=False)

    user = db.relationship('User', back_populates='solutions')
    problem = db.relationship('Problem', back_populates='solutions')
    solution_votes = db.relationship('SolutionVote', back_populates='solution', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'answer': self.answer,
            'language': self.language,
            'example_solution': self.example_solution,
            'created_at': self.created_at,
            'userId': self.user_id,
            'user': self.user.to_dict_no_relationships(),
            'problem': self.problem.to_dict_no_relationships()
        }

    def to_dict_no_relationships(self):
        return {
            'id': self.id,
            'title': self.title,
            'answer': self.answer,
            'language': self.language,
            'example_solution': self.example_solution,
            'created_at': self.created_at,
            'userId': self.user_id,
        }
