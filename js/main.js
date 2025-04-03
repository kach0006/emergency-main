const infoButton1 = document.querySelector("#infobutton1");
const infoButton2 = document.querySelector("#infobutton2");
const infoButton3 = document.querySelector("#infobutton3");

infoButton1.addEventListener("mouseover", onInfoButton1);
infoButton2.addEventListener("mouseover", onInfoButton2);
infoButton3.addEventListener("mouseover", onInfoButton3);

function onInfoButton1() {
  console.log("Mouse over 1");
  document.querySelector("#infobutton1-bg").style.fill = "#ffffff";
  document.querySelector("#infobutton1-text").style.fill = "#ec2b8c";
  document.querySelector("#infobutton1-dot").style.fill = "#ec2b8c";
  document.querySelector(".info-text > h2").textContent = "Omvendte kors";
  document.querySelector("#infobutton1-dot").style.fill = "#ec2b8c";
}

function onInfoButton2() {
  console.log("Mouse over 2");
  document.querySelector("#infobutton2-bg").style.fill = "#ffffff";
  document.querySelector("#infobutton2-text").style.fill = "#ec2b8c";
  document.querySelector("#infobutton2-dot").style.fill = "#ec2b8c";
  document.querySelector(".info-text > h2").textContent = "Stirren efter sengetid";
}

function onInfoButton3() {
  console.log("Mouse over 3");
  document.querySelector("#infobutton3-bg").style.fill = "#ffffff";
  document.querySelector("#infobutton3-text").style.fill = "#ec2b8c";
  document.querySelector("#infobutton3-dot").style.fill = "#ec2b8c";
  document.querySelector(".info-text > h2").textContent = "Ny kutte";
}

infoButton1.addEventListener("mouseout", mouseOut);
infoButton2.addEventListener("mouseout", mouseOut);
infoButton3.addEventListener("mouseout", mouseOut);

function mouseOut() {
  console.log("Mouse out");
  document.querySelector(".info-text > h2").textContent = "Sådan ved du, at han er besat";
  document.querySelector("#default-info-text").innerHTML =
    "Er din kæreste blevet besat af en dæmon? I en rundspørge blandt medlemmer af Okkultiveret Univers gættede mindst én på, at dæmonisk besættelse rammer flere husstande, end man skulle tro.<br> <br> Vi har samlet de tre mest almindelige tegn på, at din kæreste er offer for en dæmonisk besættelse, så du kan danne dig et overblik.<br> <br> Klik eller hold musen over tallene for at læse mere.";

  document.querySelector("#infobutton1-bg").style.fill = "#ec2b8c";
  document.querySelector("#infobutton1-text").style.fill = "#ffffff";
  document.querySelector("#infobutton1-dot").style.fill = "#ffffff";
  document.querySelector("#infobutton2-bg").style.fill = "#ec2b8c";
  document.querySelector("#infobutton2-text").style.fill = "#ffffff";
  document.querySelector("#infobutton2-dot").style.fill = "#ffffff";
  document.querySelector("#infobutton3-bg").style.fill = "#ec2b8c";
  document.querySelector("#infobutton3-text").style.fill = "#ffffff";
  document.querySelector("#infobutton3-dot").style.fill = "#ffffff";
}

/*function resetInfoBox() {
  console.log("Mouse out");

  document.querySelector(".info-text > h2").textContent = "Sådan ved du, at han er besat";
  document.querySelector(".placeholder").innerHTML =
    "Er din kæreste blevet besat af en dæmon? I en rundspørge blandt medlemmer af Okkultiveret Univers gættede mindst én på, at dæmonisk besættelse rammer flere husstande, end man skulle tro.<br> <br> Vi har samlet de tre mest almindelige tegn på, at din kæreste er offer for en dæmonisk besættelse, så du kan danne dig et overblik.<br> <br> Klik eller hold musen over tallene for at læse mere.";
}*/
