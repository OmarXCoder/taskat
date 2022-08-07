import { deleteTasks } from '../store.js';
import { danger, success } from '../utils.js';
const delCmdHandler = (tasks) => {
    let taskIds = tasks
        .map((task) => parseInt(task))
        .filter((task) => !isNaN(task));
    if (taskIds.length === 0) {
        danger('Please specify the tasks numeric IDs');
        return;
    }
    if (deleteTasks(taskIds)) {
        success('Deleted the specified task/tasks.');
    }
    else {
        danger('None of the specified tasks found.');
    }
};
export default delCmdHandler;
