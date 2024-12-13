let innerCursor=document.querySelector(".innercursor");
let outerCursor=document.querySelector(".outercursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left=`${x}px`;
    innerCursor.style.top=`${y}px`;
    outerCursor.style.left=`${x}px`;
    outerCursor.style.top=`${y}px`;
}