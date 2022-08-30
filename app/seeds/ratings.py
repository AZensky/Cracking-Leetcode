from app.models import db, Rating

def seed_ratings():
    rating_1 = Rating(rating=5, problem_id=1, user_id=1)
    rating_2 = Rating(rating=5, problem_id=2, user_id=1)
    rating_3 = Rating(rating=5, problem_id=3, user_id=1)
    rating_4 = Rating(rating=5, problem_id=4, user_id=1)

    db.session.add(rating_1)
    db.session.add(rating_2)
    db.session.add(rating_3)
    db.session.add(rating_4)

    db.session.commit()

def undo_ratings():
    db.session.execute('TRUNCATE ratings RESTART IDENTITY CASCADE;')
    db.session.commit()
