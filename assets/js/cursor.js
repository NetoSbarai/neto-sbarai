function initCursor() {

    const cursor = document.querySelector(".cursor-glow");

    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

    });

    function animate() {

        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;

        cursor.style.left = currentX + "px";
        cursor.style.top = currentY + "px";

        requestAnimationFrame(animate);

    }

    animate();

}