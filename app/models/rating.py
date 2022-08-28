from .db import db

class Rating(db.Model):
    __tablename__ = 'ratings'

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    problem_id = db.Column(db.Integer, db.ForeignKey('problems.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    problem = db.relationship('Problem', back_populates='ratings')
    user = db.relationship('User', back_populates='ratings')

    def to_dict(self):
        return {
            'id': self.id,
            'rating': self.rating,
            'problemId': self.problem_id,
            'userId': self.user_id,
            'problem': self.problem.to_dict(),
            'user': self.user.to_dict()
        }

    def to_dict_no_relationships(self):
        return {
            'id': self.id,
            'rating': self.rating,
            'problemId': self.problem_id,
            'userId': self.user_id,
        }
