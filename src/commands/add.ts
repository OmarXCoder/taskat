import { Task, addTask, lastTaskId } from '../store.js';
import { success } from '../utils.js';
import listCmdHandler from './list.js';

interface addCmdOptions {
    done: boolean;
    list: boolean;
}

const addCmdHandler = (text: string, options: addCmdOptions) => {
    const task: Task = { id: lastTaskId() + 1, text, done: options.done };

    addTask(task);

    success('Task has been added successfully.');

    if (options.list) {
        listCmdHandler({ done: true, undone: true });
    }
};

export default addCmdHandler;
