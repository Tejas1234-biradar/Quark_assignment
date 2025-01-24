
        const cursorDot=document.getElementById("cursor-do")
        const cursorOutline=document.getElementById("cursor-outlin")
        window.addEventListener("mousemove",function(e){
            const posX=e.pageX;
            const posY=e.pageY;
            cursorDot.style.left=`${posX}px`;
            cursorDot.style.top=`${posY}px`;


            // cursorOutline.style.left=`${posX}px`;
            // cursorOutline.style.top=`${posY}px`;
           cursorOutline.animate({
            left:`${posX}px`,
            top:`${posY}px`
           },{duration:500,fill:"forwards"})

        }) 