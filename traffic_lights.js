let currentLight = 0;
const lights = [document.getElementById('red'), document.getElementById('yellow'), document.getElementById('green')];
let intervalId;

function changeLight() {
    lights.forEach(light => light.style.opacity = '0.3');
    lights[currentLight].style.opacity = '1';
    currentLight = (currentLight + 1) % lights.length;

    const nextChangeTime = Math.floor(Math.random() * 3000) + 6000; 
    intervalId = setTimeout(changeLight, nextChangeTime);
}

document.getElementById('start').addEventListener('click', () => {
    if (!intervalId) {
        changeLight();
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearTimeout(intervalId);
    intervalId = null;
    lights.forEach(light => light.style.opacity = '0.3');
});