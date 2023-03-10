const element = document.querySelector(".type-machine");
const text = "Iury Morais Tenório";
const interval = 200;

function showText(element, text, interval) {

    const char = text.split("").reverse();

    const typer = setInterval(() => {

if(!char.length) {
    return clearInterval(typer);
}

const next = char.pop();

element.innerHTML += next;

    }, interval)

}

showText(element, text, interval);