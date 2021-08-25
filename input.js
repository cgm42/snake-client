let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  conn.on("connect", () => {
    stdin.on("data", function handleUserInput(key) {
      if (key === '\u0003') {
        console.log("leaving snake");
        process.exit();
      }
      if (key === 'w') {
        connection.write("Move: up");
      }
      if (key === 'a') {
        connection.write("Move: left");
      }
      if (key === 's') {
        connection.write("Move: down");
      }
      if (key === 'd') {
        connection.write("Move: right");
      }
      if (key === '1') {
        connection.write("Say: oh look at me go!");
      }
    })
  })
  return stdin;
  }
 
  

  

  

 
module.exports = setupInput;