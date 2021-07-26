const messagesRoute = require("./routes/messages");
const usersRoute = require("./routes/users");
var constants = require("./lib/constants");

const cors = require("cors");
const bodyParser = require("body-parser");
const app = require("express")();
const server = require("http").Server(app);
const { initIO } = require("./instances/socketServer");

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH ,DELETE, OPTIONS"
  );
  next();
});
app.use("/api/messages", messagesRoute);
app.use("/api/users", usersRoute);

app.get("/", (req, res) => {
  res.send("hello backend is on");
});
initIO(server);
server.listen(constants.PORT, () => {
  console.log("Server started at http://localhost:" + constants.PORT);
});
