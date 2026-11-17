import { TaskManager } from "../managers/TaskManager.js";
import { TaskFormView } from "../views/TaskFormView.js";
import { TaskListView } from "../views/TaskListView.js";

export class TaskController {
  #taskManager;
  #views;

  constructor() {
    this.#taskManager = new TaskManager();

    this.#views = {
      form: new TaskFormView("#task-form", "#task-input"),
      list: new TaskListView("#task-list"),
    };

    this.#init();
  }

  #init() {
    this.#taskManager.on("task:added", (data) => {
      console.log(`task added: ${data.task.title}`);
      this.#saveToStorage();
    });

    this.#views.form.onSubmit((title) => this.#handleAddTask(title));

    this.#taskManager.on("tasks:changed", (data) =>
      this.#updateAllViews(data.tasks),
    );

    this.#loadFromStorage();
  }

  #handleAddTask(title) {
    try {
      this.#taskManager.add(title);
    } catch (error) {
      console.log(error);
    }
  }

  #updateAllViews(tasks = this.#taskManager.getAll()) {
    this.#views.list.render(tasks);
  }

  #saveToStorage() {
    try {
      const json = JSON.stringify(this.#taskManager.getAll());
      localStorage.setItem("tasks", json);
    } catch (error) {
      console.error("Unable to save:", error);
    }
  }

  #loadFromStorage() {
    try {
      const json = localStorage.getItem("tasks");

      if (json) {
        const data = JSON.parse(json);
        this.#taskManager.loadFromJSON(data);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
