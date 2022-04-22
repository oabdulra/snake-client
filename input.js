let connection;

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
  if (key === '\u0003') {
    process.exit();
  }; 
  
  if(key === 'w') {
    connection.write('Move: up');
  } 
  if (key === 'a') {
    connection.write('Move: left');
  } 
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'g') {
    connection.write('Say: GG!');
  }
  if (key === 'c') {
    connection.write('Say: Nice Try!');
  }
  if (key === 'x') {
    connection.write('Say: Wow!');
  }
  
};


module.exports = { setupInput };