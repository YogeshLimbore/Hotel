
let contentBoxes = document.querySelectorAll(".ContentBox");

contentBoxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        // Remove 'onimage' class from all elements
        contentBoxes.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove("onimage");
                otherBox.classList.add("notonimage");
            }
        });

        // Toggle 'onimage' and 'notonimage' classes for the current element
        if (box.classList.contains("onimage")) {
            box.classList.remove("onimage");
            box.classList.add("notonimage");
        } else {
            box.classList.remove("notonimage");
            box.classList.add("onimage");
        }
    });
});