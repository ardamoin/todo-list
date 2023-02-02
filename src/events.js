import { todoFormGenerator } from "./items";


export function addTodoBtnEventListener() {
    const addTodo = document.querySelector(".add-task");

    addTodo.addEventListener("click", () => {
        overlayToggle.enable();
        document.body.appendChild(todoFormGenerator());
    })

}


const overlayToggle = (function() {
    const overlay = document.querySelector(".overlay");

    const enable = () => {overlay.classList.add("enabled")};
    const disable = () => {overlay.classList.remove("enabled")};

    return {enable, disable};
})();

export function addCloseEventListener(btn) {
    btn.addEventListener("click", function() {
        const bodyNode = document.body;
        const formNode = this.parentNode.parentNode;

        bodyNode.removeChild(formNode);
        overlayToggle.disable();
    })
}
