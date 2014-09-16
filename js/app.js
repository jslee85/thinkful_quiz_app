var questionCount = 0;

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
	$(".yes").on('click', function() {
		stateChange('dicaprio');
		$('.celebname').text('Leo DiCaprio');
		$('.one').addClass('correct');
		$('.points').text('20');
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