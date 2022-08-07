import { clearTasks, hasTasks } from '../store.js';
import { danger, success } from '../utils.js';

const clearCmdHandler = (options: { all: boolean }) => {
    if (!hasTasks()) {
        danger(`No tasks found`);
        return;
    }

    if (clearTasks(options.all)) {
        const tag = options.all ? 'All' : 'Complete';
        success(`${tag} tasks deleted`);
    } else {
        options.all
            ? danger(`No tasks found`)
            : danger(`No completed tasks found. use -a option to clear all`);
    }
};

export default clearCmdHandler;
