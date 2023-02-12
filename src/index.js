import "./style.css";
import icon from "./todo-icon.png";
import { sidebarToggler, pageToggler, inboxPage, projects} from "./nav";
import * as items from "./items";
import { addProjectBtnEventListener, addTodoBtnEventListener } from "./events";
import { Page } from "./pages";

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


