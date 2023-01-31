
var quotes = [
	{
	quote: "I will achieve success in life not immediately but definitely",
	source: "kirushak"
	},
	{
	quote: "Success is not final, failure is not fatal; it is the courage to continue that counts.",
	source: "Winston Churchill"
	},
	{
	quote: "If there is no struggle, there is no progress",
	source: "Frederick Douglass"
	},
	{
	quote: "somewhere, something incredible is waiting to be known",
	source: "Carl Sagan"
	},
	{
	quote: "Don't worry about failure; you have to be right once.",
	source: "Drew Houston"
	},
	{
	quote: "Never let your success to your head and never let your failure to your heart ",
	source: "Drake"
	},
	{
	quote: "Doubt is a killer. You just have to know who you are and what you stand for.",
	source: "Jennifer Lopez", 
	},
	{
	quote:  "Life's too mysterious to take too serious.",
	source: "Mary Engelbreit"
	},
	{
	quote: "If you can't yet do great things, do small things in a greater way",
	source: "Napoleon Hill"
	},
	{
	quote: "If you don't risk anything, you risk even more.",
	source: "Erica Jong"
	},
	{
	quote: "Never bend your head. Always hold it high. Look the world straight in the eye",
	source: "Helen Keller", 
	},
	{
	quote: "Appear weak when you are strong and strong when you are weak",
	source: "Sun Tzu", 

	},
	{
	quote: "let your plans be drak and impenetrable as night, when you move fall like a thunder a thunderbolt ",
	source: "Sun tzu",
	},
	{
	quote: "In the midst of chaos, there is also opportunity",
	source: "Sun Tzu"
	},
	{
	quote: "If you want to go fast, go alone. If you want to go far, go together.",
	source: "Ratan Tata"
	},
	{
	quote: "It's OK to not be OK, as long as you don't stay that way.",
	source: "Anonymous"
	},
	{
	quote: "Opportunities multiply as they are seized",
	source: "Sun Tzu"
	},
	{
	quote: "Believe you can and you're halfway there.",
	source: "T. Roosevelt"
	},
	{
	quote: "May I never be complete. May I never be content. May I never be perfect.",
	source: "Chuck Palahniuk"
	},
	{
	quote: "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.",
	source: "Marie Curie"
	},
	{

	quote: "Those who don't believe in magic will never find it.",
	source: "Roald Dahl"
	},
	{
	quote: "There is no elevator to success  you have to take the stairs.",
	source: "Anonymous"
	},
	{
	quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
	source: "Jose Luis Borges"
	},
	{
	quote: "Who wishes to fight must first count the cost",
	source: "Sun Tzu", 
	},
	{
	quote: "Plan for what is difficult while it is easy do what is great while it is small",
	source: "Sun Tzu"
	},
	{
	quote: "An enemy is a friend who knows too much about you",
	source: "Sun Tzu"
	},
	{
	quote: "Do not set yourself on fire in order to keep others warm.",
	source: "Anonymous"
	},
	{
	quote: "There is nothing impossible to they who will try.",
	source: "Alexander The Great"
	},
	{
	quote: "It's supposed to be hard. If it were easy, everyone would do it.",
	source: "Jimmy Dugan",
	},
	{
	quote: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
	source: "Anonymous"
	},
	{
	quote: "Life may not be the party we hoped for, but while we're here, we should dance.",
	source: "Anonymous"
	},
	{
	quote: "Never cowardly or cruel. Never give up, never give in.",
	source: "Doctor Who"
	},
	{
	quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
	source: "Ralph Waldo Emerson"
	},
	{
	quote: "Belief creates the actual fact.",
	source: "William James"
	},
	{
	quote: "Love all, trust a few, do wrong to none.",
	source: "William Shakespeare"
	},
	{
	quote: "Clear eyes, full hearts, can't lose.",
	source: "Dillon Panthers",
	},
	{
	quote: "We are what we repeatedly do, Excellence is not an act but a habit.",
	source: "Aristotle"
	}
];

function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}
 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;

					//assigns random color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}
window.setInterval(function(){
printQuote ();
}, 15000);		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);






	
