$(document).ready(function(){
console.log('oh heck.');
// GIPHY API URL 
const giphyURL = ' https://api.giphy.com/v1/gifs/search?api_key=P3e3lyyGy6pyTA8JjmwmitoJ0YCQe2PF&q=';

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

/* AJAXin */ 


const form = document.querySelector('form');

// *** FUNCTIONS *** //
function handleSearchSubmit(event) {
    event.preventDefault();
    const gifSearchInput = document.querySelector('#main-input');
    document.querySelector('#gif-gallery').innerHTML = '';
   
    $.ajax(
        {
        method: 'GET',
        url: giphyURL + gifSearchInput.value + "&offset=0&rating=G&lang=en",
        success: function (response){ 
            $('#clear-search').show();
            for(i in response.data){
                //$(".gif-item").slice(0, 4).fadeIn().show();
                $('#gif-gallery').append( `
                <div class="gif-item">
                <img src=" ${response.data[i].images.downsized.url}" alt="TAGS" />
                <p>source:</p>
                <textarea>${response.data[i].images.downsized.url}</textarea>
                </div>
                `);
            }
          /*  $("#loadMore").show().on("click", function(e){
                e.preventDefault();
                $(".content:hidden").slice(0, 4).fadeIn();
                if($(".content:hidden").length <= 0){
                    $("#loadMore").hide();
                    $("#top-link").show();
                }
            });*/
        },
        error: function(error){
            console.log(error);
            console.log('oh no.')
            $('div').append(`<h2>Whoops. What happened??</h2>`);
        },
    });
    // Search reset!
     gifSearchInput.value='';
     $("#top-link").hide();
}

// *** EVENT LISTENERS *** //
form.addEventListener('submit', handleSearchSubmit); 

$('#clear-search').on('click', function(e){
    e.preventDefault();
    $('.gif-gallery').html('<section id="gif-gallery"></section>');
    $("#top-link").hide();
    $("#loadMore").hide();
    $("#clear-search").hide();
})



}); // end of doc ready