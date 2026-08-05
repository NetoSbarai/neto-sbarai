function initScroll() {

    const scrollTopButton = document.getElementById("scrollTop");

    /* ==========================================
                BOTÃO VOLTAR AO TOPO
    ========================================== */

    if (scrollTopButton) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                scrollTopButton.classList.add("show");

            } else {

                scrollTopButton.classList.remove("show");

            }

        });

        scrollTopButton.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================================
                LINKS INTERNOS
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            const targetId = this.getAttribute("href");

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });

}