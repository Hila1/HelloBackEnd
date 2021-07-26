const executeQuery = require("./sql-connection/index").executeQuery;
/**
 * get all users from the DB
 */
const getAllUsersFromDB = async () => {
  const sqlQuery = `select * from tbl_users;`;
  let executionResponse = await executeQuery(sqlQuery);
  return executionResponse;
};
exports.getAllUsersFromDB = getAllUsersFromDB;
