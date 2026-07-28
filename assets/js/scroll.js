function initScroll() {

    const scrollTopButton = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopButton?.classList.add("show");

        } else {

            scrollTopButton?.classList.remove("show");

        }

    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth",
                    block:"start"

                });

            }

        });

    });

}