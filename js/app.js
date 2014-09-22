var items = {
	0: {
		name: "clooney",
		text: "George Clooney",
		image: "../images/clooney.png",
		correct: true
	},
	1: {
		name: "dicaprio",
		text: "Leonardo DiCaprio",
		image: "../images/dicaprio.png",
		correct: false
	},
	2: {
		name: "williams",
		text: "Michelle Williams",
		image: "../images/williams.png",
		correct: false
	},
	3: {
		name: "smith",
		text: "Will Smith",
		image: "../images/smith.png",
		correct: false
	},
	4: {
		name: "portman",
		text: "Natalie Portman",
		image: "../images/portman.png",
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

  	/*--- Begin the question count 
	$(".close").on('click', function() {
		questionCount++;
		updateCount(questionCount);
  	});---*/

	/*--- 
	$(".circlebutton").on('click', function() {
		stateChange('dicaprio');
		questionCount++;
		updateCount(questionCount);
		$('.celebname').text('Leo DiCaprio');
		if ($(this).hasClass( "yes")) {
			quizScore+=20;
			updateScore(quizScore);
			$('.one').addClass('correct');
		}
		else {
			$('.one').addClass('incorrect');
		}
	});---*/
});

function loadData (itemNumber) {
	$('.name').text(items[itemNumber].name);
	$('.celebname').text(items[itemNumber].text);
	$('.img').attr('src', items[itemNumber].image);
}

function checkAnswer (value) {
	//check if user answer is correct
	if (value == answers[currentItem].correct) {
		//correct
		quizScore+=20;
		$('.one').addClass('correct');
	}
	else {
		//incorrect
		$('.one').addClass('incorrect');
	}
	loadData(itemNumber++);
} 

/*--- Show correct celebrity image ---*/
function stateChange(str) {
    $('.actor').hide();
    $('.' + str).show();
}

/*--- Update the question count ---*/
function updateCount (count) {
	$('.currentquestion').text(questionCount);
}

/*--- Update the question count ---*/
function updateScore (score) {
	$('.points').text(quizScore);
}

/*--- Start a new game 
function reloadPage() {
	location.reload();
}---*/