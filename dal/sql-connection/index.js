var mysql = require("mysql");

const db = async (query) => {
  let [data, status] = [null, null];
  try {
    var connection = await mysql.createConnection({
      host: "sql11.freesqldatabase.com",
      user: "sql11427782",
      database: "sql11427782",
      password: "cIMCI9TtLU",
    });
    // var connection = await mysql.createConnection({
    //   host: "127.0.0.1",
    //   user: "Hilag",
    //   database: "hellodatabase",
    //   password: "Hilag1997!",
    // });

    let res = await startConnection(query, connection);

    data = res;
    status = 200;
  } catch (err) {
    console.log("the error", err);
    status = 500;
  }
  return { data: data, status: status };
};
exports.db = db;

const startConnection = async (query, connection) => {
  await connection.connect();
  const result = await getDataFromDB(query, connection);
  console.log(result);
  await connection.end();
  return result;
};

function getDataFromDB(query, connection) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
}

const executeQuery = async (sqlQuery) => {
  let data = null;
  let status = null;
  try {
    data = await db(sqlQuery);
    status = 200;
  } catch (err) {
    console.log("error executing sql query: /n/n " + sqlQuery, err);
    status = 500;
    data = null;
  }
  return { data: data, status: status };
};
exports.executeQuery = executeQuery;
