import { TaskController } from "./controllers/TaskController";

document.addEventListener("DOMContentLoaded", () => {
  const app = new TaskController();
  console.log("App started.");
});
