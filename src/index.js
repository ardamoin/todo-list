import "./style.css";
import icon from "./todo-icon.png";
import sidebarToggler from "./nav";
import * as items from "./items";
import { addTodoBtnEventListener } from "./events";

const todoIcon = document.createElement("link");
todoIcon.rel = "icon";
todoIcon.href = icon;
document.head.appendChild(todoIcon);

const toggler = document.querySelector(".navbar-toggler");
toggler.addEventListener("click", sidebarToggler);

console.log(items.todoItem("mina", "sandra", "2023-01-01", "medium"));
const myItem = items.todoItem("title", "description", "2023-01-01", "low");
const myDiv = items.itemComponentGenerator(myItem);
const myItem2 = items.todoItem("Find", "description","2023-01-01", "high");
const myDiv2 = items.itemComponentGenerator(myItem2);

document.querySelector(".main-content").appendChild(myDiv);
document.querySelector(".main-content").appendChild(myDiv2);
document.querySelector(".main-content").appendChild(items.itemComponentGenerator(items.todoItem("hello", "any", "2024-02-14", "medium")));

addTodoBtnEventListener();

// document.body.appendChild(items.todoFormGenerator());
