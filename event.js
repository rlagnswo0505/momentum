const title = document.querySelector(".hello");

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerHTML = "mouse is here!";
}
function handleMouseLeave() {
    title.innerHTML = "mouse is gone!";
}
//title.onclick = handleTitleClick 동일한 기능을 하지만 밑에 방법은 removeEventListener로 이벤트를 제거 할 수 있음
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
