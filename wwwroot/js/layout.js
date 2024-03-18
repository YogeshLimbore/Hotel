let Navbar = document.querySelectorAll("#Navbar");

Navbar.forEach(box => {
    box.addEventListener("click", () => {
        // Remove 'onimage' class from all elements
        Navbar.forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.classList.remove("onClick");
                otherBox.classList.add("nClick");
            }
        });

        // Toggle 'onimage' and 'notonimage' classes for the current element
        if (box.classList.contains("onClick")) {
            box.classList.remove("onClick");
            box.classList.add("nClick");
        } else {
            box.classList.remove("nClick");
            box.classList.add("onClick");
        }
    });
});