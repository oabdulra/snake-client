const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.1.159',// IP address here,
    port: 50541// PORT number here,
  });

   // interpret incoming data as text
   conn.setEncoding("utf8");

  
  conn.on('connect', () => {

    console.log("Connecting ...");
    conn.write('Name: OAR');
    console.log("Successfully connected to game server");

    setInterval(() => {
      //conn.write('Move: up');
      //conn.write('Move: down');
    }, 100);

    
  })

  
  
  //this is to detect what user is inputting
  
  conn.on('data', (data) => {
    console.log(data);
  });
 

  return conn;
};

module.exports = { connect };