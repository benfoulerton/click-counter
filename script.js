let count = 0;

function increment() {
    count += 1;
    document.getElementById(`count`).innerText = `You have clicked ${count} times`;
}

function reset() {
    count = 0;
    document.getElementById(`count`).innerText = `You have clicked 0 times`;
}