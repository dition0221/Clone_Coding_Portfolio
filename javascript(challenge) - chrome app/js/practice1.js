const h1 = document.querySelector(".hello span");

h1.addEventListener("click", () => {
    console.log("title was clicked!");
    if (h1.style.color !== "blue") {
        h1.style.color = "blue";
    } else {
        h1.style.color = "red";
    }
    h1.style.backgroundColor = "yellow";
});

h1.addEventListener("mouseenter", () => {
    h1.innerText = "Mouse is here !";
});

h1.addEventListener("mouseleave", () => {
    h1.innerText = "Mouse is gone !";
});

window.addEventListener("resize", () => {
    document.body.style.backgroundColor = "tomato";
});

window.addEventListener("copy", () => {
    document.body.style.backgroundColor = "YellowGreen";
});

window.addEventListener("offline", () => {
    alert("No Wi-Fi");
});

window.addEventListener("online", () => {
    alert("Yes Wi-Fi");
});