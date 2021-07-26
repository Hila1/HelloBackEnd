const { getIO } = require("../instances/socketServer");

/**
 * sends the message to the client with websocket emit.
 * @param message
 */
const sendMessageWithWebsocket = (message) => {
  sendMessage(message);
};

const sendMessage = (message) => {
  console.log(message);
  try {
    getIO().to().emit("chat-message", message);
  } catch (error) {
    console.log(error);
  }
};

exports.sendMessageWithWebsocket = sendMessageWithWebsocket;
