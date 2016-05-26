#!/usr/bin/env node

'use strict';

const program  = require('commander');
const packages = require('../package.json');

const list = require('./list');
const init = require('./init');

program
  .version(packages.version);

program
  .command('list')
  .description('show common files in `~/.cloner`')
  .action(() => {
    list().then((tree) => {
      console.log(tree);
      process.exit(0);
    });
  });

program
  .command('init [name]')
  .description('put common files')
  .action(() => {
    init(process.argv).then((paths) => {
      paths.map((e) => {
        console.log(e);
      });
      console.log('Completion');
    });
  });

program.parse(process.argv);
