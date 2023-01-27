import { parseISO, format } from 'date-fns';


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
    const date = format(parseISO(dueDate), 'MM/dd/yyyy'); // parseISO parses date strings written in ISO 8601 format

    return {title, description, date, priority};
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