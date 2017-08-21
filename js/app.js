var deg = 0,
    count = 60,
    mid = count / 2,
    angle = 180 / mid;

// Function to update time display each second
function display(val) {
	if(val < 10) { val = '0' + val; }
	$('.display').text(val);
}

// Timer function to countdown seconds and update angles of masks
// righthand mask pulled to front at mid point to cover left mask.
function timer(count) {
	var interval = setInterval(function(){
		count--;
		deg += angle;
		display(count);
		if(count >= mid) {
			$('.mask-right').css('transform', 'rotate(' + deg + 'deg)');
		} else {
			$('.mask-left').css('transform', 'rotate(' + deg + 'deg)');
		}

		if(count === mid) {
			deg = 0;
      $('.mask-right').css('z-index', '2');
      $('.mask-left').removeClass('handle');
		} else if(count === 0) {
			clearInterval(interval);
			$('.display').css('color', '#008c9e');
		}

	}, 1000);
}

timer(count);
