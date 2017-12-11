// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Creates a function that selects a random quote from quotes array of objects. 

const getRandomQuote = () => {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  let chosenQuote = quotes[randomQuote];
  return chosenQuote;
};

// Calls the printQuote function to reset a new quote to the page every 30 seconds

window.setInterval(printQuote, 30000);

// Prints out the randomly chosen quote onto the page.

function printQuote() {
  let quote = getRandomQuote();
  
/* printQuote will convert the htmlQuote string below into two paragraphs, specifying
the quote and the source of the quote from the array*/
  
  let htmlQuote = '';
  htmlQuote += '<p class="quote">' + quote.quote + '</p>';
  htmlQuote += '<p class="source">' + quote.source + '</p>';
  if ( quote.citation ) {
    htmlQuote += '<span class="citation">' + quote.citation + '</span>';
   } else {
    htmlQuote += '';
   }
  if ( quote.year ) {
    htmlQuote += '<span class="year">' + quote.year + '</span>';
  } else {
    htmlQuote += '';
  }
    if ( quote.tags ) {
    htmlQuote += '<span class="tags">' + quote.tags + '</span>';
  } else {
    htmlQuote += '';
  }

/* the document.getElementById function will track the ID of quote-box within the
index.html page and apply the random quote that printQuote is able to provide */  
  
  document.getElementById('quote-box').innerHTML = htmlQuote;
  
/* getRandomBgColor function is called within the printQuote function to
apply the random background color each time the button is clicked. */  
  
  return getRandomBgColor();
}

// selects random background color for where this function is called.

const getRandomBgColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgbColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  
// Tracks the body element within the index.html to apply random background color whenever button is clicked.
  
  document.body.style.backgroundColor = rgbColor;
}
