import TaskManager from './taskManager';

/**
 * Initializes a new instance of TaskManager to manage tasks.
 */
const taskManager = new TaskManager();

/**
 * Example usage of the TaskManager class to demonstrate task management functionalities.
 */
try {
    // Add tasks with descriptions and due dates
    const task1 = taskManager.addTask('Learn JavaScript', '2025-01-10');
    const task2 = taskManager.addTask('Write unit tests', '2025-01-15');

    // Mark the first task as completed
    taskManager.markTaskComplete(task1.id);

    // Log all tasks (both completed and pending)
    console.log('All Tasks:', taskManager.listTasks());

    // Log only completed tasks
    console.log('Completed Tasks:', taskManager.listTasks('completed'));

    // Delete the first task
    taskManager.deleteTask(task1.id);

    // Log remaining tasks after deletion
    console.log('Tasks after deletion:', taskManager.listTasks());
} catch (error) {
    // Log errors if any operation fails (e.g., task not found)
    console.error('Error:', error.message);
}

/**
 * Export the taskManager instance to allow external access.
 */
export default taskManager;
