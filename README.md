# Chat Application

## Description
A simple chat application built with Express.js and MongoDB, allowing users to send and manage messages.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS

## Installation Instructions
1. Clone the repository: `git clone https://github.com/suvamneog/chat.git`
2. Navigate to the project directory: `cd chat`
3. Install dependencies:`npm install ejs express method-override mongoose`
4. Set up your MongoDB database.
5. Run the application: `node index.js`

## Usage
Access the application at `http://localhost:8080/chats` to view and manage chats.

## API Endpoints
- `GET /chats`: Retrieve all chats
- `POST /chats`: Create a new chat
- `GET /chats/:id/edit`: Edit a chat
- `PUT /chats/:id`: Update a chat
- `DELETE /chats/:id`: Delete a chat


## Features
-  **Deletion Confirmation** : Each "Delete" button is linked to an event listener that triggers a confirmation dialog when clicked. If the user confirms, the associated form is submitted, and the chat is deleted. This helps to ensure that users do not accidentally delete chats without confirming their intention.


## Contributing
Feel free to submit issues or pull requests for any improvements.

## License
This project is licensed under the MIT License.

## Acknowledgments
Thanks to all the resources that helped me build this application.