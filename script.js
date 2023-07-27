const body = document.querySelector("body");
const view = document.querySelector(".view");
const y = body.scrollHeight;
const y1 = window.innerHeight;
console.log(y);
console.log(y1);
var d = y - y1;
if (y<=y1) {
  view.innerHTML = "100% viewed";
}
document.addEventListener("scroll", function () {
  const view = document.querySelector(".view");
  const body = document.querySelector("body");
  const headerCod = body.getBoundingClientRect().top;
  console.log(headerCod);
  const x = Math.floor((-headerCod / d) * 100);
  if (x >= 100) {
    view.innerHTML = "100% viewed";
  } else {
    view.innerHTML = x + "% viewed";
  }
});
