Next.js Chat Web App with Socket.io

This project is a simple chat web application built using Next.js for the frontend and Socket.io for real-time messaging. The app allows users to chat in real-time after registering usernames.

Project Setup
To get started, follow these steps to set up both the frontend and backend of the application.

Installation

1. 	Clone the repository:

2.	Install dependencies:

For both the frontend and backend, navigate to the project directory and run:

	npm install
 
3.	Run the development server:

Start the development environment for both the frontend and backend with the following command:

	npm run dev
 
The application will run on:

Frontend: http://localhost:3000
Backend: http://localhost:4000


Usage

1.	Register the first user:

	Enter a username for the first user in the input field.
	You will see a message indicating "No active users currently."

2.	Register the second user:

	Go to the second table (another section of the app).
	Enter a different username for the second user.
	The first user will now be able to select the second user from the "active users" list.

3.	Start chatting:

	After selecting the active users, you can start chatting.
	Messages will appear in real-time as users send and receive them.

4.	Multiple users:

	The same process applies to any number of users.
	Simply add more users and select them from the active user list to start chatting.

Features

	Real-time messaging with Socket.io.
	Dynamic user registration and selection.
	Supports multiple users chatting in real-time.
 
Technologies Used

	Next.js: React-based framework for server-side rendering.
	Socket.io: Real-time bidirectional event-based communication.
	Node.js: JavaScript runtime for backend.




