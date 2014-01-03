$(function () {
	var cards = $('div.card.photo'),
		imgs = _.map(cards, function (c) { return $(c).data('link'); });
	_.each(cards, function (element) {
		var card = $(element);
		card.click(function () {
			window.location = card.data('link');
		});
	});
});
