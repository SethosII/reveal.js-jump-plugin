'use strict';

var jumpToSlide = "";

function keyHandle(event) {
	var isSpecialKey = event.shiftKey || event.ctrlKey || event.altKey || event.metaKey;
	var isNumberKey = event.which >= 48 && event.which <= 57;
	var isDashKey = event.which === 45;

	if (isNumberKey || isDashKey && !isSpecialKey) {
		jumpToSlide += String.fromCharCode(event.charCode);
	} else {
		var isEnterKey = event.which === 13;
		var isJumpToSlideEmpty = jumpToSlide === "";

		if (isEnterKey && !isJumpToSlideEmpty) {
			// horizontal and vertical slides are separated by a dash
			jumpToSlide = jumpToSlide.split("-");
			jumpToSlide[0] = isNaN(jumpToSlide[0]) ? 0 : parseInt(jumpToSlide[0]) - 1;
			jumpToSlide[1] = isNaN(jumpToSlide[1]) ? 0 : parseInt(jumpToSlide[1]) - 1;

			if ((typeof Reveal.getConfig().slideNumber === "string") ? Reveal.getConfig().slideNumber.contains('c') : false) {
				jumpToSlide[1] = 0;

				// The number of past slides
				var pastCount = 0;

				// step through all slides and count the past ones
				var horizontalSlides = Array.prototype.slice.call(document.querySelector('.reveal').querySelectorAll('.slides>section'));
				var breaked = false;
				var horizontalIndex = 0;
				var verticalIndex = 0;
				for (horizontalIndex = 0; horizontalIndex < horizontalSlides.length; horizontalIndex++, pastCount++) {
					var horizontalSlide = horizontalSlides[horizontalIndex];
					var verticalSlides = Array.prototype.slice.call(horizontalSlide.querySelectorAll('section'));

					for (verticalIndex = 0; verticalIndex < verticalSlides.length - 1; verticalIndex++, pastCount++) {
						// stop as soon as we arrive at the specified slide
						if (pastCount == jumpToSlide[0]) {
							breaked = true;
							break;
						}
					}

					// stop as soon as we arrive at the specified slide
					if (pastCount == jumpToSlide[0] || breaked) {
						jumpToSlide[0] = horizontalIndex;
						jumpToSlide[1] = verticalIndex;
						break;
					}
				}
			}

			// jump to the specified slide
			Reveal.slide(jumpToSlide[0], jumpToSlide[1]);

			// reset jumpToSlide variable
			jumpToSlide = "";
		}
	}
}

document.onkeypress = keyHandle;
