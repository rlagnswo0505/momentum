const h1 = document.querySelector(".hello");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerHTML = "mouse is here!";
}
function handleMouseLeave() {
    h1.innerHTML = "mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier!!!");
}

//title.onclick = handleTitleClick 동일한 기능을 하지만 밑에 방법은 removeEventListener로 이벤트를 제거 할 수 있음
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
