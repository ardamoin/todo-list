import { parseISO, format, add } from "date-fns";
import { doc } from "prettier";

/*
Use a factory function to return todo-items
each item should have the following properties:

String title
String description
Date dueDate
String priority
*/

export function todoItem(title, description, dueDate, priorityString) {
  const Priorities = Object.freeze({
    low: "low",
    medium: "medium",
    high: "high",
  });

  const priority = Priorities[priorityString] || "low";
  const date = format(parseISO(dueDate), "MM/dd/yyyy"); // parseISO parses date strings written in ISO 8601 format

  return { title, description, date, priority };
}

export function itemComponentGenerator(todoItem) {
  const itemDiv = document.createElement("div");
  const checkBox = document.createElement("input");
  const titleDiv = document.createElement("div");
  const detailsButton = document.createElement("button");
  const descriptionDiv = document.createElement("div");
  const dateDiv = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  itemDiv.classList.add("todo");

  checkBox.type = "checkbox";
  itemDiv.appendChild(checkBox);

  titleDiv.textContent = todoItem.title;
  titleDiv.classList.add("todo-title");
  itemDiv.appendChild(titleDiv);

  descriptionDiv.textContent = todoItem.description;
  descriptionDiv.classList.add("todo-description");
  itemDiv.appendChild(descriptionDiv);

  detailsButton.textContent = "DETAILS";
  detailsButton.classList.add("todo-details");
  itemDiv.appendChild(detailsButton);

  dateDiv.textContent = todoItem.date;
  dateDiv.classList.add("todo-date");
  itemDiv.appendChild(dateDiv);

  editButton.textContent = "EDIT";
  editButton.classList.add("todo-edit");
  itemDiv.appendChild(editButton);

  deleteButton.textContent = "DELETE";
  deleteButton.classList.add("todo-delete");
  itemDiv.appendChild(deleteButton);

  return itemDiv;
}

export function todoFormGenerator() {
  const formDiv = document.createElement("div");
  const headerDiv = document.createElement("div");
  const bodyDiv = document.createElement("div");
  const titleArea = document.createElement("textarea");
  const detailsArea = document.createElement("textarea");
  const dateDiv = document.createElement("div");
  const dateInput = document.createElement("input");
  const priorityDiv = document.createElement("div");
  const lowPriorityBtn = document.createElement("button");
  const mediumPriorityBtn = document.createElement("button");
  const highPriorityBtn = document.createElement("button");
  const addTodoBtn = document.createElement("button");

  headerDiv.textContent = "Create A New To Do";
  headerDiv.classList.add("form-component", "form-header");
  bodyDiv.classList.add("form-component", "form-body");
  formDiv.appendChild(headerDiv);

  formDiv.classList.add("form-component", "form");
  formDiv.appendChild(bodyDiv);

  titleArea.placeholder = "Title: Pay bills";
  titleArea.classList.add("form-component", "form-title");
  bodyDiv.appendChild(titleArea);

  detailsArea.placeholder = "Details: e.g internet, phone, rent.";
  detailsArea.classList.add("form-component", "form-details");
  bodyDiv.appendChild(detailsArea);

  dateDiv.textContent = "Due Date: ";
  dateInput.type = "date";
  dateDiv.classList.add("form-component", "form-date");
  dateInput.classList.add("form-component", "date-input");
  dateDiv.appendChild(dateInput);
  bodyDiv.appendChild(dateDiv);

  priorityDiv.textContent = "Priority: ";
  lowPriorityBtn.textContent = "LOW";
  mediumPriorityBtn.textContent = "MEDIUM";
  highPriorityBtn.textContent = "HIGH";
  addTodoBtn.textContent = "ADD TO DO";
  priorityDiv.classList.add("form-component", "form-priority");
  lowPriorityBtn.classList.add("form-component", "priority-button", "btn", "btn-outline-success");
  lowPriorityBtn.setAttribute("data-bs-toggle", "button");
  mediumPriorityBtn.classList.add("form-component", "priority-button", "btn", "btn-outline-warning");
  mediumPriorityBtn.setAttribute("data-bs-toggle", "button");
  highPriorityBtn.classList.add("form-component", "priority-button", "btn", "btn-outline-danger");
  highPriorityBtn.setAttribute("data-bs-toggle", "button");
  addTodoBtn.classList.add("form-component", "add-button", "btn", "btn-outline-primary");
  makeActiveButtonStateExclusive(lowPriorityBtn, mediumPriorityBtn, highPriorityBtn);
  priorityDiv.appendChild(lowPriorityBtn);
  priorityDiv.appendChild(mediumPriorityBtn);
  priorityDiv.appendChild(highPriorityBtn);
  priorityDiv.appendChild(addTodoBtn);
  bodyDiv.appendChild(priorityDiv);

  return formDiv;
}

function makeActiveButtonStateExclusive(...args) {
    /**
     *  The goal of this function is to make it so that activating one
     * of the priority buttons automatically deactivates the other two.
     */

    args.forEach(button => {
        button.addEventListener('click', () => {
            console.log(button);
            const otherButtons = args.filter(p => p !== button);
            console.log(otherButtons);
            otherButtons.map(p => {
                p.classList.remove("active");
                p.setAttribute("aria-pressed", "false");
            })
        })
    })
}
