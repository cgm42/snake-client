const net = require("net");

// establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
 
  })

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
}
  module.exports = {connect};