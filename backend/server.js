const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Update with your frontend URL
        methods: ["GET", "POST"],
    },
});

const users = {}; // Store connected users: { userId: socketId }


const broadcastUsers = () => {
    io.emit('active_users', Object.keys(users));
};

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Handle user login
    socket.on('login', (userId) => {
        users[userId] = socket.id;
        console.log(`User logged in: ${userId}`);
        console.log(users); // Print current users
        broadcastUsers();
    });

    // Handle private messages
    socket.on('private_message', ({ senderId, receiverId, message }) => {
        const receiverSocketId = users[receiverId];
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('receive_message', { senderId, receiverId, message });
            // io.to(receiverSocketId).emit('receive_message', { senderId, message });
        } else {
            console.log(`User ${receiverId} not connected.`);
        }
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        for (const [userId, socketId] of Object.entries(users)) {
            if (socketId === socket.id) {
                delete users[userId];
                io.emit('active_users', Object.keys(users)); // Update active users
                console.log('User disconnected:', userId);
                break;
            }
        }
    });
});

server.listen(4000, () => {
    console.log('Server running on port 4000');
});
