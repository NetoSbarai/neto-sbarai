function initAbout() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const aboutSection = document.querySelector(".about");

    if (!aboutSection) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            counters.forEach(counter => {

                const target = parseInt(counter.dataset.target);

                let current = 0;

                const duration = 1800;

                const increment = target / (duration / 16);

                const timer = setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        if (target === 100) {

                            counter.textContent = "100%";

                        } else {

                            counter.textContent = target;

                        }

                        counter.classList.add("finished");

                        clearInterval(timer);

                    } else {

                        if (target === 100) {

                            counter.textContent = Math.floor(current) + "%";

                        } else {

                            counter.textContent = Math.floor(current);

                        }

                    }

                }, 16);

            });

            observer.disconnect();

        });

    }, {

        threshold: 0.35

    });

    observer.observe(aboutSection);

}