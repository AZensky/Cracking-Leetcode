from flask.cli import AppGroup
from .users import seed_users, undo_users
from .problems import seed_problems, undo_problems
from .solutions import seed_solutions, undo_solutions
from .ratings import seed_ratings, undo_ratings

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_problems()
    seed_solutions()
    seed_ratings()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_problems()
    undo_solutions()
    undo_ratings()
    # Add other undo functions here
