import { toggleTasksDone } from '../store.js';
import { danger, success } from '../utils.js';

const doneCmdHandler = (tasks: string[], options: { all: boolean }) => {
    let taskIds = tasks
        .map((task) => parseInt(task))
        .filter((task) => !isNaN(task));

    if (!options.all && taskIds.length === 0) {
        danger('Please specify tasks numeric IDs or use -a option to mark all');
        return;
    }

    if (toggleTasksDone(taskIds, true, options.all)) {
        success('Tasks marked done.');
    } else {
        danger('None of the specified tasks found.');
    }
};

export default doneCmdHandler;
