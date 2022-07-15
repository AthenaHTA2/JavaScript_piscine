var current_page = 1;
var records_per_page = 10;

let objJson = {};
// This function is called only after the data has been fetched, and parsed.
const loadData = (heroes) => {
  // console.log(heroes)
  objJson = heroes;
};

// Request the file with fetch, the data will downloaded to your browser cache.
fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
  .then((response) => response.json()) // parse the response from JSON
  .then(loadData); // .then will call the `loadData` function with the JSON value.

// var objJson = [
//   { adName: "AdName 1" },
//   { adName: "AdName 2" },
//   { adName: "AdName 3" },
//   { adName: "AdName 4" },
//   { adName: "AdName 5" },
//   { adName: "AdName 6" },
//   { adName: "AdName 7" },
//   { adName: "AdName 8" },
//   { adName: "AdName 9" },
//   { adName: "AdName 10" },
// ]; // Can be obtained from another source, such as your objJson variable

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("heroesDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".btnNrHeroes")) {
    var dropdowns = document.getElementsByClassName("dropdown-number");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
  }
}

function changePage(page) {
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  var listing_table = document.getElementById("listingTable");
  var page_span = document.getElementById("page");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listing_table.innerHTML = "";

  for (
    var i = (page - 1) * records_per_page;
    i < page * records_per_page && i < objJson.length;
    i++
  ) {
    listing_table.innerHTML += objJson[i].adName + "<br>";
  }
  page_span.innerHTML = page + "/" + numPages();

  if (page == 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btn_next.style.visibility = "hidden";
  } else {
    btn_next.style.visibility = "visible";
  }
}

function numPages() {
  return Math.ceil(objJson.length / records_per_page);
}

window.onload = function () {
  changePage(1);
};
