var items = {
	0: {
		name: "clooney",
		text: "George Clooney",
		image: "images/clooney.png",
		correct: true
	},
	1: {
		name: "dicaprio",
		text: "Leonardo DiCaprio",
		image: "images/dicaprio.png",
		correct: false
	},
	2: {
		name: "williams",
		text: "Michelle Williams",
		image: "images/williams.png",
		correct: false
	},
	3: {
		name: "smith",
		text: "Will Smith",
		image: "images/smith.png",
		correct: false
	},
	4: {
		name: "portman",
		text: "Natalie Portman",
		image: "images/portman.png",
		correct: true
	}
};

var currentItem = 0;
var quizScore = 0;

$(document).ready(function(){	
	/*--- Display information modal box ---*/
  	$(".info").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	loadData(0);

	$(".yes").on('click', function() {
		checkAnswer(true);
	});

	$(".no").on('click', function() {
		checkAnswer(false);
	});

	/*--- Start a new game ---*/
	$('#newgame').on('click', function() {
		resetGame();
	});
});

function loadData (itemNumber) {
	//update celebrity name, image, and question number
	$('.celebname').text(items[itemNumber].text);
	$('.celebphotos').attr("src", items[itemNumber].image);
	updateCount(currentItem+1);
}

function checkAnswer (value) {
	//check if user answer is correct
	if (value == items[currentItem].correct) {
		//correct
		quizScore+=20;
		updateScore(quizScore);
		$('.evaluate'+currentItem).addClass('correct');
	}
	else {
		//incorrect
		$('.evaluate'+currentItem).addClass('incorrect');
	}
	currentItem++;
	loadData(currentItem);
} 

/*--- Update the question count ---*/
function updateCount (count) {
	$('.currentquestion').text(count);
}

/*--- Update the question count ---*/
function updateScore (score) {
	$('.points').text(quizScore);
}

function resetGame () {
	quizScore = 0;
	currentItem = 0;
	updateScore(quizScore);
	$('.quizresult').removeClass('correct incorrect');
	updateCount(currentItem+1);
	loadData(0);
}