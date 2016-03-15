'use strict';

const os = require('os');
const fs = require('fs');

module.exports = () => {
  return new Promise(() => {
    const dir = `${os.homedir()}/.cloner`;

    fs.readdir(dir, (err, list) => {
      console.log(list);
    });
  });
}
