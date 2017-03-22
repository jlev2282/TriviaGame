$(document).ready(function() {
var timer = 30;
var currentdeck =[];
var gameDeck = [
	{
		category:"Bill and Ted's Excellent Adventure!",
		backImage: "url('../images/billandted1.jpg')",
		biopic: "../images/billandtedbethoveen.jpg",
		bio: "Bill (Alex Winter) and Ted (Keanu Reeves) are high school buddies starting a band. However, they are about to fail their history class, which means Ted would be sent to military school. They receive help from Rufus (George Carlin), a traveler from a future where their band is the foundation for a perfect society. With the use of Rufus' time machine, Bill and Ted travel to various points in history, returning with important figures to help them complete their final history presentation.",
		form: billTedqs
	},

	/*{
		category: "Back to the Future",
		backImage: "../images/backtothefutureback.jpg",
		biopic: "../images/backtothefuturebio.jpg",
		bio: "In this 1980s sci-fi classic, small-town California teen Marty McFly (Michael J. Fox) is thrown back into the '50s when an experiment by his eccentric scientist friend Doc Brown (Christopher Lloyd) goes awry. Traveling through time in a modified DeLorean car, Marty encounters young versions of his parents (Crispin Glover, Lea Thompson), and must make sure that they fall in love or he'll cease to exist. Even more dauntingly, Marty has to return to his own time and save the life of Doc Brown.",
		form:backFutqs
	},

	{
		category: "Doctor Who",
		backImage: "../images/drwhobackground.jpg",
		biopic: "url('drwhobio1.jpg')",
		bio: "The Doctor, from a race called the Time Lords whose home planet is Gallifrey, travels through time and space in his ship the TARDIS (an acronym for Time and Relative Dimensions In Space) with numerous companions. From time to time he regenerates into a new form (which is how the show has been running since 1963).",
		form:docWhoqs
	}*/
	];


//Code for the form arrays holding questions and answers//
 var billTedqs=[	
	{
		q1: "1.	Who lead the exercise class at the San Dimas Mall?",
		answers: [ "Napoleon","Joan of Arc","Ted","Sigmund Freud"
		],
		answer: "Joan of Arc"
	},
	{
		q2: "2.	Who was NOT a historical figure portrayed in the movie?",
		answers: [ "Billy the Kid", "Abraham Lincoln", "Beethoven", "George Washington"
		],
		answer: "George Washington"
	},
	{
		q3: "3.	What number did both Bills and both Teds say when proving their identity to themselves?",
		answers: [ "00", "19", "69", "3.14"
		],
		answer: 69
	},
	{
		q4: "4.	What do Bill and Ted offer Genghis Khan to lure him into the photo booth?",
		answers: [ "Ho Ho", "Twinkie", "Snickers", "Tootsie Pop"
		],
		answer: "Twinkie"
	},
	{
		q5: "5.	What is the name of the waterpark that Napoleon visits during his day in San Dimas?",
		answers: [ "Wet World", "Slip and Slide", "Wild Water", "Waterloo"
		],
		anwer: "Waterloo"
	},
	{
		q6: "6.	What do Bill and Ted order at the saloon where they meet Billy the Kid?",
		answers: [ "Whiskey", "Beer", "Pretzels", "Twinkies"
		],
		answer: "Beer"
	}
	];

	//Code for grabbing the chosen deck and assigning it to stage elements//

	$('#deck1').on('click', function() {
		currentdeck=gameDeck;
		console.log(currentdeck)
		$('#stagebanner').html(currentdeck[0].category);
		$('#startpage').css("background-image", currentdeck[0].backImage);
		$('#showpic').attr('src',currentdeck[0].biopic);
		$('#showbio').html(currentdeck[0].bio);
		$('#mainstage').html(billTedqs);

		});

});