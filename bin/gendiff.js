#!/usr/bin/env node

const commander = require('commander'); 
const gendiff = new commander.Command();

gendiff
  .option('-h, --help', 'Usage: gendiff [options]\n\nCompares two configuration files and shows a difference.\n\nOptions:\n-V, --version        output the version number\n  -h, --help           output usage information');

gendiff.parse();

// console.log(`cheese: ${program.opts().cheese}`);
