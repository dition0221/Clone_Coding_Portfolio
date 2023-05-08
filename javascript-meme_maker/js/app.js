const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");
const selectedColor = document.querySelector("#color");
const colorOptions = Array.from(document.querySelectorAll(".color-option"));
const drawBtn = document.querySelector("#draw-btn");
const fillBtn = document.querySelector("#fill-btn");
const destroyBtn = document.querySelector("#destroy-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const fileInput = document.querySelector("#file");
const fontSize = document.querySelector("#font-size");
const textInput = document.querySelector("#text");
const saveBtn = document.querySelector("#save");
const fontSerif = document.querySelector(".font:first-child");
const fontFantasy = document.querySelector(".font:nth-child(2)");
const fontCursive = document.querySelector(".font:last-child");
const textFill = document.querySelector(".font-style:first-child");
const textStroke = document.querySelector(".font-style:last-child");
const strokeDrawBtn = document.querySelector(".draw-style:first-child");
const fillDrawBtn = document.querySelector(".draw-style:last-child");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const COLOR_DEFAULT = "royalblue";
const COLOR_SELECTED = "darkorange";

ctx.lineCap = "round";
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;
let fontFamily = "serif";
let isTextFilling = true;
let isFillDrawStyle = false;
fontSerif.style.backgroundColor = COLOR_SELECTED;
textFill.style.backgroundColor = COLOR_SELECTED;
drawBtn.style.backgroundColor = COLOR_SELECTED;
strokeDrawBtn.style.backgroundColor = COLOR_SELECTED;

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
    if (isFillDrawStyle) {
        ctx.fill();
    }
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

drawBtn.addEventListener("click", () => {
    isFilling = false;
    drawBtn.style.backgroundColor = COLOR_SELECTED;
    fillBtn.style.backgroundColor = COLOR_DEFAULT;
    if (isFillDrawStyle) {
        fillDrawBtn.style.backgroundColor = COLOR_SELECTED;
    } else {
        strokeDrawBtn.style.backgroundColor = COLOR_SELECTED;
    }
});

fillBtn.addEventListener("click", () => {
    isFilling = true;
    fillBtn.style.backgroundColor = COLOR_SELECTED;
    drawBtn.style.backgroundColor = COLOR_DEFAULT;
    strokeDrawBtn.style.backgroundColor = COLOR_DEFAULT;
    fillDrawBtn.style.backgroundColor = COLOR_DEFAULT;
});

destroyBtn.addEventListener("click", () => {
    // const presentColor = ctx.fillStyle;
    // ctx.fillStyle = "white";
    // ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillStyle = presentColor;
    const destroy = confirm("그림을 전부 지우시겠습니까?");
    if (destroy) {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
});

eraserBtn.addEventListener("click", () => {
    ctx.strokeStyle = "white";
    ctx.fillStyle = "white";
    isFilling = false;
    drawBtn.click();
    strokeDrawBtn.click();
    selectedColor.value = "#ffffff";
});

fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.addEventListener("load", () => {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    });
});

canvas.addEventListener("dblclick", (event) => {
    const text = textInput.value;
    if (text !== "") {
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = `${fontSize.value}px ${fontFamily}`;
        if (isTextFilling) {
            ctx.fillText(text, event.offsetX, event.offsetY);
        } else {
            ctx.strokeText(text, event.offsetX, event.offsetY);
        }
        ctx.restore();
    }
});

saveBtn.addEventListener("click", () => {
    const saveImage = confirm("그림을 저장하시겠습니까?");
    if (saveImage) {
        const url = canvas.toDataURL();
        const a = document.createElement("a");
        a.href = url;
        a.download = "myDrawing.png";
        a.click();
    }
});

fontSerif.addEventListener("click", () => {
    fontFamily = "serif";
    fontSerif.style.backgroundColor = COLOR_SELECTED;
    fontFantasy.style.backgroundColor = COLOR_DEFAULT;
    fontCursive.style.backgroundColor = COLOR_DEFAULT;
});

fontFantasy.addEventListener("click", () => {
    fontFamily = "fantasy";
    fontFantasy.style.backgroundColor = COLOR_SELECTED;
    fontSerif.style.backgroundColor = COLOR_DEFAULT;
    fontCursive.style.backgroundColor = COLOR_DEFAULT;
});

fontCursive.addEventListener("click", () => {
    fontFamily = "cursive";
    fontCursive.style.backgroundColor = COLOR_SELECTED;
    fontSerif.style.backgroundColor = COLOR_DEFAULT;
    fontFantasy.style.backgroundColor = COLOR_DEFAULT;
});

textFill.addEventListener("click", () => {
    isTextFilling = true;
    textFill.style.backgroundColor = COLOR_SELECTED;
    textStroke.style.backgroundColor = COLOR_DEFAULT;
});

textStroke.addEventListener("click", () => {
    isTextFilling = false;
    textStroke.style.backgroundColor = COLOR_SELECTED;
    textFill.style.backgroundColor = COLOR_DEFAULT;
});

strokeDrawBtn.addEventListener("click", () => {
    if (isFilling) {
        return;
    }
    isFillDrawStyle = false;
    strokeDrawBtn.style.backgroundColor = COLOR_SELECTED;
    fillDrawBtn.style.backgroundColor = COLOR_DEFAULT;
});

fillDrawBtn.addEventListener("click", () => {
    if (isFilling) {
        return;
    }
    isFillDrawStyle = true;
    fillDrawBtn.style.backgroundColor = COLOR_SELECTED;
    strokeDrawBtn.style.backgroundColor = COLOR_DEFAULT;
});