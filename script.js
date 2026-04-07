const items = document.querySelectorAll(".idea");

items.forEach(item => {
    item.addEventListener("click", () => {
        const desc = item.getAttribute("data-desc");

        // Remove any existing description
        const oldBox = document.querySelector(".desc-box");
        if (oldBox) oldBox.remove();

        // Create new description box
        const box = document.createElement("div");
        box.className = "desc-box";
        box.textContent = desc;

        // Insert it right AFTER the clicked item
        item.insertAdjacentElement("afterend", box);
    });
});