import "./style.css";
import * as items from "./items.js";
import { Page } from "./pages";

const sidebar = document.querySelector(".sidebar");

function hideSidebar() {
  sidebar.style.minWidth = "0";
  sidebar.style.width = "0";
  sidebar.classList.add("hidden");
}

function showSidebar() {
  sidebar.style.minWidth = "250px";
  sidebar.style.width = "250px";
  sidebar.classList.remove("hidden");
}

//Determines whether to hide or show sidebar.
export function sidebarToggler() {
  if (sidebar.classList.contains("hidden")) {
    showSidebar();
  } else {
    hideSidebar();
  }
}

const myItem = items.todoItem("title", "description", "2023-01-01", "low");
const myDiv = items.itemComponentGenerator(myItem);
const myItem2 = items.todoItem("Find", "description","2023-01-01", "high");
const myDiv2 = items.itemComponentGenerator(myItem2);
const myItem3 = items.todoItem("hello", "any", "2024-02-14", "medium");
const myDiv3 = items.itemComponentGenerator(myItem3);

const myItem4 = items.todoItem("today", "any", "2023-02-08", "medium");
const myItem5 = items.todoItem("today", "any", "2023-02-08", "low");
const myItem6 = items.todoItem("thisWeek", "any", "2023-02-09", "high");

export let todos = [myItem, myItem2, myItem3, myItem4, myItem5, myItem6];

export let inboxPage = new Page(todos, "Inbox");
let todayPage = new Page(todos, "Today");
let weekPage = new Page(todos, "This Week");


const mainPages = {
  "Inbox": inboxPage,
  "Today": todayPage,
  "This Week": weekPage
}

export function pageToggler() {
  const pages = Array.from(document.querySelectorAll(".page"));

  pages.forEach(page => {
    page.addEventListener("click", () => {

      const otherPages = pages.filter(p => p !== page);

      otherPages.forEach(p => {
        p.classList.remove("active");
        mainPages[p.textContent].clearItems();
      });

      mainPages[page.textContent].appendItems();
      page.classList.add("active");

    });
  });
}