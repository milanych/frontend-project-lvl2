#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .usage('Usage: gendiff [options] <filepath1> <filepath2>')
  .option('-h, --help', 'output usage information.')
  .option('-V, --version', 'output the version number.')
  .option('-f, --format [type]', 'output format.')

program.parse(process.argv)