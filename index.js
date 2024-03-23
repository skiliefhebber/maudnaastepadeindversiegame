const blauweJurk = document.querySelector('.blauwejurk');
const geleJurk = document.querySelector('.gelejurk');
const rokje = document.querySelector('.spijkerrokje');
const pantalon = document.querySelector('.pantalon');
const bloesje = document.querySelector('.bloesje');
const shirt = document.querySelector('.shirt');
const converse = document.querySelector('.converse');
const schoenen = document.querySelector('.schoenen');

const tweeJurk = document.querySelector(".tweejurk");
const tweeGeelJurk = document.querySelector(".tweegeeljurk");
const tweeRokje = document.querySelector(".tweerokje");
const tweePantalon = document.querySelector(".tweepantalon");
const tweeBloesje = document.querySelector(".tweebloesje");
const tweeShirt = document.querySelector(".tweeshirt");
const tweeConverse = document.querySelector(".tweeconverse");
const tweeSchoenen = document.querySelector(".tweeschoenen");

let buttonKlaar = document.querySelector('.buttonklaar');
let buttonCijfer = document.querySelector('.buttoncijfer');

let knopStatus = false

let gekozenJurk = ""
let gekozenOnderkleding = ""
let gekozenBovenkleding = ""
let gekozenSchoenen = ""

let juryNummer = Math.random() *10
juryNummer = Math.ceil(juryNummer) 




function toonBlauweJurk(){
    tweeJurk.classList.toggle('hidden');
    if(gekozenJurk !== ""){
        gekozenJurk = ""
    } else {
        gekozenJurk = "tweejurk"
    }
}
//  Het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. <-- Dit kun je dan natuurlijk ook weer uit klikken. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function toonGeleJurk(){
    tweeGeelJurk.classList.toggle('hidden');
    if(gekozenJurk !== ""){
        gekozenJurk = ""
    } else {
        gekozenJurk = "tweegeeljurk"
    }
}
//  Het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. <-- Dit kun je dan natuurlijk ook weer uit klikken. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function toonRokje(){
    tweeRokje.classList.toggle('hidden');
    if(gekozenOnderkleding !== ""){
        gekozenOnderkleding = ""
    } else {
        gekozenOnderkleding = "tweerokje"
    }
}
//  Het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. <-- Dit kun je dan natuurlijk ook weer uit klikken. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function toonPantalon(){
    tweePantalon.classList.toggle('hidden');
    if(gekozenOnderkleding !== ""){
        gekozenOnderkleding = ""
    } else {
        gekozenOnderkleding = "tweepantalon"
    }
}
//  Het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. <-- Dit kun je dan natuurlijk ook weer uit klikken. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function toonBloesje(){
    tweeBloesje.classList.toggle('hidden');
    if(gekozenBovenkleding !== ""){
        gekozenBovenkleding = ""
    } else {
        gekozenBovenkleding = "tweebloesje"
    }
}
//  Het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. <-- Dit kun je dan natuurlijk ook weer uit klikken. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function toonShirt(){
    tweeShirt.classList.toggle('hidden');
    if(gekozenBovenkleding !== ""){
        gekozenBovenkleding = ""
    } else {
        gekozenBovenkleding = "tweeshirt"
    }
}
//  Het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. <-- Dit kun je dan natuurlijk ook weer uit klikken. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function toonConverse(){
    tweeConverse.classList.toggle('hidden');
    if(gekozenSchoenen !== ""){
        gekozenSchoenen = ""
    } else {
        gekozenSchoenen = "tweeconverse"
    }
}
//  Het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. <-- Dit kun je dan natuurlijk ook weer uit klikken. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function toonSchoenen(){
    tweeSchoenen.classList.toggle('hidden');
    if(gekozenSchoenen !== ""){
        gekozenSchoenen = ""
    } else {
        gekozenSchoenen = "tweewitteschoenen"
    }
}
//  Het eerste deel van de functie (met classlist.toggle) is bedoelt dat als je op de jurk klikt, verschijnt op het poppetje. <-- Dit kun je dan natuurlijk ook weer uit klikken. De if else hierin is bedoelt dat de aangeklikte kleding op de catwalk te zien is.

