/** @format */

const socketio = require('socket.io');
const constants = require('../lib/constants');
const url = constants.IS_DEVELOPMENT_MODE ? 'http://localhost:3000' : 'https://bulletapp.azurewebsites.net'

let io;

const getIO = () => io;
const initIO = (http) => {
    if (!io) {
        io = socketio(http,
            {
                cors: {
                    origin: url,
                    methods: ['GET', 'POST'],
                },
            }
        );
    }
    io.on('connection', (socket) => {
        let room = socket.handshake.query.room;
        socket.join(room);

        socket.on('disconnect', () => {
            socket.leave(room);
        });

        socket.on('unsubscribe', () => {
            socket.leave(room);
        })
    });
};
module.exports = {
    initIO,
    getIO,
};
