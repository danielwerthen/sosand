$(function () {
	var display = $('#display'),
		content = $('.content'),
		resizer;
	function resize(element) {
		var item = $(element).find('.viewbox'),
			img = item.find('img'),
			win = $(window),
			nw = img[0].naturalWidth,
			nh = img[0].naturalHeight,
			ar = nw / nh,
			w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0],
			sw = w.innerWidth || e.clientWidth || g.clientWidth,
			sh = w.innerHeight|| e.clientHeight|| g.clientHeight;
		(function () {
			var h = sh - 50;
			if (h * ar > sw) {
				h = sw / ar;
			}
			item.css({
				width: h * ar,
				height: h,
				'margin-top': -(h) / 2 + 25,
				'margin-left': -((h * ar) / 2)
			});
		})();
	}
	function show() {
		display.addClass("show");
		content.removeClass("show");
	}
	function hide() {
		display.removeClass("show");
		content.addClass("show");
	}
	function load(url) {
		var ext = "",
			imgs = [ "jpg", "png", "gif" ],
			container = display.find('.container'),
			img;
		if (url === "") {
			container.html("");
			hide();
			return;
		}
		ext = url.substring(url.lastIndexOf(".")+1);
		if (imgs.indexOf(ext) > -1) {
			img = $('<div class="viewbox"><img class="viewer" src="' + url + '"></img></div>');
			img.find('img').one('load', function () {
				resize(container);
				resizer = function () {
					resize(container);
				};
			});
			container.html(img);
			show();
		} else {
			container.load(url, function () {
				window.scrollTo(0,0);
				show();
			});
		}
	}
	$(window).on("hashchange", function (e) {
		var url = window.location.hash.substr(1);
		load(url);
		e.preventDefault();
	});
	load(window.location.hash.substr(1));
	window.addEventListener('resize', function load() {
		if (resizer) {
			resizer();
		}
	});
});
