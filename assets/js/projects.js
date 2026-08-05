function initProjects() {

    const cards = document.querySelectorAll(".project-card");

    if (!cards.length) return;

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = ((x - centerX) / centerX) * 3;
            const rotateX = ((centerY - y) / centerY) * 3;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);

            card.style.setProperty("--rotate-x", `${rotateX}deg`);
            card.style.setProperty("--rotate-y", `${rotateY}deg`);

        });

        card.addEventListener("mouseleave", () => {

            card.style.setProperty("--rotate-x", "0deg");
            card.style.setProperty("--rotate-y", "0deg");

        });

    });

}