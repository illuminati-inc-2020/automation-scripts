Array.prototype.slice
	.call(document.getElementsByTagName("iframe"))
	.forEach(function(t) {
		t.remove()
	});
document.getElementById("bottom-banner-ads").remove();
