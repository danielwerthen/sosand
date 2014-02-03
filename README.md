Portfolio
======

Configuration
-------

The content is defined and structured in the file "_data/cards.yml". In this file there are three types of cards; vimeo-videos, photos and pages. Each *card* needs a specified `type`-tag as well as some type specific tags. The order of the cards is significant and will carry through to the final layout on the rendered page. Top to bottom in the "cards.yml" file, will lead to a left to right and top to bottom placement.

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
one placed in the folder "/imgs/thumbs", and the big one placed in the folder
"/imgs".

The `name`-tag is used for the "alt attribute".

As for layout of the photos, the width of the thumbnails is fixed whilst the
height is not. So a photo with big height and small width will be "bigger" than
a photo with a small height and big width.

###Pages

	- name: cv
	  display: CV
	  type: page
	  background: diabild.gif

The `name`-tag is used to identify the resource name of the page, ie it should
match a file in the "pages" folder, without any extension. "cv" for instance,
will match "/pages/cv.md".

The `display`-tag is used to display a link text on top of the card.

The `background`-tag is used to identify a image used as background. The image
should be placed in the "/imgs/thumbs" folder.

The page file itself can leverage markdown syntax for formatting. For reference,
checkout this [guide](http://daringfireball.net/projects/markdown/syntax).


Merge upstream changes

`git merge upstream/gh-pages`
