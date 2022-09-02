/*
Tired of staying home for too long, you decide to develop a page to index ideas for your next travel destinations, so that next time you'll ask yourself 'Where do we go?', you won't need to get lost for 3 hours!
Write the function explore which creates a page displaying the list of places provided in the data file below:

sort the places from the Northest to the Southest
display a fullscreen-size <section> for each place ; use the pics hosted in the ./where-do-we-go_images folder (find the download link below) to set the background attribute with the corresponding image URL. The URL has to be formatted like so: ./where-do-we-go_images/name-of-the-place.jpg
display a location indicator as a <a> tag in the middle of the screen which:
has the class location
displays as text strings separated by \n, the name and the coordinates of the current place featured in the image
using the corresponding color as text color
updates the name, coordinates and color on scroll, when the top of the next image reaches the middle of the screen height
has the href attribute set to open a new tab redirecting to a Google Maps' URL with the coordinates of the place currently displayed
display a compass as a div tag indicating the latitude direction which:
has the class direction
displays N for North if the user is scrolling up
displays S for South if he's scrolling down
Notions
Scroll event
window: innerHeight, scrollY, pageYOffset
Take a look at the DMS coordinates system
*/

import { places } from "./where-do-we-go.data.js"

export function explore() {
    const arrPlaces = sort([...places])
    let lastNbr = 0
    for (let i = 0; i < arrPlaces.length; i++) {
        if (!arrPlaces[i].coordinates.match(/[N]/)) {
            lastNbr = i - 1
            break
        }
    }
    let position = Math.round(scrollY / window.innerHeight)
    let item = arrPlaces[position]
    let coord = document.createElement('a')
    coord.className = 'location'
    coord.textContent = item.name + "\n" + item.coordinates
    coord.style.color = item.color
    coord.setAttribute("target", `_blank`)
    document.body.appendChild(coord)
    let direction = document.createElement('a')
    direction.className = "direction"
    if (position >= lastNbr) {
        direction.textContent = "S"

    } else {
        direction.textContent = "N"
    }
    document.body.appendChild(direction)

    arrPlaces.forEach((item) => {
        let section = document.createElement("section");
        section.style.background = `url(./where-do-we-go_images/${item.name.split(",")[0].replace(/ /g, "-").toLowerCase()}.jpg)`
        section.style.backgroundRepeat = "no-repeat";
        section.style.backgroundSize = "cover";
        section.className = "section";
        document.body.append(section);
    });
    let prev = scrollY;
    document.addEventListener("scroll", (event) => {

        let coord = document.querySelector('.location')
        let position = Math.round(scrollY / window.innerHeight)
        let item = arrPlaces[position]
        coord.textContent = item.name + "\n" + item.coordinates
        coord.style.color = item.color
        coord.setAttribute("href", `https://google.com/maps/place/${item.coordinates}`)
        let location = document.querySelector('.direction')
        if (prev > scrollY) {
            location.textContent = "N";
        } else if (prev < scrollY) {
            location.textContent = "S";
        }
        prev = scrollY;

    })
}

function sortByPosition() {
    let positionList = ["N", "S"]
    let result = []
    for (let i = 0; i < positionList.length; i++) {
        places.map(item => {
            if (item.coordinates.match(positionList[i])) {
                result.push(item)
            }
        })
        if (i == 1) {
            lastNbr = positionList.length
        }
    }
    return result
}

function getNorth(arg) {
    let coords = arg.coordinates.split(" ")[0].replace(/[Â°'."]/g, "");
    return coords.includes("N")
        ? (coords = Number(coords.slice(0, 5)))
        : Number(coords.slice(0, 5)) * -1;
}

function sort(arr) {
    let array = [...arr];
    array.sort((a, b) => {
        if (getNorth(a) > getNorth(b)) return -1;
        if (getNorth(a) < getNorth(b)) return 1;
        else return 0;
    });
    return array;
}
