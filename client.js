const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

   // interpret incoming data as text
   conn.setEncoding("utf8");

  
  conn.on('connect', () => {
    conn.write('Name: OAR');
    console.log("Successfully connected to game server");   
  });

  
  
  //this is to detect what user is inputting
  
  setInterval( () => {
  conn.on('data', (data) => {
    console.log(data);
  });
}, 5000);

  return conn;
};

module.exports = { connect };