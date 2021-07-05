#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import genDiff from '../src/index.js';

const program = new Command();

program
  .version('0.0.1', '-V, --version', 'output the version number.')
  .description('Compares two configuration files and shows a difference.')
  .usage('Usage: gendiff [options] <filepath1> <filepath2>')
  .arguments('<filepath1> <filepath2>')
  .option('-h, --help', 'output usage information.')
  .option('-f, --format [type]', 'output format.')
  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)));

program.parse(process.argv);
