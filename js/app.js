$(document).ready(function(){
    console.log('oh heck.');
    // GIPHY API URL 
    const giphyURL = ' https://api.giphy.com/v1/gifs/search?api_key=P3e3lyyGy6pyTA8JjmwmitoJ0YCQe2PF&q=';

    /* RANDOQUOTE INPUT */
    const randoQuoteLib = [
        "One more time~ Search for the memeries",
        "Going my way?",
        "Hello. Is it me you're looking for?",
        "Khajit has wares if u have coin.",
        "One more time~ Search for the memeries",
        "A/S/L?",
        "=^.^=",
        "Hey.",
        "One more time~ Search for the memeries",
    ];

    let randoQuoteGen = () => {
        const randoMath = Math.random();
        let i = randoQuoteLib.length;
        return randoQuoteLib[Math.floor(i * randoMath)];
    }
    $('input[type=text]#main-input').val("🔍 " + randoQuoteGen());

    /* AJAXin */ 
    const form = document.querySelector('form');
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
            },
            error: function(error){
                console.log(error);
                console.log('oh no.')
                $('div').append(`<h2>Whoops. What happened??</h2>`);
            },
        });
        gifSearchInput.value= randoQuoteGen();
    }

    // *** EVENT LISTENERS *** //
    form.addEventListener('submit', handleSearchSubmit); 

}); // end of doc ready