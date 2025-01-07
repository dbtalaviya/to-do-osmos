/**
 * TaskManager class for managing tasks.
 * 
 * @class TaskManager
 */
import TaskManager from "../src/taskManager.js";

/**
 * Test suite for TaskManager class.
 * 
 * @describe TaskManager
 */
describe("TaskManager", () => {
    /**
     * Initialize a new TaskManager instance before each test.
     * 
     * @let taskManager
     */
    let taskManager;

    /**
     * Set up a new TaskManager instance before each test.
     * 
     * @beforeEach
     */
    beforeEach(() => {
        taskManager = new TaskManager();
    });

    /**
     * Test adding a new task.
     * 
     * @test should add a new task
     */
    test("should add a new task", () => {
        /**
         * Add a new task with description and due date.
         * 
         * @const task
         */
        const task = taskManager.addTask("Test Task", "2025-01-31");
        /**
         * Expect the added task to match the expected task object.
         * 
         * @expect task
         */
        expect(task).toEqual({
            id: 1,
            description: "Test Task",
            dueDate: "2025-01-31",
            completed: false,
        });
    });

    /**
     * Test throwing an error when adding a task without description or due date.
     * 
     * @test should throw error when adding a task without description or due date
     */
    test("should throw error when adding a task without description or due date", () => {
        /**
         * Expect an error to be thrown when adding a task with null description.
         * 
         * @expect taskManager.addTask
         */
        expect(() => taskManager.addTask(null, "2025-01-31")).toThrow(
            "Task description and due date are required."
        );
    });

    /**
     * Test marking a task as complete.
     * 
     * @test should mark a task as complete
     */
    test("should mark a task as complete", () => {
        /**
         * Add a new task with description and due date.
         * 
         * @const task
         */
        const task = taskManager.addTask("Test Task", "2025-01-31");
        /**
         * Mark the task as complete.
         * 
         * @const updatedTask
         */
        const updatedTask = taskManager.markTaskComplete(task.id);
        /**
         * Expect the task to be marked as complete.
         * 
         * @expect updatedTask.completed
         */
        expect(updatedTask.completed).toBe(true);
    });

    /**
     * Test listing tasks with filtering.
     * 
     * @test should list tasks with filtering
     */
    test("should list tasks with filtering", () => {
        /**
         * Add two tasks with different due dates.
         * 
         * @taskManager.addTask
         */
        taskManager.addTask("Task 1", "2025-01-31");
        taskManager.addTask("Task 2", "2025-02-01");
        /**
         * Mark the first task as complete.
         * 
         * @taskManager.markTaskComplete
         */
        taskManager.markTaskComplete(1);
        /**
         * Expect the list of completed tasks to have one task.
         * 
         * @expect taskManager.listTasks
         */
        expect(taskManager.listTasks("completed").length).toBe(1);
        /**
         * Expect the list of pending tasks to have one task.
         * 
         * @expect taskManager.listTasks
         */
        expect(taskManager.listTasks("pending").length).toBe(1);
    });

    /**
     * Test deleting a task.
     * 
     * @test should delete a task
     */
    test("should delete a task", () => {
        /**
         * Add a new task with description and due date.
         * 
         * @const task
         */
        const task = taskManager.addTask("Task to delete", "2025-01-31");
        /**
         * Delete the task.
         * 
         * @const deletedTask
         */
        const deletedTask = taskManager.deleteTask(task.id);
        /**
         * Expect the deleted task to match the original task.
         * 
         * @expect deletedTask
         */
        expect(deletedTask).toEqual(task);
    });

    /**
     * Test throwing an error when deleting a non-existent task.
     * 
     * @test should throw error when deleting a non-existent task
     */
    test("should throw error when deleting a non-existent task", () => {
        /**
         * Expect an error to be thrown when deleting a task with non-existent ID.
         * 
         * @expect taskManager.deleteTask
         */
        expect(() => taskManager.deleteTask(999)).toThrow(
            "Task with ID 999 not found."
        );
    });
});