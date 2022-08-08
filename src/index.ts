#! /usr/bin/env node
import { Command } from 'commander';
import listCmdHandler from './commands/list.js';
import addCmdHandler from './commands/add.js';
import delCmdHandler from './commands/del.js';
import doneCmdHandler from './commands/done.js';
import undoneCmdHandler from './commands/undone.js';
import clearCmdHandler from './commands/clear.js';

const program = new Command();

program
    .name('taskat')
    .description('CLI tool for managing TODOs')
    .action(listCmdHandler)
    .version('1.0.1');

/**
 * @command list
 *
 * List all the TODO tasks
 */
program
    .command('list')
    .description('Show a list of the TODO tasks')
    .option('-d, --done', 'Only show the done tasks', false)
    .option('-u, --undone', 'Only show the undone tasks', false)
    .action(listCmdHandler);

/**
 * @command add
 *
 * Add a new TODO task
 */
program
    .command('add')
    .description('Add a new TODO task')
    .argument('task', 'The task text')
    .option('-d, --done', 'Mark the task as done', false)
    .option('-l, --list', 'List all tasks after adding', false)
    .action(addCmdHandler);

/**
 * @command done
 *
 * Mark one task or more as done
 */
program
    .command('done')
    .description('Mark one task or more as done')
    .argument('[tasks...]', 'The numeric tasks IDs to be marked done.')
    .option('-a, --all', 'Mark all tasks as done', false)
    .action(doneCmdHandler);

/**
 * @command undone
 *
 * Mark one task or more as done
 */
program
    .command('undone')
    .description('Mark one task or more as undone')
    .argument('[tasks...]', 'The numeric tasks IDs to be marked undone.')
    .option('-a, --all', 'Mark all tasks as undone', false)
    .action(undoneCmdHandler);

/**
 * @command del
 *
 * Delete a Task or more by id
 */
program
    .command('del')
    .description('Delete tasks from the TODOs list')
    .argument('tasks...', 'The numeric tasks IDs to be deleted.')
    .action(delCmdHandler);

/**
 * @command clear
 *
 * Clear completed tasks or all tasks if the option -a, --all is used
 */
program
    .command('clear')
    .description('Clear tasks')
    .option('-a, --all', 'Delete all tasks including incomplete ones', false)
    .action(clearCmdHandler);

program.parse();
