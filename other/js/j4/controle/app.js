const form = document.createElement("form");
form.style.gap = "10px";

const mail = document.createElement("input");
form.appendChild(mail);

const password = document.createElement("input");
form.appendChild(password);

const submit = document.createElement("input");
submit.type = "submit";
form.appendChild(submit);

document.body.appendChild(form);