"use strict";
$(document).ready(function() {
	/*nav bar link animation time*/
	$('.nav-link').click(function(e) {
		e.preventDefault();
		if(e.target.tagName == "IMG"){
			e.target = e.target.parentNode;
		}
		if(!e.target.classList.contains('active-nav')){
			let link = this.getAttribute("href");
			moveUnderline(e.target);
			setTimeout(function() {
				window.location = link;
			}, 450); //CHANGE THIS
		}
	});

	let mouseX;
	let posX = 0;
	let blW = $('.slider-container').outerWidth();
	let blSW = $('.slider-container')[0].scrollWidth + blW * 0.035;
    let difference = (blSW/blW)-1;
	$('.slider-container').mousemove(function(e) {
        mouseX = e.pageX - this.offsetLeft;
        mouseX = Math.max(0, mouseX);
		setInterval(function(){
			posX += (mouseX - posX) / 20; // zeno's paradox equation "catching delay"	
			$('.card-container').css({marginLeft: -posX*difference});
		}, 10);
	});

	/*resize home img*/
	$(window).resize(function() {
		blW = $('.slider-container').outerWidth();
		blSW = $('.slider-container')[0].scrollWidth + blW * 0.05;
		difference = (blSW/blW)-1;
		posX = 0;
	});
	$(window).resize();


});
