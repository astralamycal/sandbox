export class TaskFormView {
  #formElement;
  #inputElement;
  #submitCallback;

  constructor(formSelector, inputSelector) {
    this.#formElement = document.querySelector(formSelector);
    this.#inputElement = document.querySelector(inputSelector);

    if (!this.#formElement || !this.#inputElement) {
      throw new Error("Form or text section not found");
    }

    this.#setupEventListener();
  }

  #setupEventListener() {
    this.#formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = this.getTitle();
      if (typeof this.#submitCallback === "function") {
        this.#submitCallback(title);
      }
    });
  }

  onSubmit(callBack) {
    this.#submitCallback = callBack;
  }

  getTitle() {
    return this.#inputElement.value.trim();
  }

  clear() {
    this.#inputElement.value = "";
    this.#inputElement.focus();
  }
}
