import "./style.css";
import icon from "./todo-icon.png";
import { sidebarToggler, pageToggler, inboxPage } from "./nav";
import { addProjectBtnEventListener, addTodoBtnEventListener } from "./events";
import { checkStorage } from "./storage";
import "./storage";
import "./nav";
import "./events";
import "./pages";
import "./items";

const todoIcon = document.createElement("link");
todoIcon.rel = "icon";
todoIcon.href = icon;
document.head.appendChild(todoIcon);

const toggler = document.querySelector(".navbar-toggler");
toggler.addEventListener("click", sidebarToggler);

pageToggler();
addTodoBtnEventListener();
addProjectBtnEventListener();

inboxPage.appendItems();

checkStorage();
