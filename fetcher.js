const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  if (error) return console.log(error);
  fs.writeFile(args[1], body, 'uft8', (error) => {
    if (error) return console.log(error);
    return;
  })
})