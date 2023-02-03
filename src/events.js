import { todoFormGenerator, todoItem, itemComponentGenerator, detailsFormGenerator } from "./items";


export function addTodoBtnEventListener() {
    const addTodo = document.querySelector(".add-task");

    addTodo.addEventListener("click", () => {
        overlayToggle.enable();
        document.body.appendChild(todoFormGenerator());
    })

    // For todo button in the main screen, not the form
}


const overlayToggle = (function() {
    const overlay = document.querySelector(".overlay");

    const enable = () => {overlay.classList.add("enabled")};
    const disable = () => {overlay.classList.remove("enabled")};

    return {enable, disable};
})();

export function addCloseEventListener(closeBtn) {
    closeBtn.addEventListener("click", function() {
        const bodyNode = document.body;
        const formNode = this.closest("body>div");

        bodyNode.removeChild(formNode);
        overlayToggle.disable();
    })
}

export function addSubmitBtnEventListener(submitBtn) {
    submitBtn.addEventListener("click", function () {
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
            insertTodoItemComponent(newItem);
        }

    })
}

export function addDeleteBtnEventListener(deleteButton) {
    deleteButton.addEventListener("click", function() {
        const mainContent = document.querySelector(".main-content");
        const component = this.parentNode;

        mainContent.removeChild(component);
    })
}

export function addDetailsBtnEventListener(detailsButton) {

    detailsButton.addEventListener("click", function () {
        const parent = this.parentNode;
        const detailsPage = detailsFormGenerator(JSON.parse(parent.getAttribute("data-info")));
        overlayToggle.enable();
        document.body.appendChild(detailsPage);

    })
}


export function insertTodoItemComponent(todoItem) {
    document.querySelector(".main-content").appendChild(itemComponentGenerator(todoItem));
}

function emptyFieldAlert(fieldName) {
    window.alert(`${fieldName} is required`);
}