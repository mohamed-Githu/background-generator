const [color1 , color2] = document.querySelectorAll(".color");
const css = document.querySelector("h3");
const body = document.getElementById("gradient");
const button = document.querySelector("#random");

const randomnum = () => Math.round(Math.random() * 255);

(buttonColor = () => {
    let ranColor1 = `rgb( ${randomnum()}, ${randomnum()}, ${randomnum()})`;
    let ranColor2 = `rgb( ${randomnum()}, ${randomnum()}, ${randomnum()})`;
    body.style.background = `linear-gradient(to right, ${ranColor1}, ${ranColor2})`;
    css.textContent = body.style.background;
    button.style.background = body.style.background;
})();

setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    css.textContent = body.style.background;
    button.style.background = body.style.background;
}

color1.addEventListener("input" , setGradient);

color2.addEventListener("input" , setGradient);

button.addEventListener("click", buttonColor);