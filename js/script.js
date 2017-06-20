// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// create interval
var interval = setInterval(printQuote, 5000);

//function to get random quote form array
function getRandomQuote(array){
	// define min and max to generate a random number which can be used as index (based on objects in the array)
	var min = 0;
	var max = (array.length) - 1;
	// generate random number between min and max (including min and max value)
	var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	var randomQuote = array[randomNumber];
	// push the quote to the array of used quotes
	usedQuotes.push(randomQuote);
	// remove the quote from the quotes array
	quotes.splice(quotes.indexOf(randomQuote), 1);
	if(quotes.length == 0){
		quotes = quotes.concat(usedQuotes);
		usedQuotes = [];
	};
	// return the object of the position of the random number
	return randomQuote;
}

// function to print the random quote
function printQuote(){
	// get random quote object by calling the getRandomQuote function
	var randomQuote = getRandomQuote(quotes);
	// remove the html of the old quote
	document.getElementById('quote-box').innerHTML = '';
	// create html blueprint of the new quote
	var html = '<p class="quote">'+randomQuote.quote+'</p>\
				<p class="source">'+randomQuote.source;
    if(randomQuote.citation !== undefined){
    	html += '<span class="citation">'+randomQuote.citation+'</span>';
    }
    if(randomQuote.date !== undefined){
    	html += '<span class="year">'+randomQuote.date+'</span>';
    }
    html += '</p>';
    // add the blueprint to the page
    document.getElementById('quote-box').innerHTML = html;
    // change the color of the body
    document.body.style.backgroundColor = returnRandomColor();
    // reset interval
    clearInterval(interval);  
    interval = setInterval(printQuote, 5000);
}

// function to generate random rgb color
function randomRGB(){
  return Math.floor(Math.random() * 256 );
}

// function to return random rgb color
function returnRandomColor(){
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

// array of json objects
var quotes = [
	{
		quote    : "Don’t compare yourself with anyone in this world…if you do so, you are insulting yourself.",
		source  : "Bill Gates",
		tag      : "Inspirational"
	},
	{
		quote    : "The greatest thing in the world is to know how to belong to oneself.",
		source  : "Michel de Montaigne",
		citation : "The Complete Essays",
		date     : 1580,
		tag      : "Inspirational"
	},
	{
		quote    : "Real spirituality is about getting the bullshit out of your life and getting real.",
		source  : "Bryant McGill",
		tag      : 'Inspirational'
	},
	{
		quote    : "Your radiant energy is waiting to shine through if you’re willing to do the work to release it.",
		source  : "Kimberley Blaine",
		tag      : "Affirmative"
	},
	{
		quote    : "Y. That perfect letter. The wishbone, fork in the road, empty wineglass. The question we ask over and over.",
		source  : "Marjorie Celona",
		citation : "Y",
		date     : 2017,
		tag      : "Other"
	},
	{
		quote    : "Success is doing ordinary things extraordinarily well.",
		source  : "Jim Rohn",
		tag      : "Business"
	},
	{
		quote    : "Nothing great was ever built on excuses. You can’t whine your way through life. Kick your inner-whiner’s ass and get to living the good life.",
		source  : "Bryant McGill",
		tag      : "Business"
	},
	{
		quote    : "Don’t try to win over the haters; you are not a jackass whisperer.",
		source  : "Scott Stratten",
		citation : "Unmarketing: Stop Marketing. Start Engaging.",
		date     : 2010,
		tag      : "Business"
	},
	{
		quote    : "Do what you like, so long as it is intelligent.",
		source  : "Paul Gauguin",
		tag      : "Affirmative"
	},
	{
		quote    : "Use your talents. They are precious gifts given to you to put to work.",
		source  : "Robyn O'Brien",
		tag      : "Business"
	},
	{
		quote    : "If the grass looks greener on the other side, stop staring, comparing, and complaining, and start watering the grass you’re standing on.",
		source  : "Eugene Cho",
		tag      : "Inspirational"
	},
	{
		quote    : "If we did all the things we are capable of, we would literally astound ourselves.",
		source  : "Thomas Edison",
		tag      : "Affirmative"
	},
	{
		quote    : "Science is organised knowledge. Wisdom is organised life.",
		source  : "Immanuel Kant",
		tag      : "Inspirational"
	},
	{
		quote    : "Intelligence is the ability to adapt to change.",
		source  : "Stephen Hawkin",
		citation : "At his Oxford University graduation",
		tag      : "Business"
	},
	{
		quote    : "There’s a difference between challenging yourself and overwhelming yourself.",
		source  : "Anonymous",
		citation : "Something that took me too many years in school to realise",
		tag      : "Affirmative"
	}
]

var usedQuotes = [];

if(quotes.length === 1){
	quotes = usedQuotes;
	usedQuotes = [];
}