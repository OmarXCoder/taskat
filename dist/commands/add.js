import { addTask, lastTaskId } from '../store.js';
import { success } from '../utils.js';
import listCmdHandler from './list.js';
const addCmdHandler = (text, options) => {
    const task = { id: lastTaskId() + 1, text, done: options.done };
    addTask(task);
    success('Task has been added successfully.');
    if (options.list) {
        listCmdHandler({ done: true, undone: true });
    }
};
export default addCmdHandler;
