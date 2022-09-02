from app.models import db, Rating

def seed_ratings():

    for i in range (1, 25):
        rating = Rating(rating=5, problem_id=i, user_id=1)
        db.session.add(rating)

    db.session.commit()


def undo_ratings():
    db.session.execute('TRUNCATE ratings RESTART IDENTITY CASCADE;')
    db.session.commit()
