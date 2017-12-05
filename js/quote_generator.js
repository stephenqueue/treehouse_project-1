//Creates a function that selects a random quote from quotes array.

function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  var chosenQuote = quotes[randomQuote];
  return chosenQuote;
}

//selects random color for the background of the submit button.

function getRandomBgColor() {
  var randomColor = ['#FF0000','#008000','#008080','#000080','#800080','BA33FF','539BBD'];
  var randomColorIndex = Math.floor(Math.random() * randomColor.length);
  var selectedRandomColor = randomColor[randomColorIndex];
  
//Tracks the ID element within the index.html to apply random background color whenever button is clicked.
  
  document.getElementById("loadQuote").style.backgroundColor = selectedRandomColor;
}

//Pops the randomly chosenQuote once the submit button is clicked

function printQuote() {
  var quote = getRandomQuote();
  var htmlQuote = '';
  htmlQuote += '<p class="quote">' + quote.quote + '</p>';
  htmlQuote += '<p class="source">' + quote.source + '</p>';
  document.getElementById('quote-box').innerHTML = htmlQuote;
  return getRandomBgColor();
}




// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);