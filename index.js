const http = require("http");
const app = require("./app");

app.set("port", 3001);
const server = http.createServer(app);

server.listen(
  process.env.PORT || 3001,
  console.log("Serveur listening in port : 3001")
);