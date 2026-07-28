document.addEventListener("DOMContentLoaded", () => {

    if (typeof initNavbar === "function") initNavbar();

    if (typeof initTyping === "function") initTyping();

    if (typeof initReveal === "function") initReveal();

    if (typeof initCursor === "function") initCursor();

    if (typeof initActiveNav === "function") initActiveNav();

    if (typeof initScroll === "function") initScroll();

});