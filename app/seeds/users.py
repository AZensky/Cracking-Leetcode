from app.models import db, User
import os

admin_pass = os.environ.get('ADMIN_PASS')


# Adds a demo user, you can add other users here if you want
def seed_users():
    alex = User(
        username='Alex', password=admin_pass)
    demo = User(
        username='Demo', password='password')

    db.session.add(alex)
    db.session.add(demo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
