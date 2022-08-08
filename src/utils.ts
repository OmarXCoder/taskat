import chalk from 'chalk';
import { Task } from './store.js';

export const log = (str: string, bgColor: string) => {
    // @ts-ignore
    console.log('\n', chalk[bgColor].bold(` ${str} `), '\n');
};

export const info = (str: string) => {
    log(str, 'bgCyan');
};

export const success = (str: string) => {
    log(str, 'bgGreen');
};

export const warning = (str: string) => {
    log(str, 'bgYellow');
};

export const danger = (str: string) => {
    log(str, 'bgRed');
};

export const printTask = (task: Task) => {
    const str = `${task.id}) ${task.text}`;

    if (task.done) {
        console.log(chalk.strikethrough.italic.dim.grey(str));
    } else {
        console.log(chalk.bold.yellowBright(str));
    }
};
