$(document).ready(function () {
    const cursorDot = $('#cursor-do');
    const cursorOutline = $('#cursor-outlin');

    window.addEventListener("mousemove", function (e) {
        const posX = e.pageX;
        const posY = e.pageY;

        // Update cursorDot's position using .css()
        cursorDot.css({
            left: `${posX}px`,
            top: `${posY}px`
        });

        // Animate cursorOutline's position
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, {
            duration: 25,
            fill: "forwards"
        });
    });
});
