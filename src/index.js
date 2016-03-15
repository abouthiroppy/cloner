#!/usr/bin/env node

'use strict';

const program = require('commander');

const list = require('./list');
const init = require('./init');

program
  .version('0.1.0')

program
  .command('list')
  .description('show common files in `~/.cloner`')
  .action(() => {
    list().then(() => {
      process.exit(0);
    })
  });

program
  .command('init [name]')
  .description('put common files')
  .action(() => {
    init(process.argv).then(() => {
      console.log('!!!!!!')
    });
  });

program.parse(process.argv);
