const constants = require("../lib/constants");
const getAllUsersFromDB = require("../dal/users").getAllUsersFromDB;

const getAllUsers = async () => {
  let [status, data] = [null, null];
  try {
    let res = await getAllUsersFromDB();
    [status, data] = [constants.OK_STATUS, res.data.data];
  } catch (error) {
    [status, data] = [constants.ERROR_STATUS, error];
  }
  return { status: status, data: data };
};
exports.getAllUsers = getAllUsers;
