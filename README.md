
# AutoCarePro 

AutoCarePro is a simple web application designed to streamline the process of booking car services. This project uses ReactJS for the front end and MongoDB for the back end. It offers a seamless user experience, from landing on the company's profile page to booking a service appointment.


# Features

## Landing Page: 
- The application starts with a company profile landing page highlighting the services offered.

## User Authentication and Authorization:

- Users can create an account and log in.

- Passwords are securely hashed using the bcrypt module along with salt.

- JWT tokens handle sessions and provide secure access to user information.

## Service Booking: 
- Users can book service appointments through the application.

## Admin Functionality:
- Admins can view all customer bookings and search bookings by date.

## Data Management:
- APIs connect the frontend with the backend, allowing data to be saved and retrieved from MongoDB.

## Deployment: 
- The application is deployed using Render.



# Technologies Used


## Frontend
- ReactJS

## Backend
- MongoDB
- Node.js
- Express.js

## Authentication
- bcrypt
- JWT (JSON Web Tokens)

## Deployment
- Render

# Getting Started

## Prerequisites
Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- MongoDB 

# Installation

Clone the repository

```bash
git clone https://github.com/yourusername/AutoCarePro.git

```
Navigate to the project directory

```bash
cd AutoCarePro

```
Install dependencies for the backend

```bash
cd backend
npm install

```

Install dependencies for the frontend

```bash
cd ../frontend
npm install

```

Running the Application
Start the MongoDB server
Follow the instructions provided in the MongoDB documentation to start your MongoDB server.

Start the backend server

```bash
cd backend
npm start

```

Start the frontend server

```bash
cd ../frontend
npm start

```

Access the application
Open your web browser and navigate to 

```bash
http://localhost:3000.

```
# Functions
## Usage
- Landing Page: Browse the services offered by the company.
- User Registration/Login: Create an account or log in to your existing account.
- Book Service: Navigate to the booking page and schedule a service appointment.
- Admin Access: Admins can log in to view and manage all customer bookings.

## Security
- Password Handling: Passwords are hashed using bcrypt with added salt for security.
- Session Management: Sessions are managed using JWT tokens, which are securely stored and passed between the frontend and backend.

## Contact
For any questions or feedback, please contact us at karthikeyanfz1111@gmail.com