let count = 0;


function increment(event) {
    count += 1;
    document.getElementById(`count`).innerText = `You have clicked ${count} times`;
    let popup = document.createElement('div');
    popup.textContent = `+1`;
    popup.classList.add('popup-animation');
    popup.style.color = 'white';
    popup.style.fontSize = '24px';
    popup.style.fontWeight = 'bold';
    popup.style.textShadow = '2px 2px 4px black';
    popup.style.position = 'absolute';
    popup.style.left = `${event.clientX}px`;
    popup.style.top = `${event.clientY}px`;
    document.body.appendChild(popup);


    setTimeout(() => {
        document.body.removeChild(popup);
    }, 2000);
    }

function reset() {
    count = 0;
    document.getElementById(`count`).innerText = `You have clicked 0 times`;
}

