// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Creates a function that selects a random quote from quotes array of objects. 

function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  var chosenQuote = quotes[randomQuote];
  return chosenQuote;
};

// selects random background color for where this function is called.

function getRandomBgColor() {
  var randomColor = ['#FF0000','#008000','#008080','#000080','#800080','BA33FF','539BBD'];
  var randomColorIndex = Math.floor(Math.random() * randomColor.length);
  var selectedRandomColor = randomColor[randomColorIndex];
  
// Tracks the ID element within the index.html to apply random background color whenever button is clicked.
  
  document.getElementById("loadQuote").style.backgroundColor = selectedRandomColor;
}

// Prints out the randomly chosen quote onto the page.

function printQuote() {
  var quote = getRandomQuote();
  
/* printQuote will convert the htmlQuote string below into two paragraphs, specifying
the quote and the source of the quote from the array*/
  
  var htmlQuote = '';
  htmlQuote += '<p class="quote">' + quote.quote + '</p>';
  htmlQuote += '<p class="source">' + quote.source + '</p>';

/* the document.getElementById function will track the ID of quote-box within the
index.html page and apply the random quote that printQuote is able to provide */  
  
  document.getElementById('quote-box').innerHTML = htmlQuote;
  
/* getRandomBgColor function is called within the printQuote function to
apply the random background color each time the button is clicked. */  
  
  return getRandomBgColor();
}