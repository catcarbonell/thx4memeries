$(document).ready(function(){
console.log('oh heck.');
/* 
-- FRONT-END NOTES --
x //   extra idea: generate random value quote for the main search
x // on-load: search bar in the center-center
// after: search bar goes on top, upper-most z-index, opacity goes 0.8-0.9 when scrolling
// upon hover, goes back to opacity: 1 
// gifs on-scroll: fadeIn

-- BACK-END NOTES --
// jQuery Ajax call
*/

/* RANDOQUOTE INPUT */
const randoQuoteLib = [
    "Going my way?",
    "Hello. Is it me you're looking for?",
    "Khajit has wares if u have coin.",
    "One more time~ Search for the memeries",
    "A/S/L?"
];

let randoQuoteGen = () => {
    const randoMath = Math.random();
    let i = randoQuoteLib.length;
    return randoQuoteLib[Math.floor(i * randoMath)];
}
$('input[type=text]#main-input').val("🔍 " + randoQuoteGen());

/* */ 

}); // end of doc ready