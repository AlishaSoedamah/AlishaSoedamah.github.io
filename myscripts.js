
let bezoeker = {
    naam : prompt("Wat is je voornaam?"),
    leeftijd : prompt("Wat is je leeftijd?")
};
alert("Welkom op mijn portfolio website"+" "+bezoeker["naam"] +"!");

//object bezoeker in consolelog
console.log(bezoeker);

//naam tonen op pagina
let naamElement = document.querySelector('#naam');
naamElement.innerHTML = bezoeker.naam;

//BGcolours
if (bezoeker["leeftijd"]<18) {
    document.querySelector("body").style.backgroundColor = "crimson";
}
if (bezoeker["leeftijd"]>=18) {
    document.querySelector("body").style.backgroundColor = "lightgreen";
}

//text element welkom veranderd van kleur
if (bezoeker["leeftijd"]<18) {
    var sheet = document.createElement('style')
    sheet.innerHTML = "div {border: 0px solid red; background-color: darkred;}";
    document.body.appendChild(sheet);
}
if (bezoeker["leeftijd"]>=18) {
    var sheet = document.createElement('style')
    sheet.innerHTML = "div {border: 0px solid green; background-color: limegreen;}";
    document.body.appendChild(sheet);
    }

