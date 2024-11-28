const changingText = document.getElementById("changing-text"),
  welcText = [
    "Hello",
    "Hello",
    "Hell",
    "Hel",
    "He",
    "H",
    "Hi",
    "Hi",
    "H",
    "",
    "W",
    "We",
    "Wel",
    "Welc",
    "Welco",
    "Welcom",
    "Welcome",
    "Welcome",
    "Welcom",
    "Welco",
    "Welc",
    "Wel",
    "We",
    "W",
    "",
    "H",
    "He",
    "Hey",
    "Hey",
    "He",
    "Hel",
    "Hell",
  ],
  logo = document.getElementById("logo"),
  logoText = document.getElementById("logo-text");
let index = 0,
  index2 = 0;
let i = 0;
setInterval(change, 400);
setInterval(blinkCursur, 400);
logo.addEventListener("mouseover", logoTextAppear);
logo.addEventListener("mouseout", logoTextDisappear);
function change() {
  if (index == 31) {
    index = 0;
  }
  changingText.innerHTML = welcText[index];
  index++;
}
function blinkCursur() {
  if (index2 == 0) {
    changingText.style.borderRight = "solid 3px white";
    index2 = 1;
  } else {
    changingText.style.borderRight = "solid 3px rgb(255, 255, 255, 0)";
    index2 = 0;
  }
}
function logoTextAppear() {
  logoText.style.animation = "testSlideAppear 3s";
}
function logoTextDisappear() {
  logoText.style.visibility = "hidden";
}
