var questionCount;

$(document).ready(function(){	
	/*--- Display information modal box ---*/
  	$(".info").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$('.circlebutton').mousedown(function() {
		stateChange('dicaprio');	
	});

	$("form").submit(function(e) {
		if (!bingo) {
			newGuess = $('#userGuess').val();
			$('#userGuess').val('');
			guessPass = checkNumber(newGuess);
	 		if(!guessPass) {
	  			questionCount++;
				updateCount(questionCount);
			}
  		}
  	});
});

function stateChange(str) {
    $('.actor').hide();
    $('.' + str).show();
}

/*--- Update the question count ---*/
function updateCount (count) {
	$('.currentquestion').text(questionCount);
}