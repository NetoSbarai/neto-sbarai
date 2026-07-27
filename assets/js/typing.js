const typingElement = document.getElementById("typing-text");

if (typingElement) {

    const words = [
        "Front-end Developer",
        "Software Engineering Student",
        "Web Designer",
        "Criador de Sites",
        "Apaixonado por Tecnologia"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent = currentWord.substring(0, letterIndex);

            letterIndex++;

            if (letterIndex > currentWord.length) {

                deleting = true;

                setTimeout(type, 1800);

                return;

            }

        } else {

            typingElement.textContent = currentWord.substring(0, letterIndex);

            letterIndex--;

            if (letterIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length)
                    wordIndex = 0;

            }

        }

        setTimeout(type, deleting ? 45 : 90);

    }

    type();

}