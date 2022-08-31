from .db import db

class ProblemSolved(db.Model):
    __tablename__ = 'problems_solved'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    problem_id = db.Column(db.Integer, nullable=False)

    user = db.relationship('User', back_populates='problems_solved')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'problemId': self.problem_id,
            'user': self.user.to_dict_no_relationships(),
        }

    def to_dict_no_relationships(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'problemId': self.problem_id,
        }
