const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const selectedColor = document.querySelector("#color");
const colorOptions = Array.from(document.querySelectorAll(".color-option"));
const modeBtn = document.querySelector("#mode-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraserBtn = document.querySelector("#eraser-btn");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

function changeColor(color) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

canvas.addEventListener("mousemove", (event) => {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener("mousedown", () => {
    if (isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    } else {
        isPainting = true;
    }
});

canvas.addEventListener("mouseup", () => {
    isPainting = false;
});

canvas.addEventListener("mouseleave", () => {
    isPainting = false;
});

lineWidth.addEventListener("change", (event) => {
    ctx.lineWidth = event.target.value;
});

selectedColor.addEventListener("change", (event) => {
    changeColor(event.target.value);
});

colorOptions.forEach((color) => {
    color.addEventListener("click", (event) => {
        const colorValue = event.target.dataset.color ;
        changeColor(colorValue);
        selectedColor.value = colorValue;
    })
});

modeBtn.addEventListener("click", () => {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
});

destroyBtn.addEventListener("click", () => {
    // const presentColor = ctx.fillStyle;
    // ctx.fillStyle = "white";
    // ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillStyle = presentColor;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
});

eraserBtn.addEventListener("click", () => {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
});