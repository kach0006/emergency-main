document.querySelector("#infobutton1-default").addEventListener("mouseover", onInfobutton1);

function onInfobutton1() {
  console.log("Mouse over");
  document.querySelector("#infobutton1background").style.fill = "#fff";
  document.querySelector("#infobutton1background").style.stroke = "#fff";
  document.querySelector("#infobutton1text").style.fill = "#ec2b8c";
  document.querySelector("#infobutton1dot").style.fill = "#ec2b8c";
  document.querySelector(".info-text > h2").textContent = "OMVENDTE KORS";
}

document.querySelector("#infobutton1-default").addEventListener("mouseout", offInfobutton1);

function offInfobutton1() {
  console.log("Mouse out");
  document.querySelector("#infobutton1background").style.fill = "#ec2b8c";
  document.querySelector("#infobutton1background").style.stroke = "#ec2b8c";
  document.querySelector("#infobutton1text").style.fill = "#fff";
  document.querySelector("#infobutton1dot").style.fill = "#fff";
  document.querySelector(".info-text > h2").textContent = "Overskrift";
}

document.querySelector("#infobutton2-default").addEventListener("mouseover", onInfobutton2);

function onInfobutton2() {
  console.log("Mouse over");
  document.querySelector("#infobutton2background").style.fill = "#fff";
  document.querySelector("#infobutton2background").style.stroke = "#fff";
  document.querySelector("#infobutton2text").style.fill = "#ec2b8c";
  document.querySelector("#infobutton2dot").style.fill = "#ec2b8c";
  document.querySelector(".info-text > h2").textContent = "SAMME TID HVER NAT";
}

document.querySelector("#infobutton2-default").addEventListener("mouseout", offInfobutton2);

function offInfobutton2() {
  console.log("Mouse out");
  document.querySelector("#infobutton2background").style.fill = "#ec2b8c";
  document.querySelector("#infobutton2background").style.stroke = "#ec2b8c";
  document.querySelector("#infobutton2text").style.fill = "#fff";
  document.querySelector("#infobutton2dot").style.fill = "#fff";
  document.querySelector(".info-text > h2").textContent = "Overskrift";
}

document.querySelector("#infobutton3-default").addEventListener("mouseover", onInfobutton3);

function onInfobutton3() {
  console.log("Mouse over");
  document.querySelector("#infobutton3background").style.fill = "#fff";
  document.querySelector("#infobutton3background").style.stroke = "#fff";
  document.querySelector("#infobutton3text").style.fill = "#ec2b8c";
  document.querySelector("#infobutton3dot").style.fill = "#ec2b8c";
  document.querySelector(".info-text > h2").textContent = "HAN GÅR KUTTEKLÆDT";
}

document.querySelector("#infobutton3-default").addEventListener("mouseout", offInfobutton3);

function offInfobutton3() {
  console.log("Mouse out");
  document.querySelector("#infobutton3background").style.fill = "#ec2b8c";
  document.querySelector("#infobutton3background").style.stroke = "#ec2b8c";
  document.querySelector("#infobutton3text").style.fill = "#fff";
  document.querySelector("#infobutton3dot").style.fill = "#fff";
  document.querySelector(".info-text > h2").textContent = "Overskrift";
}
//function showInfobutton1() {
//console.log("Mouse out");
//document.querySelector("#infobutton1-default").style.visibility = "visible";

// console.log("infobox1Info");
// document.querySelector(".info-text > h2").textContent = "Overskrift i h2";
