---
---
(function () {
	var imgs = [
		{% for photo in site.data.photos %}
			{{ photo | jsonify }},
		{% endfor %}
		], container = document.querySelector('#container');
	
	imgs.map(function (img) {
		var el = document.createElement('img');
		el.setAttribute('src', '/imgs/thumbs/' + img.url);
		container.appendChild(el);
	});


})();
