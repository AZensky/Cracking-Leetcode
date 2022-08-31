from .db import db

class SolutionVote(db.Model):
    __tablename__ = 'solution_votes'

    id = db.Column(db.Integer, primary_key=True)
    upvote = db.Column(db.Boolean, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    solution_id = db.Column(db.Integer, db.ForeignKey('solutions.id'), nullable=False)

    user = db.relationship('User', back_populates='votes')
    solution = db.relationship('Solution', back_populates='solution_votes')

    def to_dict(self):
        return {
            'id': self.id,
            'upvote': self.upvote,
            'userId': self.user_id,
            'solutionId': self.solution_id,
            'user': self.user.to_dict_no_relationships(),
            'solution': self.solution.to_dict_no_relationships()
        }

    def to_dict_no_relationships(self):
        return {
            'id': self.id,
            'upvote': self.upvote,
            'userId': self.user_id,
            'solutionId': self.solution_id
        }
