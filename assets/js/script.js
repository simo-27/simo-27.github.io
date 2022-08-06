/* carosello di parole */

var words = ['CODING', 'START-UP', 'MMA', 'LIBRI', 'VIAGGI', 'VIRTUAL REALITY', 'MEDITAZIONE'];
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 1000);

function update_carousel_words(){
word.innerHTML = words[counter];
counter++;
if (counter >= words.length) {
    counter = 0;
}
}

