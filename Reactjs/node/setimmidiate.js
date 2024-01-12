const http= require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
});
const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');
  setImmediate(baz);
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(zoo);
  });
  process.nextTick(foo);
};
const fs = require('node:fs');
const test = 'E:/internship/reactjs';
try {
  if (!fs.existsSync(test)) {
    fs.mkdirSync(test);
  }
} catch (err) {
  console.error(err);
}
start();
const PORT=3005 ;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);

});