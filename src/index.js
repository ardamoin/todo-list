import "./style.css";
import icon from "./todo-icon.png";
import sidebarToggler from "./nav";
import { todoItem, itemComponentGenerator, todoFormGenerator } from "./items";

const todoIcon = document.createElement("link");
todoIcon.rel = "icon";
todoIcon.href = icon;
document.head.appendChild(todoIcon);

const toggler = document.querySelector(".navbar-toggler");
toggler.addEventListener("click", sidebarToggler);

console.log(todoItem("mina", "sandra", "20230126", "medium"));
const myItem = todoItem("title", "description", "20230126", "low");
const myDiv = itemComponentGenerator(myItem);
const myItem2 = todoItem("Find", "description","20230129", "high");
const myDiv2 = itemComponentGenerator(myItem2);

document.querySelector(".main-content").appendChild(myDiv);
document.querySelector(".main-content").appendChild(myDiv2);

