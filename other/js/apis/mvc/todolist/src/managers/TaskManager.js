import { EventEmitter } from "../utils/EventEmitter.js";
import { Task } from "../models/task.js";

export class TaskManager extends EventEmitter {
  #tasks;

  constructor() {
    super();
    this.#tasks = [];
  }

  add(taskTitle) {
    const newTask = new Task(taskTitle);
    this.#tasks.push(newTask);
    this.emit("task:added", { task: newTask });
    this.emit("tasks:changed", { tasks: this.getAll() });

    return newTask;
  }

  remove(taskId) {
    const taskToDelete = getById(taskId);

    if (taskToDelete) {
      this.#tasks = this.#tasks.filter((task) => task.id !== taskId);
      this.emit("task:removed", { task: taskToDelete });
      this.emit("tasks:changed", { tasks: this.getAll() });

      return true;
    }

    return false;
  }

  toggle(taskId) {
    const taskToToggle = getById(taskId);

    if (taskToToggle) {
      taskToToggle.toggle();
      this.emit("task:toggled", { task: taskToToggle });
      this.emit("tasks:changed", { tasks: this.getAll() });
    }
  }

  update(taskId, newTitle) {
    const taskToUpdate = getById(taskId);

    if (taskToUpdate) {
      taskToUpdate.update(newTitle);
      this.emit("task:updated", { task: taskToUpdate });
      this.emit("tasks:changed", { tasks: this.getAll() });
    }
  }

  getAll() {
    return this.#tasks.map((task) => task.toJSON());
  }

  getStats() {
    const tasks = this.getAll();
    return {
      total: tasks,
      completed: tasks.filter((task) => task.completed === true),
      active: tasks.filter((task) => task.completed === false),
    };
  }

  loadFromJSON(jsonTasks) {
    this.#tasks = jsonTasks.map((jsonTask) => Task.fromJSON(jsonTask));
  }

  getById(taskId) {
    return this.#tasks.find((task) => task.id === taskId);
  }
}
