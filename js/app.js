var count = 60,
		deg = 0;

// Function to update time display each second
function display(val) {
	if(val < 10) { val = '0' + val; }
	$('.display').text(val);
}

// Timer function to countdown seconds and update angles of masks
// blocker added after 30 seconds
function timer(count) {
	var interval = setInterval(function(){
		count--;
		deg += 6;
		display(count);
		if(count >= 30) {
			$('.mask-right').css('transform', 'rotate(' + deg + 'deg)');
		} else {
			$('.mask-left').css('transform', 'rotate(' + deg + 'deg)');
		}

		if(count === 30) {
			deg = 0;
			$('.block').removeClass('handle');
			$('.mask-left').removeClass('handle');
		} else if(count === 0) {
			clearInterval(interval);
			$('.display').css('color', '#008c9e');
		}

	}, 1000);
}

timer(count);
