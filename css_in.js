const h1 = document.querySelector("div.hello");

function handleTitleClick() {
    h1.className = "active";
}

h1.addEventListener("click", handleTitleClick);
