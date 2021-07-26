const constants = require("../lib/constants");
const addNewMessageToDB = require("../dal/messages").addNewMessageToDB;
const sendMessageWithWebsocket =
  require("../controllers/messages").sendMessageWithWebsocket;
const getUserRecentMessagesFromDB =
  require("../dal/messages").getUserRecentMessagesFromDB;

const sendNewMessage = async (messageBody) => {
  let [status, data] = [null, null];
  try {
    await addNewMessageToDB(messageBody);
    await sendMessageWithWebsocket(messageBody);

    [status, data] = [constants.OK_STATUS, "request approval"];
  } catch (error) {
    [status, data] = [constants.ERROR_STATUS, error];
  }
  return { status: status, data: data };
};
exports.sendNewMessage = sendNewMessage;

const getUserRecentMessages = async () => {
  let [status, data] = [null, null];
  try {
    let userMessages = await getUserRecentMessagesFromDB();
    [status, data] = [constants.OK_STATUS, userMessages.data];
  } catch (error) {
    [status, data] = [constants.ERROR_STATUS, error];
  }
  return { status: status, data: data };
};
exports.getUserRecentMessages = getUserRecentMessages;
