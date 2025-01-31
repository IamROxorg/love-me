let scale = 1;
let nonClickCount = 0;

document.getElementById('nonButton').addEventListener('click', function() {
    const yesButton = document.getElementById('yesbutton');
    const mainText = document.querySelector('.main_text');
    const randomWidthIncrease = Math.floor(Math.random() * 300) + 100;
    const randomHeightIncrease = Math.floor(Math.random() * 150) + 50; // Random increase between 50 and 200

    if (Math.random() > 0.5) {
        yesButton.style.width = `${yesButton.offsetWidth + randomWidthIncrease}px`;
    } else {
        yesButton.style.height = `${yesButton.offsetHeight + randomHeightIncrease}px`;
    }
    yesButton.style.fontSize = `${parseInt(window.getComputedStyle(yesButton).fontSize) + 10}px`; // Increase font size
    yesButton.style.transition = 'width 1s, height 1s, font-size 1s'; // Smooth transition

    nonClickCount++;
    if (nonClickCount > 7) {
        yesButton.style.width = '100vw'; // Make the "yes" button cover the entire viewport width
        yesButton.style.height = '100vh'; // Make the "yes" button cover the entire viewport height
        yesButton.style.fontSize = '5em'; // Increase font size significantly
        yesButton.style.transition = 'width 1s, height 1s, font-size 1s'; // Smooth transition
        mainText.style.zIndex = '-1'; // Hide the text behind the "yes" button
    }
});

document.getElementById('yesbutton').addEventListener('click', function() {
    const button = this;
    scale += 0.9;

    button.style.transform = `scale(${scale})`;
    button.style.transition = 'transform 0.5s';

    setTimeout(() => {
        document.body.innerHTML = '';

        const message = document.createElement('h1');
        message.className = 'love_message typing';
        message.innerText = 'Félicitation tu est mariée a moi! ❤️';
        document.body.appendChild(message);

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
        document.body.appendChild(image);
    }, 500); 
});