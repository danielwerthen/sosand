(function () {
	function iterator(cols) {
		var p = { x: 0, y: 0 };
		function square() {
			p.x++;
			if (p.x >= cols) {
				p.x = 0;
				p.y++;
			}
		}
		function diag() {
			if (p.y === 0) {
				p.y = p.x + 1;
				p.x = 0;
			} else {
				p.x++;
				p.y--;
			}
		}
		return {
			ptr: function () { return { x: p.x, y: p.y }; },
			step: function () {
				square();

			}
		};
	}
	function placer() {
		var grid = [];
		return function (card, ptr) {
			var c = $(card),
				h = _.reduce(grid[ptr.x] || [], function (m, n) { return m + n; }, 0);
			c.css({ left: ptr.x * 200, top: h });
			if (!grid[ptr.x]) { grid[ptr.x] = []; }
			grid[ptr.x][ptr.y] = c.outerHeight();
		};
	}
	function group() {

		//find all cards
		var cards = $('div.card'),
			width = $(cards[0]).outerWidth(),
			columns = Math.floor($(window).width() / width);
		var sorted = _.sortBy(cards, function (c) { return -$(c).outerHeight(); });
		cards.addClass('absolute');
		var it = iterator(columns),
			place = placer();
		_.each(sorted, function (card) {
			var ptr = it.ptr();
			place(card, ptr);
			it.step();
		});
	}

	// On window load
	window.addEventListener('load', function load() {
		window.removeEventListener('load', load);
		group();
	});
	window.addEventListener('resize', function load() {
		group();
	});
})();
