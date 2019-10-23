const net = require('net');

function connect() {
const conn = net.createConnection({
  host: '172.46.2.204', //or localhost
  port: 50541
});

conn.setEncoding('utf8');

conn.on('connect', () => {
  console.log('Entering the Snaktrix');
  conn.write('Name: DAB');
})

conn.on('data', (data)  => {
console.log(data);
});

return conn;
}




module.exports = {connect};
