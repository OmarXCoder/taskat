import chalk from 'chalk';
export const log = (str, bgColor) => {
    console.log('\n', chalk[bgColor].bold(` ${str} `), '\n');
};
export const info = (str) => {
    log(str, 'bgCyan');
};
export const success = (str) => {
    log(str, 'bgGreen');
};
export const warning = (str) => {
    log(str, 'bgYellow');
};
export const danger = (str) => {
    log(str, 'bgRed');
};
export const printTask = (task) => {
    const str = `${task.id}) ${task.text}`;
    if (task.done) {
        console.log(chalk.strikethrough.italic.dim.grey(str));
    }
    else {
        console.log(chalk.bold.yellowBright(str));
    }
};
