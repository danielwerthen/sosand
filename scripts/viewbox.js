$(function () {
	var items = $('.viewbox .boxitem'),
		resize = function () {
			_.each(items, function (element) {
				var item = $(element),
					img = item.find('img'),
					win = $(window),
					nw = img[0].naturalWidth,
					nh = img[0].naturalHeight,
					ar = nw / nh,
					sw = win.width(),
					sh = win.height();

				function set(size, ar) {
					if (size > sw) {
						return set(sw, ar);
					}
					if (size / ar > sh) {
						return set(sh * ar, ar);
					}
					item.css({
						width: size,
						height: size / ar,
						'margin-top': -(size / ar) / 2,
						'margin-left': -(size / 2)
					});
				}

				(function () {
					var size, max;
					if (nw < nh) {
						size = nh;
						max = sh;
					} else {
						size = nw;
						max = sw;
					}
					if (size < max) {
						set(max, ar);
					} else {
						set(size, ar);
					}
				})();
			});
		};
	_.each(items, function (element, id) {
		var item = $(element),
			prevId = id === 0 ? items.length - 1 : id - 1,
			nextId = id === items.length - 1 ? 0 : id + 1;
		item.find('.prev').click(function (ev) {
			ev.preventDefault();
			window.location = $(items[prevId]).attr('id');
		});
		item.find('.next').click(function (ev) {
			ev.preventDefault();
			window.location = $(items[nextId]).attr('id');
		});
	});
	resize();
	$(window).on('resize', resize);
	var cards = $('.content ul');
	function nav() {
		var hash = window.location.hash,
			found = false;
		_.each(items, function (element) {
			if ($(element).attr('id') == hash) {
				$(element).show();
				found = true;
			} else {
				$(element).hide();
			}
		});
		if (!found) {
			cards.show();
		} else {
			cards.hide();
		}
	}
	window.addEventListener("hashchange", nav, false);
	nav();
});
