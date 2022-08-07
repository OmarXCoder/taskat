import { getAllTasks, getDoneTasks, getUndoneTasks } from '../store.js';
import { danger, printTask } from '../utils.js';
const listCmdHandler = (options) => {
    let tasks = [];
    let tag;
    if (options.done && !options.undone) {
        tasks = getDoneTasks();
        tag = 'complete';
    }
    else if (options.undone && !options.done) {
        tasks = getUndoneTasks();
        tag = 'incomplete';
    }
    else {
        tasks = getAllTasks();
        tag = 'any';
    }
    if (tasks.length > 0) {
        tasks.forEach(printTask);
    }
    else {
        danger(`You don't have ${tag} tasks.`);
    }
};
export default listCmdHandler;
