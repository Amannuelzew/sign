const list = document.getElementById("list");
const notAllowed = [
  "nooverturn",
  "noparkbothside",
  "closed1",
  "two_way_pull",
  "no_truks",
  "no_hazard_car",
  "no_park_end",
];
const map = new Map([
  ["nooverturn", 1],
  ["noparkbothside", 2],
  ["closed1", 3],
  ["two_way_pull", 4],
  ["no_truks", 5],
  ["no_hazard_car", 6],
  ["no_park_end", 7],
]);

document.addEventListener("DOMContentLoaded", (event) => {
  for (image of notAllowed) {
    const img = document.createElement("img");
    img.setAttribute("src", `assets/not_allowed/${image}.png`);
    img.setAttribute("id", `${image}`);
    img.setAttribute("alt", `${image}`);
    img.setAttribute("width", "60px");
    img.setAttribute("height", "60px");
    img.addEventListener("click", (event) => {
      console.log(img.getAttribute("id"));
      console.log(map.get(img.getAttribute("id")));
    });
    list.appendChild(img);
  }
});
document.querySelectorAll("img").forEach((img, index) => {
  img.addEventListener("click", (event) => {
    const img = document.createElement("img");
    img.setAttribute("src", "assets/not_allowed/nooverturn.png");
    list.appendChild(img);
  });
});
