from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    num_solved = db.Column(db.Integer, default=0)
    hashed_password = db.Column(db.String(255), nullable=False)

    votes = db.relationship('SolutionVote', back_populates='user', cascade='all, delete')
    ratings = db.relationship('Rating', back_populates='user', cascade='all, delete')
    solutions = db.relationship('Solution', back_populates='user', cascade='all, delete')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
        }
