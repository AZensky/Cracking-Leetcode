# Cracking Leetcode

Cracking Leetcode is a website created to help developers learn data structures and algorithms (DSA) efficiently. Cracking Leetcode can be used to find a curated selection of DSA problems from Leetcode, as well as solutions for those problems. Cracking Leetcode users can upload their own solutions for problems in different languages. Logged in users can also vote on other users solutions, as well as rate problems from the curated list.

**Live Site:** [Cracking Leetcode](https://cracking-leetcode.herokuapp.com/)

## Wiki Links
- [API Documentation](https://github.com/AZensky/Cracking-Leetcode/wiki/API-Routes)
- [Database Schema](https://github.com/AZensky/Cracking-Leetcode/wiki/Database-Schema)
- [Feature List](https://github.com/AZensky/Cracking-Leetcode/wiki/Feature-List)
- [User Stories](https://github.com/AZensky/Cracking-Leetcode/wiki/User-Stories)

## Tech Stack

### Frameworks, Platforms, and Libraries:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
 
### Database: 

![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

### Hosting:

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Home Page

![cl-home-page-github](https://user-images.githubusercontent.com/95510710/188288848-6b2447cf-55ab-4702-9f95-18e285b64c9b.png)

![cl-problem-dropdown](https://user-images.githubusercontent.com/95510710/188288871-db4bb3b2-9781-4864-8486-a023203f3177.png)

## Problem Details Page

![problem-description](https://user-images.githubusercontent.com/95510710/188288885-bf6d8895-a73c-459c-9f10-0e75738d36c0.png)

![problem-solution](https://user-images.githubusercontent.com/95510710/188288888-a53c5420-e861-447d-888d-7874e7f40b00.png)

## Run Locally

- Clone the repo
- Open up two terminals, one for the backend, and one for the frontend
- In the first terminal, in the root folder, run pipenv install to install the necessary dependencies, and then run pipenv run flask run
- In the second terminal, cd into the react-app folder, run npm install to install the necessary dependencies, and then run npm start

### Environment Variables

To run this project, you need to add the following enviroment variables to your .env file in your root folder.

```
DATABASE_URL=«insert_database_url»
SECRET_KEY=«generate_strong_secret_here»
```

## To-do-list

- Dark Mode
