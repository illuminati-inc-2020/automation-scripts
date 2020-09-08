// Disable CSR
// Replace hashtag
// Run

javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {
        jQuery.noConflict();
        console.log('jQuery injected');
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js');

var btnUnlike = '.plqBR,.coreSpriteHeartFull,.glyphsSpriteHeart__filled__24__red_5';
var btnLike = '.ptsdu,.coreSpriteHeartOpen,.glyphsSpriteHeart__outline__24__grey_9';
var btnNext = '.HBoOv,.coreSpriteRightPaginationArrow';
var btnFirst = '.eLAPa';

var count = 0;

function like() {
	if(count >= 2000) {
		window.location.href = 'https://www.instagram.com/'; //stop
	}

	setTimeout(function() {
		jQuery(btnNext).get(0).click(); //open next	
		setTimeout(function() {
		    if(Math.random(0,1) > 0.31) { //try to like
		    	if(jQuery(btnUnlike).length > 0) {
		    		console.log("skipped, already liked");
		    		like();
		    	} else if(jQuery(btnLike).length > 0) { //like
				    jQuery(btnLike).click()
				    console.log(++count + " liked");
		    		if(Math.random(0,1) > 0.96) {
						var time = Math.random(0,1) * 60000 * 15;
						console.log("waiting " + time/60000 + " minutes");
						setTimeout(like, time); //wait and like
					} else {
						like();
					}
		    	} else { //error
		    		console.log("ERROR!");
		    		setTimeout(function() {
			    		jQuery('.ckWGn').get(0).click();
					    jQuery('.coreSpriteDesktopNavProfile,.glyphsSpriteUser__outline__24__grey_9').get(0).click();
					    setTimeout(function() {
					        jQuery(btnFirst).get(1).click();
					        setTimeout(function() {
					            jQuery('a:contains(#landscapepainting)').get(0).click();
								setTimeout(function() {
					        	    jQuery(btnFirst).get(1).click();
					        	    setTimeout(like, 2000);
					        	}, 2000);
					        }, 2000);
					    }, 2000);
					}, 5000);
		    	}
			} else { //skip
				console.log("skipped");
				like();
			}
		}, 2000);
	}, Math.random(0,1)*4000);
}

setTimeout(function() {
	jQuery(btnFirst).get(0).click(); //open first
}, 5000)
setTimeout(like, 10000);
