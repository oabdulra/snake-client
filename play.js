const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.1.159',// IP address here,
    port: 50541// PORT number here,
  });

   // interpret incoming data as text
   conn.setEncoding("utf8");

  console.log("Connecting ...");
  

  conn.on('data', (data) => {
    console.log(data);
  });
 

  return conn;
};


connect();

