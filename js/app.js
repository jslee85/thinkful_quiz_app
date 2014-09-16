var questionCount = 0;
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

  	/*--- Begin the question count ---*/
	$(".close").on('click', function() {
		questionCount++;
		updateCount(questionCount);
  	});

  	/*--- Hacky method ---*/
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
	});
});


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