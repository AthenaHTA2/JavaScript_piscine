/*Today, you're going to create your own color picker.

Write the function pick which turns the screen into a hsl color picker. It will vary the hue and luminosity according to the position of the mouse.

The background color of the body will change based on the position of the mouse on the screen.

The X axis will vary the hue value between 0 and 360.
The Y axis will vary the luminosity value between 0 and 100.
You'll need to display these three values:

The full hsl value in a div, which has the class hsl in the middle of the screen.
The hue value in a div with the class hue and text in the top right corner of the screen.
The luminosity value will be displayed in the bottom left corner of the screen, in a div with the class luminosity and text.
When the mouse is clicked, the value of the hsl will need to be copied to the clipboard.

Two SVG lines with ids axisX and axisY will need to follow the cursor, like really long cross hairs.

the axisX attributes x1 and x2 need to be set to the X position of the cursor.
the axisY attributes y1 and y2 need to be set to the Y position of the cursor.
The formatting of a hsl value: hsl(45, 50%, 35%).

Use Math.round() to round the values.
*/

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

