const executeQuery = require("./sql-connection/index").executeQuery;
/**
 * add New Message To DB using the messageBody
 * @param { object } messageBody
 */
const addNewMessageToDB = async (messageBody) => {
  let [msg_content, msg_type, msg_sender_id, msg_send_time] = [
    messageBody.msg_content,
    messageBody.msg_type,
    messageBody.msg_sender_id,
    messageBody.msg_send_time,
  ];
  const sqlQuery = `INSERT INTO tbl_messages (msg_content, msg_type, msg_sender_id, msg_send_time)
  VALUES ('${msg_content}', ${msg_type}, ${msg_sender_id}, FROM_UNIXTIME(${
    msg_send_time / 1000
  }));`;
  let executionResponse = await executeQuery(sqlQuery);
  return executionResponse;
};
exports.addNewMessageToDB = addNewMessageToDB;

/**
 * get recent messages for specific user id (up to 10)
 */
const getUserRecentMessagesFromDB = async () => {
  const sqlQuery = `SELECT * FROM (
    SELECT * FROM tbl_messages ORDER BY msg_id DESC LIMIT 10
 )Var1
    ORDER BY msg_id ASC;`;
  let executionResponse = await executeQuery(sqlQuery);
  return executionResponse;
};
exports.getUserRecentMessagesFromDB = getUserRecentMessagesFromDB;
