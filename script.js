let scale = 1;
let nonClickCount = 0;

const nonButton = document.getElementById('nonButton');
const convincingMessages = [
    "Tu est sure bebou?",
    "S'il te plaît, dit oui!",
    "Allez tu sais que tu le veux!",
    "Dis pas non!",
    "Donne-moi une chance!"
];

if (nonButton) {
    nonButton.addEventListener('click', function() {
        const yesButton = document.getElementById('yesbutton');
        const mainText = document.querySelector('.main_text');
        const randomWidthIncrease = Math.floor(Math.random() * 300) + 100;
        const randomHeightIncrease = Math.floor(Math.random() * 300) + 50;

        if (Math.random() > 0.5) {
            yesButton.style.width = `${yesButton.offsetWidth + randomWidthIncrease}px`;
        } else {
            yesButton.style.height = `${yesButton.offsetHeight + randomHeightIncrease}px`;
        }
        yesButton.style.fontSize = `${parseInt(window.getComputedStyle(yesButton).fontSize) + 10}px`;
        yesButton.style.transition = 'width 1s, height 1s, font-size 1s';

        nonClickCount++;
        if (nonClickCount > 3) {
            yesButton.style.width = '100vw';
            yesButton.style.height = '100vh';
            yesButton.style.fontSize = '5em';
            yesButton.style.transition = 'width 1s, height 1s, font-size 1s';
            mainText.style.zIndex = '-1';
        }

        if (nonClickCount >= 4) {
            mainText.style.zIndex = '-1';
        }

        // Change the main text to a more convincing message
        if (nonClickCount < convincingMessages.length) {
            mainText.textContent = convincingMessages[nonClickCount];
        } else {
            mainText.textContent = convincingMessages[convincingMessages.length - 1];
        }
    });
}

const yesButton = document.getElementById('yesbutton');
if (yesButton) {
    yesButton.addEventListener('click', function() {
        document.body.innerHTML = '';

        const message = document.createElement('h1');
        message.className = 'love_message typing';
        message.innerText = 'Félicitation tu est mariée a moi! ❤️';
        message.style.textAlign = 'right';
        message.style.marginRight = '100px'; // Move text more to the left
        document.body.appendChild(message);

        setTimeout(() => {
            const image = document.createElement('img');
            image.src = 'img_mariage.png';
            image.alt = 'Mariage';
            image.style.display = 'block';
            image.style.margin = '20px 0';
            image.style.animation = 'fadeIn 2s ease-in-out';
            image.style.position = 'absolute';
            image.style.left = '0';
            image.style.top = '50%';
            image.style.transform = 'translateY(-50%)';
            image.style.width = '300px';
            document.body.appendChild(image);
        }, 4000);
    });
}
