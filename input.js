let connection;
const { moves, emotes } = require('./constants');
const setupInput =  (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (data) => {
    return handleUserInput(data);
  })
  return stdin;
};

const handleUserInput = (key) => {
  let interval;
  if (key === '\u0003') {
    process.exit();
  }; 
  
  //this is an attempt to automove, however it is buggy
  /* for(let input in moves) {
    interval = setInterval(() => {
      if (input === key) {
        connection.write(moves[input]);
      } else {
        clearInterval(interval);
      }
    },75);
  } */

  for(let input in moves) {
   
    if (input === key) {
     connection.write(moves[input]);
    }
      
  };



  for(let input in emotes) {
    if (input === key) {
      connection.write(emotes[input]);
    }
  };
  
};


module.exports = { setupInput };