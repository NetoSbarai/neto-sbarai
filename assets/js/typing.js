function initTyping() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    const words = [
        "Desenvolvedor de Software",
        "Desenvolvedor Web",
        "Criando experiências digitais",
        "Sempre aprendendo novas tecnologias"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(type, 1800);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        const speed = deleting ? 45 : 90;

        setTimeout(type, speed);

    }

    type();

}