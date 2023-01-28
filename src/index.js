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
const myItem = todoItem("title", "description", "20230126", "medium");
const myDiv = itemComponentGenerator(myItem);

document.querySelector(".main-content").appendChild(myDiv);
document.body.appendChild(todoFormGenerator());