function paginaVeranderen(){
    if(knopStatus == false){
        knopStatus = false
        document.querySelector('.pagina1').style.display = "none";
        document.querySelector('.pagina2').style.display = "block";
        document.getElementById("song").play(); // https//youtu.be/ZFqtk0Tsnsc?si=2Ex6hnoS0hCrAqWw, https://pixabay.com/nl/sound-effects/search/applause/ // Ik heb als eigen onderdeel een audio geluid van klappende mensen die het aangeklede poppetje juichend beoordelen. Dit heb ik opgezocht op youtube. Ik heb wel de 'click' weggehaald, want ik wilde dat de audio automatisch zou verschijnen. 
    } else{
        knopStatus = true
        document.querySelector('.pagina1').style.display = "none";
        document.querySelector('.pagina2').style.display = "block";
    }
    //  Bij deze function heb ik met de styledisplay none en block ervoor gezorgd dat als je op de knop klikt, automatisch naar een 'pagina twee' gaat, ook al zit het beide in 1 html.
   
    function toonGekozenJurken(){
        if(gekozenJurk === "tweejurk"){
            document.querySelector('.pagina2 .paginatweeblauwejurk').classList.remove('hidden');
        } else if(gekozenJurk === "tweegeeljurk"){
            document.querySelector('.pagina2 .paginatweegelejurk').classList.remove('hidden');
        }
    } toonGekozenJurken()
    // Bij deze function gebruik ik het removen van de classlist hidden op een nieuwe class, zodat er op de tweede pagina altijd een plaatje te zien is als je hem hebt aangeklikt. Dit link ik naar pagina 2 door dit in de function van 'paginaVeranderen' te zetten en de class .pagina2 in de document.querySelector te zetten.
    
    function toonGekozenOnderkleding(){
        if(gekozenOnderkleding === "tweerokje"){
            document.querySelector('.pagina2 .paginatweerok').classList.remove('hidden');
        } else if(gekozenOnderkleding === "tweepantalon"){
            document.querySelector('.pagina2 .paginatweepantalon').classList.remove('hidden');
        }
    }  toonGekozenOnderkleding()
    // Bij deze function gebruik ik het removen van de classlist hidden op een nieuwe class, zodat er op de tweede pagina altijd een plaatje te zien is als je hem hebt aangeklikt. Dit link ik naar pagina 2 door dit in de function van 'paginaVeranderen' te zetten en de class .pagina2 in de document.querySelector te zetten.

    function toonGekozenBovenkleding(){
        } if(gekozenBovenkleding === "tweebloesje"){
            document.querySelector('.pagina2 .paginatweebloesje').classList.remove('hidden');
        } else if(gekozenBovenkleding === "tweeshirt"){
            document.querySelector('.pagina2 .paginatweeshirt').classList.remove('hidden');
    } toonGekozenBovenkleding()
     // Bij deze function gebruik ik het removen van de classlist hidden op een nieuwe class, zodat er op de tweede pagina altijd een plaatje te zien is als je hem hebt aangeklikt. Dit link ik naar pagina 2 door dit in de function van 'paginaVeranderen' te zetten en de class .pagina2 in de document.querySelector te zetten.

    function toonGekozenSchoenen(){
        } if(gekozenSchoenen === "tweeconverse"){
            document.querySelector('.pagina2 .paginatweeconverse').classList.remove('hidden');
        } else if(gekozenSchoenen === "tweewitteschoenen"){
            document.querySelector('.pagina2 .paginatweeschoenen').classList.remove('hidden');
    } toonGekozenSchoenen()
    // Bij deze function gebruik ik het removen van de classlist hidden op een nieuwe class, zodat er op de tweede pagina altijd een plaatje te zien is als je hem hebt aangeklikt. Dit link ik naar pagina 2 door dit in de function van 'paginaVeranderen' te zetten en de class .pagina2 in de document.querySelector te zetten.

    }
    // Hierboven staan alle functions die aangezet worden als er van pagina 1 naar pagina 2 verandert wordt.
    
function cijferTonen(){
    document.querySelector("p").textContent = " "+ juryNummer
    if(juryNummer <= 5){
    document.querySelector("p").textContent = "We vinden het niet mooi. Je krijgt een 5"
    } else if(juryNummer == 6){
    document.querySelector("p").textContent = "Netjes, we geven je een 6"
    } else if(juryNummer == 7){
    document.querySelector("p").textContent = "Prachtig, je krijgt een 7"
    } else if(juryNummer == 8){
    document.querySelector("p").textContent = "Heel erg mooi, je verdient een 8"
    } else if(juryNummer == 9){
    document.querySelector("p").textContent = "Super mooi gemaakt! Een welverdiende 9"
    } else if(juryNummer == 10){
    document.querySelector("p").textContent = "Dit is echt fabulous! Je krijgt een 10"
    }
    }
    // Als extra onderwerp heb ik Math.random toegevoegd. Ik heb hierbij het voorbeeld van de if else opdracht uit de les gehouden en daarbij mijn eigen if else en else if gemaakt. Ik wilde de cijfers van 5 tot 10 en dat heb ik dus ook met *10 en <= 5 uitgebeeld.

blauweJurk.addEventListener('click', toonBlauweJurk);
geleJurk.addEventListener('click', toonGeleJurk );
rokje.addEventListener('click', toonRokje);
pantalon.addEventListener('click', toonPantalon);
bloesje.addEventListener('click', toonBloesje);
shirt.addEventListener('click', toonShirt);
converse.addEventListener('click', toonConverse);
schoenen.addEventListener('click', toonSchoenen);

buttonKlaar.addEventListener('click', paginaVeranderen);
buttonCijfer.addEventListener('click', cijferTonen);
    // Hier staan alle addEventListeners van de functions waarbij ik de click methode wil aanroepen. Dit moest gedaan worden om het klikken zo te krijgen.
