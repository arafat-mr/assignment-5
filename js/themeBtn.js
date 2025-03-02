const theme = document.getElementById("theme-btn");
const body = document.getElementById("body");
body.style.backgroundColor = "#F4F7FF";
//

let red = "";
let green = "";
let blue = "";

let rgb = "";

function changeBg() {
//   const random = Math.floor(Math.random() * 256);
  red = Math.floor(Math.random()*256)
  green = Math.floor(Math.random()*100);
  blue = Math.floor(Math.random()*100);
  rgb = "rgb(" + red + "," + green + "," + blue + ")";
  return rgb;
}


// theme.addEventListener("click", function () {
//   body.style.backgroundColor = changeBg();
//   console.log(changeBg());
  
// });
theme.addEventListener("click", function () {
  body.style.backgroundColor = changeBg();
});
