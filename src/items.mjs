import { parseISO } from 'date-fns';


/*
Use a factory function to return todo-items
each item should have the following properties:

String title
String description
Date dueDate
String priority
*/

function todoItem(title, description, dueDate, priorityString) {
    const Priorities = Object.freeze({
        low: "Low",
        medium: "Medium",
        high: "High",
    });

    const priority = Priorities[priorityString];
    const date = parseISO(dueDate);

    return {title, description, date, priority};
}

const exDate = parseISO("20230125");

const mystring = "hello";