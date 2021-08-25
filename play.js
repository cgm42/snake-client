const {connect} = require('./client')

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;

  const handleUserInput = function (data) {
    if (key === '\u0003') {
      process.exit();
    }
    //if (key === 'b') process.stdout.write('\x07');
  };

  stdin.on("data", handleUserInput);

};


console.log("Connecting ...");
connect();