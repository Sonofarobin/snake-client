const net = require('net');

function connect() {
const conn = net.createConnection({
  host: '172.46.2.204',
  port: 50541
});

conn.setEncoding('utf8');

conn.on('data', (data)  => {
console.log(data)
});

return conn;
}

console.log('Entering the Snaketrix');
connect();

