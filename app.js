import {
  notAllowed,
  mandatory,
  warning,
  priority,
  body,
  information,
  plate,
} from "./Constants.js";

const list = document.getElementById("list");

const map = new Map([
  ["nooverturn", 1],
  ["noparkbothside", 2],
  ["closed1", 3],
  ["two_way_pull", 4],
  ["no_truks", 5],
  ["no_hazard_car", 6],
  ["no_park_end", 7],
  ["give_way", 11],
  ["stop1", 12],
  ["priority_on_incom_traffic", 13],
  ["stop", 14],
  ["priority_road_end", 15],
  ["priority_road", 16],
  ["tyre", 17],
  ["spring", 18],
  ["fuse", 19],
]);

document.addEventListener("DOMContentLoaded", (event) => {
  for (let image of notAllowed) {
    const img = document.createElement("img");
    img.setAttribute("src", `assets/not_allowed/${image}.png`);
    img.setAttribute("id", `${image}`);
    img.setAttribute("alt", `${image}`);
    img.setAttribute("width", "60px");
    img.setAttribute("height", "60px");
    const p = document.createElement("p");

    const modalBody = document.getElementsByClassName("modal-body");
    const modalFooter = document.getElementsByClassName("modal-footer");

    img.addEventListener("click", (event) => {
      modal.style.display = "block";
      modalBody[0].innerHTML = `<img width="100px" height="100px" 
      src="assets/not_allowed/${img.getAttribute("id")}.png">`;
      modalFooter[0].innerHTML = `<p>${map.get(img.getAttribute("id"))}</p>`;
      console.log(img.getAttribute("id"));
      console.log(map.get(img.getAttribute("id")));
    });
    list.appendChild(img);
  }
});
let val;

document.querySelectorAll("img").forEach((imgs, index) => {
  imgs.addEventListener("click", (event) => {
    if (imgs.getAttribute("alt") == "not_allowed") val = notAllowed;
    else if (imgs.getAttribute("alt") == "mandatory") val = mandatory;
    else if (imgs.getAttribute("alt") == "warning") val = warning;
    else if (imgs.getAttribute("alt") == "priority") val = priority;
    else if (imgs.getAttribute("alt") == "body") val = body;
    else if (imgs.getAttribute("alt") == "information") val = information;
    else if (imgs.getAttribute("alt") == "plate") val = plate;
    else val = priority;
    list.innerHTML = "";
    for (let image of val) {
      const img = document.createElement("img");
      img.setAttribute(
        "src",
        `assets/${imgs.getAttribute("alt")}/${image}.png`
      );
      img.setAttribute("id", `${image}`);
      img.setAttribute("alt", `${image}`);
      img.setAttribute("width", "60px");
      img.setAttribute("height", "60px");

      const modalBody = document.getElementsByClassName("modal-body");
      const modalFooter = document.getElementsByClassName("modal-footer");

      img.addEventListener("click", (event) => {
        modal.style.display = "block";
        modalBody[0].innerHTML = `<img width="100px" height="100px"
         src="assets/${imgs.getAttribute("alt")}/${img.getAttribute(
          "id"
        )}.png">`;
        modalFooter[0].innerHTML = `<p>${map.get(img.getAttribute("id"))}</p>`;
        console.log(img.getAttribute("id"));
        console.log(map.get(img.getAttribute("id")));
      });
      list.appendChild(img);
    }
  });
});
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
