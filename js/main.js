const infoButton1 = document.querySelector("#infobutton1");
const infoButton2 = document.querySelector("#infobutton2");
const infoButton3 = document.querySelector("#infobutton3");

infoButton1.addEventListener("mouseover", onInfoButton1);
infoButton2.addEventListener("mouseover", onInfoButton2);
infoButton3.addEventListener("mouseover", onInfoButton3);

const aside1 = document.querySelector("#default-highlight1");
const aside2 = document.querySelector("#default-highlight2");

function onInfoButton1() {
  console.log("Mouse over 1");
  document.querySelector("#infobutton1-bg").style.fill = "#ffffff";
  document.querySelector("#infobutton1-text").style.fill = "#ec2b8c";
  document.querySelector("#infobutton1-dot").style.fill = "#ec2b8c";
  document.querySelector(".info-text > h2").textContent = "Omvendte kors";
  document.querySelector("#infobutton1-dot").style.fill = "#ec2b8c";
  document.querySelector("#default-info-text").innerHTML =
    "Krucifikser der pludselig vender på hovedet, går ofte hånd i hånd med dæmoniske besættelser. Derfor anbefaler vi, at du ved din kærestes første tegn på besættelse, hænger et kors op på væggen og holder øje med dets vinkel. <br> <br> Særligt manipulative dæmoner vil sommetider nøjes med at stirre intenst eller truende på krucifikser, og undskylde denne opførsel med ateisme.";
  aside1.textContent = "73% af udspurgte mænd oplever hurtig viften med kors som en trussel.";
  aside2.textContent = "Vindpust, rystelser og berøring kan påvirke korsets position.";
}

function onInfoButton2() {
  console.log("Mouse over 2");
  document.querySelector("#infobutton2-bg").style.fill = "#ffffff";
  document.querySelector("#infobutton2-text").style.fill = "#ec2b8c";
  document.querySelector("#infobutton2-dot").style.fill = "#ec2b8c";
  document.querySelector(".info-text > h2").textContent = "Tom stirren om natten";
  document.querySelector("#default-info-text").innerHTML =
    "Stirrer din kæreste tomt ud i mørket i over et kvarter ad gangen, er hans krop formentlig blevet midlertidigt overtaget af en dæmon. <br> <br>Du kan typisk forstyrre den besattes tilstand ved hjælp af høje lyde og store armbevægelser, men vi anbefaler, at du først og fremmest dokumenterer episoderne med dit kamera, så nogen vil tro dig.";
  aside1.textContent = "7/10 har oplevet tom stirren under et arbejdsmøde.";
  aside2.textContent = "Mangel på blinken kan forårsage tørre øjne.";
}

function onInfoButton3() {
  console.log("Mouse over 3");
  document.querySelector("#infobutton3-bg").style.fill = "#ffffff";
  document.querySelector("#infobutton3-text").style.fill = "#ec2b8c";
  document.querySelector("#infobutton3-dot").style.fill = "#ec2b8c";
  document.querySelector(".info-text > h2").textContent = "Ny kutte";
  document.querySelector("#default-info-text").innerHTML =
    "Går din kæreste kutteklædt rundt, er der høj risiko for, at han har stiftet en pagt med Lucifer, som bør gøre dig utryg. <br> <br> Dragten har rituel betydning, men er på grund af sin længde og hætte ganske upraktisk, derfor kan du som regel løbe fra din kutteklædte kæreste før han ofrer dig, eller for at undgå dømmende blikke når I møder folk på gaden.";
  aside1.innerHTML =
    '<abbr title="live action roleplay">LARP</abbr>\'ere kan føle sig uretfærdigt udpegede ved kutterelaterede anklager.';
  aside2.textContent = "Flugt op ad trapper er effektivt mod en kutteklædt modstander.";
}

infoButton1.addEventListener("mouseout", mouseOut);
infoButton2.addEventListener("mouseout", mouseOut);
infoButton3.addEventListener("mouseout", mouseOut);

function mouseOut() {
  console.log("Mouse out");
  document.querySelector(".info-text > h2").textContent = "Sådan ved du, at han er besat";
  document.querySelector("#default-info-text").innerHTML =
    "Er din kæreste blevet besat af en dæmon? I en rundspørge blandt medlemmer af Okkultiveret Univers gættede mindst én på, at dæmonisk besættelse rammer flere husstande, end man skulle tro.<br> <br> Vi har samlet de tre mest almindelige tegn på, at din kæreste er offer for en dæmonisk besættelse, så du kan danne dig et overblik.<br> <br> Hold musen over tallene for at læse mere.";
  aside1.textContent = "58% af alle dæmoniske besættelser sker på tom mave.";
  aside2.textContent = "4 ud af 5 besatte oplever øget fleksibilitet.";

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

const css = document.querySelector("#lightmode");
console.log(css);

const modeButton = document.querySelector("#colorMode");

modeButton.addEventListener("click", changeMode);

function changeMode() {
  if (css.href.includes("dark")) {
    css.href = "css/custom.css";
    console.log("change to darkmode");
  } else {
    css.href = "css/custom-dark.css";
    console.log("change to lightmode");
  }
}
