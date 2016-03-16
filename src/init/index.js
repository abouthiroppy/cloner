'use strict';

const os = require('os');
const fs = require('fs-extra');

module.exports = (argv) => {
  return new Promise((resolve, reject) => {
    const dir = `${os.homedir()}/.cloner`;

    argv = argv.splice(3);

    argv.push('default');

    const promises = argv.map((e) => {
      return new Promise((resolve) => {
        const path = `${dir}/${e}`;

        fs.copy(path, '.', (err) => {
          resolve(path);
        });
      });
    });

    Promise.all(promises).then((paths) => {
      resolve(paths);
    });
  });
};
