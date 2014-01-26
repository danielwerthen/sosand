Portfolio
======

Configuration
-------

The content is defined and structured in the file <blob/gh-pages/_data/cards.yml>. In this file there are three types of cards; vimeo-videos, photos and pages. Each *card* needs a specified `type`-tag as well as some type specific tags.

###Vimeo

	- name: Video 1
	  vimeo: 82803389
	  type: vimeo

The `vimeo`-tag is used to signify a specific vimeo video, and corresponds to
the number in a vimeo link such as <http://vimeo.com/82803389>.

###Photos

	- name: Dimma
	  background: dimma.jpg
	  type: photo

The `background`-tag is used to specify the filename of the photo. It is
important to note that there should be two versions of each photo, one smaller
one placed in the folder [imgs/thumbs](imgs/thubs), and the big one placed in the folder
[imgs](imgs).
