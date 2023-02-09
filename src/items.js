import { parseISO, format, add } from "date-fns";
import { doc } from "prettier";
import { closeBtnEventListener, submitBtnEventListener, deleteBtnEventListener, detailsBtnEventListener, addEditBtnEventListener, editBtnEventListener } from "./events";

/*
Use a factory function to return todo-items
each item should have the following properties:

String title
String description
Date dueDate
String priority
*/

export function todoItem(title, description, dueDate, priorityString, projectName) {
  const Priorities = Object.freeze({
    low: "low",
    medium: "medium",
    high: "high",
  });

  const priority = Priorities[priorityString.toLowerCase()] || "low";
  const project = projectName || "inbox";
  // const date = format(parseISO(dueDate), "MM/dd/yyyy"); // parseISO parses date strings written in ISO 8601 format
  const date = dueDate;
  
  return { title, description, date, priority, project };
}

export function itemComponentGenerator(todoItem) {
  const itemDiv = document.createElement("div");
  const priorityColor = document.createElement("div");
  const checkBox = document.createElement("input");
  const titleDiv = document.createElement("div");
  const detailsButton = document.createElement("button");
  const dateDiv = document.createElement("div");
  const editButton = document.createElement("button");
  const editImg = document.createElement("i");
  const deleteButton = document.createElement("button");
  const deleteImg = document.createElement("i");

  itemDiv.classList.add("todo");
  itemDiv.setAttribute("data-info", JSON.stringify(todoItem));

  priorityColor.classList.add("priority-strip", `priority-${todoItem.priority}`);
  itemDiv.appendChild(priorityColor);

  checkBox.type = "checkbox";
  checkBox.classList.add("todo-checkbox");
  checkBox.addEventListener("click", () => {
    if (checkBox.classList.contains("cb-checked")) {
        checkBox.classList.remove("cb-checked");
        titleDiv.classList.remove("checked");
        detailsButton.classList.remove("checked");
        dateDiv.classList.remove("checked");
        editButton.classList.remove("checked");
        deleteButton.classList.remove("checked");
    } else {
        checkBox.classList.add("cb-checked");
        titleDiv.classList.add("checked");
        detailsButton.classList.add("checked");
        dateDiv.classList.add("checked");
        editButton.classList.add("checked");
        deleteButton.classList.add("checked");
    }
  })
  itemDiv.appendChild(checkBox);

  titleDiv.textContent = todoItem.title;
  titleDiv.classList.add("todo-title");
  itemDiv.appendChild(titleDiv);

  detailsButton.textContent = "DETAILS";
  detailsButton.classList.add("todo-details");
  detailsButton.addEventListener("click", detailsBtnEventListener);
  itemDiv.appendChild(detailsButton);

  dateDiv.textContent = todoItem.date;
  dateDiv.classList.add("todo-date");
  itemDiv.appendChild(dateDiv);

  editButton.classList.add("todo-edit");
  editImg.classList.add("bi", "bi-pencil-square");
  editButton.appendChild(editImg);
  addEditBtnEventListener(editButton);
  itemDiv.appendChild(editButton);

  deleteButton.classList.add("todo-delete");
  deleteImg.classList.add("bi", "bi-trash");
  deleteButton.appendChild(deleteImg);
  deleteButton.addEventListener("click", deleteBtnEventListener);
  itemDiv.appendChild(deleteButton);

  return itemDiv;
}

export function todoFormGenerator(newForm = true, todoItem = null) {
  const formDiv = document.createElement("div");
  const closeButton = document.createElement("div");
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

  closeButton.classList.add("form-close");
  closeButton.textContent = "x";
  closeButton.addEventListener("click", closeBtnEventListener);

  headerDiv.textContent = "Create A New To Do";
  headerDiv.classList.add("form-component", "form-header");
  bodyDiv.classList.add("form-component", "form-body");
  headerDiv.appendChild(closeButton);
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
  lowPriorityBtn.classList.add("form-component", "priority-button", "btn", "btn-outline-success", "active");
  lowPriorityBtn.setAttribute("data-bs-toggle", "button");
  mediumPriorityBtn.classList.add("form-component", "priority-button", "btn", "btn-outline-warning");
  mediumPriorityBtn.setAttribute("data-bs-toggle", "button");
  highPriorityBtn.classList.add("form-component", "priority-button", "btn", "btn-outline-danger");
  highPriorityBtn.setAttribute("data-bs-toggle", "button");
  addTodoBtn.classList.add("form-component", "add-button", "btn", "btn-outline-primary");
  makeActiveButtonStateExclusive(lowPriorityBtn, mediumPriorityBtn, highPriorityBtn);
  addTodoBtn.addEventListener("click", submitBtnEventListener);
  priorityDiv.appendChild(lowPriorityBtn);
  priorityDiv.appendChild(mediumPriorityBtn);
  priorityDiv.appendChild(highPriorityBtn);
  priorityDiv.appendChild(addTodoBtn);
  bodyDiv.appendChild(priorityDiv);

  if (newForm === false) {
    formDiv.removeChild(headerDiv);
    bodyDiv.appendChild(closeButton);
    titleArea.value = todoItem.title;
    detailsArea.value = todoItem.description;
    dateInput.value = todoItem.date;
    lowPriorityBtn.classList.remove("active");
    
    const buttons = [
      {key: "low", buttonElement: lowPriorityBtn},
      {key: "medium", buttonElement: mediumPriorityBtn},
      {key: "high", buttonElement: highPriorityBtn},
    ];

    buttons.forEach(button => {
      if (button.key === todoItem.priority) {
        button.buttonElement.classList.add("active");
      }
    })

    formDiv.setAttribute("data-info", JSON.stringify(todoItem));
    addTodoBtn.textContent = "CONFIRM EDIT";
    addTodoBtn.removeEventListener("click", submitBtnEventListener);
    addTodoBtn.addEventListener("click", editBtnEventListener);

  }


  return formDiv;
}

export function detailsFormGenerator(todoItem) {
  const formDiv = document.createElement("div");
  formDiv.classList.add("details-form");
  const closeButton = document.createElement("div");
  closeButton.classList.add("details-close");
  closeButton.textContent = "x";
  closeButton.addEventListener("click", closeBtnEventListener);
  const titleTag = document.createElement("h1");
  titleTag.textContent = todoItem.title;
  formDiv.appendChild(closeButton);
  formDiv.appendChild(titleTag);

  const fields = [
    { key: "project", label: "Project:", className: "details-project" },
    { key: "priority", label: "Priority:", className: "details-priority" },
    { key: "date", label: "Due Date:", className: "details-date" },
    { key: "description", label: "Description:", className: "details-description" }
  ];

  fields.forEach(field => {
    const div = document.createElement("div");
    const label = document.createElement("span");
    label.textContent = field.label;
    label.classList.add(field.className);
    div.appendChild(label);

    const content = document.createElement("span");
    content.textContent = todoItem[field.key];
    div.appendChild(content);

    formDiv.appendChild(div);
  });

  return formDiv;
}

function makeActiveButtonStateExclusive(...args) {
    args.forEach(button => {
        button.addEventListener('click', () => {
            const otherButtons = args.filter(p => p !== button);
            otherButtons.map(p => {
                p.classList.remove("active");
                p.setAttribute("aria-pressed", "false");
            })
        })
    })
}

