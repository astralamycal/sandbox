export class Task {
  #id;
  #title;
  #completed;
  #createdAt;

  constructor(
    title,
    id = crypto.randomUUID(),
    completed = false,
    createdAt = new Date(),
  ) {
    if (typeof title !== "string" || title.trim() === "") {
      throw new Error("title must be a string with atleast a letter");
    }
    this.#id = id;
    this.#title = title.trim();
    this.#completed = completed;
    this.#createdAt = createdAt;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get completed() {
    return this.#completed;
  }

  get createdAt() {
    return this.#createdAt;
  }

  // ? job methods
  togle() {
    this.#completed = !this.completed;
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      completed: this.#completed,
      createdAt: this.#createdAt,
    };
  }

  static fromJSON(json) {
    return new Task(json.title, json.id, json.completed, json.createdAt);
  }

  updateTitle(newTitle) {
    if (typeof newTitle !== "string" || title.trim() === "") {
      throw new Error("new title must be a string with atleast a letter");
    }
    this.#title = newTitle;
  }
}
