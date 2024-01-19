var fs = require('fs');

fs.readFile('demo.txt',  function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());

});

const fs = require('node:fs/Promise');
async function example{
  let filehanle;
  try{
  filehanle = await fs.open('E:\Internship\Reactjs\node','r');
  }
  console.log(filehanle.fd);
  console.log(await filehandle.readFile({ encoding: 'utf8' }));
  } finally {
    if (filehandle) await filehandle.close();

}