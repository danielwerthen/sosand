(function () {
	function group() {
		//find all cards
		var cards = $('div.card');
		_.each(cards, function (card) {
			console.dir($(card).outerHeight());
		});
	}

	// On window load
	window.addEventListener('load', function load() {
		window.removeEventListener('load', load);
		group();
	});
})();
