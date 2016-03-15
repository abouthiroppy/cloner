'use strict';

const os = require('os');
const fs = require('fs-extra');

module.exports = (argv) => {
  const dir = `${os.homedir()}/.cloner`;

  argv = argv.splice(3);

  if (argv.length === 0) argv.push('default');

  return new Promise((resolve, reject) => {
    const promises = argv.map((e) => {
      return new Promise((resolve) => {
        fs.copy(`${dir}/${e}`, '.', (err) => {
          resolve(err);
        });
      });
    });

    Promise.all(promises).then(() => {
      resolve();
    });
  });
}
