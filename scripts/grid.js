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
		return function (card, ptr, width) {
			var c = $(card),
				h = _.reduce(grid[ptr.x] || [], function (m, n) { return m + n; }, 0),
				height = (c.height() / c.width()) * width;
			c.css({ left: ptr.x * width, top: h, width: width});
			if (c.hasClass('vimeo')) {
				c.find('iframe').width(width).height(height);
			}
			if (!grid[ptr.x]) { grid[ptr.x] = []; }
			grid[ptr.x][ptr.y] = c.outerHeight();
		};
	}
	function group() {

		//find all cards
		var cards = $('div.card'),
			width = $(cards[0]).outerWidth(),
			screenw = $(window).width(),
			columns = Math.floor(screenw / width);
		columns = columns > 4 ? 4 : columns;
		width = Math.floor(screenw / columns);
		cards.addClass('absolute');
		var it = iterator(columns),
			place = placer();
		_.each(cards, function (card) {
			var ptr = it.ptr();
			place(card, ptr, width);
			it.step();
		});
	}

	// On window load
	window.addEventListener('load', function load() {
		window.removeEventListener('load', load);
		$('.content').addClass('show');
		group();
		$('.loader').addClass('hide');
	});
	window.addEventListener('resize', function load() {
		group();
	});
})();
