export function pick(mouse) {
    if (mouse == undefined) {
        return
    }
    let x = mouse.offsetX;
    let y = mouse.offsetY;
    document.body.style.background = `hsl(${Math.round((x * 360) / window.innerWidth)}, 50%, ${Math.round((y * 100) / window.innerHeight)}%)`
    let allDiv = Array.from(document.getElementsByClassName("text"));
    allDiv.forEach((div) => {
        div.remove()
    });

    let hslDiv = document.createElement("div")
    hslDiv.classList.add("text")
    hslDiv.classList.add("hsl")
    hslDiv.textContent += `hsl(${Math.round((x * 360) / window.innerWidth)}, 50%, ${Math.round((y * 100) / window.innerHeight)}%)`
    hslDiv.style.backgroundPosition = "center center";
    document.body.appendChild(hslDiv)

    let hueDiv = document.createElement("div")
    hueDiv.classList.add("text")
    hueDiv.classList.add("hue")
    hueDiv.textContent += `${Math.round((x * 360) / window.innerWidth)}`
    hueDiv.style.backgroundPosition = "top right";
    document.body.appendChild(hueDiv)

    let luminosityDiv = document.createElement("div")
    luminosityDiv.classList.add("text")
    luminosityDiv.classList.add("luminosity")
    luminosityDiv.textContent += `${Math.round((y * 100) / window.innerHeight)}%`
    document.body.appendChild(luminosityDiv)
    document.getElementsByClassName("luminosity")[0].style.backgroundPosition = "bottom left";

    if (document.getElementById("axisX") != null) {
        document.getElementById("axisX").remove()
        document.getElementById("axisY").remove()
    }



    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    document.body.appendChild(svg)
    let newLineX = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    newLineX.setAttribute('id', 'axisX')
    newLineX.setAttribute('x1', `${x}`)
    newLineX.setAttribute('y1', 0)
    newLineX.setAttribute('x2', `${x}`)
    newLineX.setAttribute('y2', `${window.innerHeight}`)

    let newLineY = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    newLineY.setAttribute('id', 'axisY')
    newLineY.setAttribute('x1', 0)
    newLineY.setAttribute('y1', `${y}`)
    newLineY.setAttribute('x2', `${window.innerWidth}`)
    newLineY.setAttribute('y2', `${y}`)

    svg.appendChild(newLineX);
    svg.appendChild(newLineY);

}

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');


    document.body.removeChild(textArea);
}

document.addEventListener('mousedown', mouse => {

    let x = mouse.offsetX;
    let y = mouse.offsetY;
    fallbackCopyTextToClipboard(`hsl(${Math.round((x * 360) / window.innerWidth)}, 50%, ${Math.round((y * 100) / window.innerHeight)}%)`)

})
document.addEventListener('mousemove', pick);

