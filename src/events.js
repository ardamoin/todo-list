import { todoFormGenerator, todoItem, itemComponentGenerator, detailsFormGenerator } from "./items";
import { todos } from "./nav";
import { remove } from "lodash";

export function addTodoBtnEventListener() {
    const addTodo = document.querySelector(".add-task");

    addTodo.addEventListener("click", () => {
        overlayToggle.enable();
        document.body.appendChild(todoFormGenerator());
    })

    // For todo button in the main screen, not the form
}

export function editBtnEventListener() {
    const parentForm = this.closest("[data-info]");
    const dataInfoValue = parentForm.getAttribute("data-info");
    const targetItemComponent = document.querySelector(`.main-content [data-info='${dataInfoValue}']`);

    const bodyDiv = this.closest(".form-body");
    const closeBtn = bodyDiv.parentNode.querySelector(".form-close");
    const newTitle = bodyDiv.querySelector(".form-title");
    const newDescription = bodyDiv.querySelector(".form-details");
    const newDate = bodyDiv.querySelector(".date-input");
    const newPriority = bodyDiv.querySelector("button.active");
    const newObject = todoItem(newTitle.value, newDescription.value, newDate.value, newPriority.textContent);
    

    updateItemComponent(targetItemComponent, newObject);

    for (let i = 0; i < todos.length; i++){
        if (JSON.stringify(todos[i]) === dataInfoValue) {
            todos.splice(i, 1, newObject);
        }
    };

    closeBtn.click();
    overlayToggle.disable();

}

function updateItemComponent(targetItemComponent,todoItem) {
    const priorityStrip = targetItemComponent.querySelector(".priority-strip");
    const title = targetItemComponent.querySelector(".todo-title");
    const date = targetItemComponent.querySelector(".todo-date");

    priorityStrip.classList.remove(priorityStrip.classList[1]);
    priorityStrip.classList.add(`priority-${todoItem.priority}`);

    title.textContent = todoItem.title;
    date.textContent = todoItem.date;


    targetItemComponent.setAttribute("data-info", JSON.stringify(todoItem));
    
}


const overlayToggle = (function() {
    const overlay = document.querySelector(".overlay");

    const enable = () => {
        overlay.classList.add("enabled");
        makeBackgroundItemsStatic(true);
    };
    const disable = () => {
        overlay.classList.remove("enabled");
        makeBackgroundItemsStatic(false);
    };

    return {enable, disable};
})();

export function closeBtnEventListener() {
    const bodyNode = document.body;
    const formNode = this.closest("body>div");

    bodyNode.removeChild(formNode);
    overlayToggle.disable();
}

export function submitBtnEventListener() {
    const bodyDiv = this.parentNode.parentNode;
    const closeBtn = bodyDiv.parentNode.querySelector(".form-close");
    const title = bodyDiv.querySelector(".form-title");
    const description = bodyDiv.querySelector(".form-details");
    const date = bodyDiv.querySelector(".date-input");
    const priority = bodyDiv.querySelector("button.active").textContent;



    const fields = [
        {key: "Title", element: title},
        {key:"Date", element: date}
    ];

    let emptyField;

    for (let field of fields) {
        if (field.element.value === "") {
            emptyField = field.key;
            emptyFieldAlert(emptyField);
            break;
        }
    }

    if (emptyField === undefined) {
        const newItem = todoItem(title.value, description.value, date.value, priority);
        closeBtn.click();
        todos.push(newItem);
        console.log(todos);
        insertTodoItemComponent(newItem);
    }
}

export function deleteBtnEventListener() {
    const mainContent = document.querySelector(".main-content");
    const component = this.parentNode;

    mainContent.removeChild(component);
    _.remove(todos, obj => JSON.stringify(obj) === component.getAttribute("data-info"));
}

export function detailsBtnEventListener() {
    const parent = this.parentNode;
    const detailsPage = detailsFormGenerator(JSON.parse(parent.getAttribute("data-info")));
    overlayToggle.enable();
    document.body.appendChild(detailsPage);
}

export function addEditBtnEventListener(editButton) {
    editButton.addEventListener("click", function() {
        const parent = this.parentNode;
        const editPage = todoFormGenerator(false, JSON.parse(parent.getAttribute("data-info")));
        overlayToggle.enable();
        document.body.appendChild(editPage);
    })
}

export function homeBtnEventListener() {
    const inboxBtn = document.querySelector(".page-inbox");
    inboxBtn.click();
  }


export function insertTodoItemComponent(todoItem) {
    document.querySelector(".main-content").appendChild(itemComponentGenerator(todoItem));
}

function makeBackgroundItemsStatic(makeStatic) {
    const elements = ['.header', '.content', '.add-task'];
    const pointerEvents = makeStatic ? 'none' : '';
  
    elements.forEach(element => {
        const el = document.querySelector(element);
        el.style.pointerEvents = pointerEvents;
    });
}

function emptyFieldAlert(fieldName) {
    window.alert(`${fieldName} is required`);
}