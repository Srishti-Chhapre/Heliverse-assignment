const glow = document.getElementById('glow');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FF8C33'];
let colorIndex = 0;
let timeoutId;

function changeColor() {
    glow.style.backgroundColor = colors[colorIndex];
    glow.style.boxShadow = `0 0 15px 5px ${colors[colorIndex]}`;
    colorIndex = (colorIndex + 1) % colors.length;
}

function showGlow() {
    glow.style.opacity = 1;
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        glow.style.opacity = 0;
    }, 500); // Adjust the delay as needed
}

document.addEventListener('mousemove', function(e) {
    gsap.to(glow, {
        duration: 0.3,
        x: e.pageX,
        y: e.pageY,
        ease: "power2.out"
    });
    showGlow();
});

setInterval(changeColor, 1000);




