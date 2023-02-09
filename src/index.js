import "./style.css";
import icon from "./todo-icon.png";
import { sidebarToggler, pageToggler, inboxPage} from "./nav";
import * as items from "./items";
import { addTodoBtnEventListener, homeBtnEventListener } from "./events";
import { Page } from "./pages";

const todoIcon = document.createElement("link");
todoIcon.rel = "icon";
todoIcon.href = icon;
document.head.appendChild(todoIcon);

const toggler = document.querySelector(".navbar-toggler");
toggler.addEventListener("click", sidebarToggler);

const homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", homeBtnEventListener);


pageToggler();
addTodoBtnEventListener();


inboxPage.appendItems();

