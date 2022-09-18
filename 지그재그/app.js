let head = document.getElementById("head");
let rest = document.getElementById("rest");
let craft = document.getElementById("craft");
let scrap = document.getElementById("scrap");

window.addEventListener("scroll", function (e) {
  let value = window.scrollY;
  rest.style.left = value * 1 - 1563 + "px";
  rest.style.top = value * 1 + 250 + "px";
  craft.style.right = value * 1 - 1558 + "px";
  craft.style.top = value * 1 + 450 + "px";
  scrap.style.left = value * 1 - 1563 + "px";
  scrap.style.top = value * 1 + 650 + "px";
  head.style.opacity= value *.005 
  console.log(value);
});
