out = document.getElementById("output");

document.addEventListener('click', (event) => {
    out.innerHTML = "Позиция: " + event.clientX + " " + event.clientY;
});