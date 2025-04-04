const possessedScale = document.querySelector("#annoying-range");
let markerDescription = document.querySelector("#marker-description");

possessedScale.addEventListener("input", scaleInput);

function scaleInput() {
  console.log(possessedScale.value);
  console.log(markerDescription);
  if (possessedScale.value == 0) {
    possessedScale.style.accentColor = "green";
    console.log(possessedScale.style.accentColor);
  } else if (possessedScale.value > 0 && possessedScale.value < 3) {
    possessedScale.style.accentColor = "yellow";
    console.log(possessedScale.style.accentColor);
  } else if (possessedScale.value > 2 && possessedScale.value < 5) {
    possessedScale.style.accentColor = "orange";
    console.log(possessedScale.style.accentColor);
  } else {
    possessedScale.style.accentColor = "red";
    console.log(possessedScale.style.accentColor);
  }
}
