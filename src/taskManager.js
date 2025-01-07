/**
 * TaskManager class for managing tasks.
 * 
 * Provides methods for adding, marking as complete, listing, and deleting tasks.
 */
class TaskManager {
    /**
     * Initializes a new TaskManager instance.
     * 
     * @constructor
     */
    constructor() {
        /**
         * Array of tasks.t
         * 
         * @type {Object[]}
         */
        this.tasks = [];

        /**
         * Next available task ID.
         * 
         * @type {number}
         */
        this.nextId = 1;
    }

    /**
     * Adds a new task.
     * 
     * @param {string} description - Task description.
     * @param {string} dueDate - Task due date.
     * @returns {Object} The added task.
     * @throws {Error} If task description or due date is missing.
     */
    addTask(description, dueDate) {
        if (!description || !dueDate) {
            throw new Error("Task description and due date are required.");
        }
        const task = {
            /**
             * Unique task ID.
             * 
             * @type {number}
             */
            id: this.nextId++,

            /**
             * Task description.
             * 
             * @type {string}
             */
            description,

            /**
             * Task due date.
             * 
             * @type {string}
             */
            dueDate,

            /**
             * Task completion status.
             * 
             * @type {boolean}
             */
            completed: false,
        };
        this.tasks.push(task);
        return task;
    }

    /**
     * Marks a task as complete.
     * 
     * @param {number} id - Task ID.
     * @returns {Object} The marked task.
     * @throws {Error} If task with the given ID is not found.
     */
    markTaskComplete(id) {
        const task = this.tasks.find((t) => t.id === id); // 't' for camelCase consistency
        if (!task) {
            throw new Error(`Task with ID ${id} not found.`);
        }
        task.completed = true;
        return task;
    }

    /**
     * Lists tasks with optional filtering.
     * 
     * @param {string} [filter=null] - Filter type (completed or pending).
     * @returns {Object[]} The listed tasks.
     */
    listTasks(filter = null) {
        if (filter === "completed") {
            return this.tasks.filter((t) => t.completed); // 't' for camelCase consistency
        } else if (filter === "pending") {
            return this.tasks.filter((t) => !t.completed); // 't' for camelCase consistency
        }
        return this.tasks;
    }

    /**
     * Deletes a task by ID.
     * 
     * @param {number} id - Task ID.
     * @returns {Object} The deleted task.
     * @throws {Error} If task with the given ID is not found.
     */
    deleteTask(id) {
        const index = this.tasks.findIndex((t) => t.id === id); // 't' for camelCase consistency
        if (index === -1) {
            throw new Error(`Task with ID ${id} not found.`);
        }
        return this.tasks.splice(index, 1)[0];
    }
}

export default TaskManager;
