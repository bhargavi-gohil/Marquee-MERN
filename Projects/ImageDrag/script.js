const draggableItems = [...document.querySelectorAll(".draggable")];
const containers = [...document.querySelectorAll(".containers")];

draggableItems.forEach((item) => {

    item.addEventListener("dragstart", () => {
        item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    });

});

containers.forEach((container) => {

    container.addEventListener("dragover", (e) => {
        e.preventDefault();

        const dragging = document.querySelector(".dragging");

        if (dragging) {
            container.appendChild(dragging);
        }
    });

});