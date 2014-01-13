$(function () {
	var display = $('#display'),
		content = $('.content');
	function resize(element) {
		var item = $(element).find('.viewbox'),
			img = item.find('img'),
			win = $(window),
			nw = img[0].naturalWidth,
			nh = img[0].naturalHeight,
			ar = nw / nh,
			sw = win.width(),
			sh = win.height();
		(function () {
			var h = sh;
			if (nh < nw) {
				h = h * (sw / (h * ar));
			} else {
				h = h * (sw / (h / ar));
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
			});
			container.html(img);
			show();
		} else {
			container.load(url, function () {
				show();
			});
		}
	}
	$(window).on("hashchange", function (e) {
		var url = window.location.hash.substr(1);
		load(url);
	});
	load(window.location.hash.substr(1));
});
