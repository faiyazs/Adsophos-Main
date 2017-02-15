function makeStar (num, top, position) {
  if (num > 0) {
  var star = '<div class="starry star" id="star' + num + '"></div>';
  $('body').append(star);
  $('#star' + num).css('left', position);
  $('#star' + num).css('top', top);
  num--;
  makeStar(num, randomInt(10,600), randomInt(10,2000));
  }
}

makeStar(150, randomInt(10,600), randomInt(10, 2000));


function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

$(".container").animate({
  left: "+2200px"
}, 35000)