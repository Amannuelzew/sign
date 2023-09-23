import {
  notAllowed,
  mandatory,
  warning,
  priority,
  body,
  information,
  plate,
  map,
} from "./Constants.js";

// const list = document.getElementById("list");
// document.addEventListener("DOMContentLoaded", (event) => {
//   for (let image of notAllowed) {
//     const img = document.getElementById(image);
//     const modalBody = document.getElementsByClassName("modal-body");
//     const modalFooter = document.getElementsByClassName("modal-footer");

//     img.addEventListener("click", (event) => {
//       modal.style.display = "block";
//       modalBody[0].innerHTML = `<img width="100px" height="100px"
//       src="assets/not_allowed/${img.getAttribute("id")}.png">`;
//       const s = map.get(img.getAttribute("id")).split("።");
//       modalFooter[0].innerHTML = `<p>${s[0]}</p> <p>${s[1]}</p>`;
//     });
//   }
// });
document.addEventListener("DOMContentLoaded", (event) => {
  for (let image of notAllowed) {
    const img = document.createElement("img");
    img.setAttribute("src", `assets/not_allowed/${image}.png`);
    img.setAttribute("id", `${image}`);
    img.setAttribute("alt", `${image}`);
    img.setAttribute("width", "60px");
    img.setAttribute("height", "60px");

    const modalHeader = document.getElementsByClassName("modal-title");
    const modalBody = document.getElementsByClassName("modal-body");
    const modalFooter = document.getElementsByClassName("modal-footer");
    img.addEventListener("click", (event) => {
      modal.style.display = "block";
      modalHeader[0].innerHTML = "የተከለከሉ";
      modalBody[0].innerHTML = `<img width="100px" height="100px"
  src="assets/not_allowed/${img.getAttribute("id")}.png">`;
      const s = map.get(img.getAttribute("id")).split("።");
      modalFooter[0].innerHTML = `<p>${s[0]}</p> <p>${s[1]}</p>`;
    });
    list.appendChild(img);
  }
});
let val;
let title;

document.querySelectorAll("img").forEach((imgs, index) => {
  imgs.addEventListener("click", (event) => {
    if (imgs.getAttribute("alt") == "not_allowed") {
      val = notAllowed;
      title = "የተከለከሉ";
    } else if (imgs.getAttribute("alt") == "mandatory") {
      val = mandatory;
      title = "አስገዳጅ";
    } else if (imgs.getAttribute("alt") == "warning") {
      val = warning;
      title = "የሚያስጠነቅቁ";
    } else if (imgs.getAttribute("alt") == "priority") {
      val = priority;
      title = "ቅድሚያ";
    } else if (imgs.getAttribute("alt") == "body") {
      val = body;
      title = "የመኪና አካል";
    } else if (imgs.getAttribute("alt") == "information") {
      val = information;
      title = "መረጃ ሰጪ";
    } else if (imgs.getAttribute("alt") == "plate") {
      val = plate;
      title = "ሰሌዳ";
    } else val = priority;
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
      const modalHeader = document.getElementsByClassName("modal-title");
      const modalBody = document.getElementsByClassName("modal-body");
      const modalFooter = document.getElementsByClassName("modal-footer");

      img.addEventListener("click", (event) => {
        modal.style.display = "block";
        modalHeader[0].innerHTML = title;
        modalBody[0].innerHTML = `<img width="100px" height="100px"
         src="assets/${imgs.getAttribute("alt")}/${img.getAttribute(
          "id"
        )}.png">`;
        const s = map.get(img.getAttribute("id")).split("።");
        modalFooter[0].innerHTML = `<p>${s[0]}</p> <p>${s[1]}</p>`;
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
