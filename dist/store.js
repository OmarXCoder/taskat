import Conf from 'conf';
const store = new Conf({
    projectName: 'taskat',
    projectVersion: '1.0.3',
});
export const TODOS_STORE_KEY = 'todo-list';
export const getAllTasks = () => {
    const tasks = store.get(TODOS_STORE_KEY, []);
    return tasks;
};
export const getDoneTasks = () => {
    const tasks = getAllTasks();
    return tasks.filter((task) => task.done);
};
export const getUndoneTasks = () => {
    const tasks = getAllTasks();
    return tasks.filter((task) => !task.done);
};
export const hasTasks = () => {
    return getAllTasks().length > 0;
};
export const hasAll = (taskIds) => {
    const tasks = getAllTasks();
    return taskIds.every((taskId) => {
        return tasks.findIndex((task) => task.id == taskId) > -1;
    });
};
export const hasSome = (taskIds) => {
    const tasks = getAllTasks();
    return taskIds.some((taskId) => {
        return tasks.findIndex((task) => task.id == taskId) > -1;
    });
};
export const findTaskById = (taskId) => {
    const tasks = getAllTasks();
    return tasks.find((task) => task.id === taskId);
};
export const addTask = (task) => {
    let tasks = getAllTasks();
    tasks.push(task);
    store.set(TODOS_STORE_KEY, tasks);
};
export const deleteTasks = (taskIds) => {
    if (!hasSome(taskIds)) {
        return false;
    }
    let tasks = getAllTasks();
    tasks = tasks.filter((task) => !taskIds.includes(task.id));
    store.set(TODOS_STORE_KEY, tasks);
    return true;
};
export const toggleTasksDone = (taskIds, done, all) => {
    if (taskIds.length > 0 && !hasSome(taskIds)) {
        return false;
    }
    let tasks = getAllTasks();
    tasks = tasks.map((task) => {
        if (all) {
            task.done = done;
        }
        else if (taskIds.includes(task.id)) {
            task.done = done;
        }
        return task;
    });
    store.set(TODOS_STORE_KEY, tasks);
    return true;
};
export const lastTaskId = () => {
    const tasks = getAllTasks();
    let lastId = 0;
    tasks.forEach((task) => {
        if (task.id > lastId) {
            lastId = task.id;
        }
    });
    return lastId;
};
export const clearTasks = (clearAll) => {
    let tasks = getAllTasks();
    if (tasks.length === 0) {
        return false;
    }
    if (clearAll === false && tasks.every((item) => !item.done)) {
        return false;
    }
    tasks = clearAll ? [] : tasks.filter((item) => !item.done);
    store.set(TODOS_STORE_KEY, tasks);
    return true;
};
