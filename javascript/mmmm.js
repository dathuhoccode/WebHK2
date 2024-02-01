document.addEventListener("DOMContentLoaded", function () {
    const cat = document.getElementById("cat");

    document.addEventListener("mousemove", function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cat.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
});