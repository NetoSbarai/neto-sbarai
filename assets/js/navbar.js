function initNavbar() {

    const header = document.querySelector(".header");
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 40
        );

    });

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("open");

            menuToggle.classList.toggle("active");

        });

        document.querySelectorAll(".navbar a").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("open");

                menuToggle.classList.remove("active");

            });

        });

    }

}