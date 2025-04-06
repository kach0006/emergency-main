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

const submitButton = document.querySelector("#form-button");
const firstName = document.querySelector("#f-name");
const lastName = document.querySelector("#l-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const postalCode = document.querySelector("#postal-code");
const city = document.querySelector("#city");
const streetAddress = document.querySelector("#street-address");
const possessedDate = document.querySelector("#possessed-date");
const annoyingRange = document.querySelector("#annoying-range");
const checkboxArray = [];

submitButton.addEventListener("click", submitClick);

function submitClick() {
  document.querySelector("#sum-first-name").textContent = firstName.value;
  document.querySelector("#sum-last-name").textContent = lastName.value;
  document.querySelector("#sum-phone").textContent = phone.value;
  document.querySelector("#sum-email").textContent = email.value;
  document.querySelector("#sum-postal-code").textContent = postalCode.value;
  document.querySelector("#sum-city").textContent = city.value;
  document.querySelector("#sum-address").textContent = streetAddress.value;
  document.querySelector("#sum-pos-date").textContent = possessedDate.value;
  document.querySelector("#sum-annoying").textContent = annoyingRange.value + " ud af 5";

  const requestType = document.querySelector('input[name="service-request"]:checked');
  console.log(requestType.value);
  document.querySelector("#sum-request-type").textContent = requestType.value;

  const possessedCheckbox = document.querySelectorAll('input[name="symptom-checkbox"]:checked');
  console.log(possessedCheckbox);

  possessedCheckbox.forEach(makeList);

  document.querySelector("#sum-symptoms").textContent = checkboxArray.join(" - ");
}

function makeList(checkbox) {
  checkboxArray.push(checkbox.value);
}
