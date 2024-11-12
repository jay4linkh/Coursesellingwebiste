Overview
This project is a web application designed to provide a platform where users can browse, view details, and purchase various online courses. Built with a responsive front-end and a MongoDB-integrated backend, this application aims to simplify the process of learning by offering a streamlined course selection and purchasing experience.

Table of Contents
Features
Technologies Used
Installation
Usage
Project Structure
Screenshots
Team Members
License
Features
User Authentication: Secure login and signup functionality.
Dynamic Course Catalog: Displays a list of courses retrieved from a MongoDB database.
Course Details: Users can click on a course to view detailed information.
Responsive UI: Accessible design compatible with mobile and desktop screens.
Data Management: Integrates MongoDB for efficient data handling.
Secure API Calls: Input validation and secure API integration for handling sensitive user data.
Technologies Used
Front-End: HTML, CSS, JavaScript
Back-End: Node.js, Express.js
Database: MongoDB (hosted on MongoDB Atlas)
Other Tools: Git for version control, VS Code for development, Firebase for email notifications (if applicable)
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/course-selling-website.git
cd course-selling-website
Install Dependencies: Make sure you have Node.js and npm installed. Then run:

bash
Copy code
npm install
Set Up MongoDB:

Create a MongoDB cluster on MongoDB Atlas.
Add your IP to the IP Whitelist and create a MongoDB user with database access.
Copy the MongoDB URI and replace <username>, <password>, and <dbname> in the URI.
Configure Database Connection:

Create a .env file in the root directory and add the following:
php
Copy code
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5001
Start the Server:

bash
Copy code
node index.js
Access the Application:

Open your browser and go to http://localhost:5001.
Usage
Sign up or Log in: Create an account or log in with existing credentials.
Browse Courses: View the list of available courses on the homepage.
View Course Details: Click on any course to view its detailed information.
Add to Cart (if applicable): Users can add courses to their cart and proceed to checkout.
Purchase a Course (optional): Complete the checkout process to purchase a course.
Project Structure
bash
Copy code
course-selling-website/
├── public/                  # Static files (CSS, JS, images)
├── views/                   # HTML files for different pages
├── models/                  # Mongoose models (e.g., Course.js)
├── routes/                  # API routes
├── .env                     # Environment variables
├── db.js                    # MongoDB connection setup
├── index.js                 # Main server file
└── README.md                # Project README file
Screenshots
Homepage


Team Members
Aryan Penta - Front-End Development
Ronak Damani - Data Connectivity
Jay Gupta - Data Connectivity

