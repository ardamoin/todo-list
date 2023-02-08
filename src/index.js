import "./style.css";
import icon from "./todo-icon.png";
import sidebarToggler from "./nav";
import * as items from "./items";
import { addTodoBtnEventListener } from "./events";
import { Page } from "./pages";

const todoIcon = document.createElement("link");
todoIcon.rel = "icon";
todoIcon.href = icon;
document.head.appendChild(todoIcon);

const toggler = document.querySelector(".navbar-toggler");
toggler.addEventListener("click", sidebarToggler);

// console.log(items.todoItem("mina", "sandra", "2023-01-01", "medium"));
const myItem = items.todoItem("title", "description", "2023-01-01", "low");
const myDiv = items.itemComponentGenerator(myItem);
const myItem2 = items.todoItem("Find", "description","2023-01-01", "high");
const myDiv2 = items.itemComponentGenerator(myItem2);
const myItem3 = items.todoItem("hello", "any", "2024-02-14", "medium");
const myDiv3 = items.itemComponentGenerator(myItem3);

const myItem4 = items.todoItem("today", "any", "2023-02-07", "medium");
const myItem5 = items.todoItem("today", "any", "2023-02-07", "low");
const myItem6 = items.todoItem("thisWeek", "any", "2023-02-09", "high");

addTodoBtnEventListener();

debugger;
let inboxPage = new Page([myItem, myItem2, myItem3, myItem4, myItem5, myItem6], "inbox");
inboxPage.appendItems();

// document.body.appendChild(items.todoFormGenerator());
