# E-Commerce Application
Welcome to the E-Commerce Application built with the MERN Stack (MongoDB, Express.js, React.js, Node.js). This project will guide you through building a full-fledged e-commerce app, providing hands-on experience with real-world development.

## Key Features
User Authentication: Secure login/registration functionality.

Product Management: Admin can manage products (add, update, view).

Order Handling: Manage customer orders.

REST APIs: User authentication, product management, and order handling.

Frontend: Built with React for a dynamic UI.

Tech Stack

Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

# Milestone 5 -Adding SignUp Page

1. Created a Sign-Up Page in React.
2. Implemented form validation for:
      Name (required)
      Email (valid format required)
      Password (minimum 2 characters)
      Password Confirmation (must match password)

4. Used React Router for navigation.

### Milestone 4 ###

This milestone focuses on implementing user data handling and file upload functionality. 

Key achievements include:  
1. User Model: Defined a blueprint for storing user data in the database, ensuring a consistent structure for user-related information.  
2. User Controller: Developed logic to manage user operations such as adding new users and retrieving user information.  
3. File Upload Setup: Integrated and configured Multer to enable file uploads (e.g., user profile images) and store them efficiently in the application.  

By completing this milestone, the application now supports user management and file uploads, enhancing its core functionality.

## Milestone 6: User Registration and Authentication
1. User Creation Endpoint (/create-user):
 Implemented an endpoint to create a new user.
 Validated the email to ensure the user doesn’t already exist.
 Successfully handled file uploads (e.g., avatar) using multer.

 2. Password Hashing:
 Used bcryptjs to hash passwords before saving them to the database, ensuring secure password storage.

4. Error Handling:
Incorporated centralized error handling using a custom ErrorHandler class.
Applied catchAsyncErrors middleware to manage asynchronous errors in the routes.

5. User Data Storage:
Stored user details (e.g., name, email, password, avatar) in MongoDB with encrypted password.

6. Email Notification (Optional):
Integrated an email notification system to send a welcome email to the user after successful registration (using sendMail).

7. JWT Token Generation:
Added a method to generate JWT tokens upon user login (for future use in authentication routes).

## Milestone -8 Progress:
Three files were made:
1)Product.jsx in Components/auth to store info. about product details.
2)user.js
3)data/js
We have createrd a reusable card component with props for product details.

## Milestone 9: 
Created an form to input all the details of product and it will be saved in database and will be displayed on products home page.
