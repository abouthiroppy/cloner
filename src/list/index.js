'use strict';

const os   = require('os');
const walk = require('../utils/walk');

module.exports = () => {
  return new Promise((resolve) => {
    const dir = `${os.homedir()}/.cloner`;

    walk(dir).then((tree) => {
      resolve(tree);
    });
  });
};
