// UI things to do when the document runs
$(document).ready(function() {
	console.log('Document Loaded');
	loadShortcuts();
	validation();
	//loadLinks();
});

function loadShortcuts() {
	$(".shortcuts li").click(function() {
		$(".shortcuts li").each(function(i, obj) {
			$(".menu-left ." + this.dataset.name).hide();
		});
		$(".menu-left ." + this.dataset.name).show();
	});
}

function loadLinks() {
	$(".links a").contents().unwrap();
	$(".links li").click(function() {
		console.log(this);
	});
}

function validation() {
	$(
			'<div class="validation">' +
			'<a href="http://validator.w3.org/check?uri=' + encodeURI(document.URL) +
			'"><img src="http://www.w3.org/html/logo/badge/html5-badge-h-css3-semantics.png" width="165" height="64" alt="HTML5 Powered" title="HTML5 Powered">' +
			'</a>' + 
			'<a href="http://jigsaw.w3.org/css-validator/validator?uri=' + encodeURI(document.URL) +
			'"><img src="http://www.w3.org/Icons/valid-css.png" alt="CSS2.1 Valid" title="CSS2.1 Valid">' + 
			'</a></div>'
	).insertAfter('.logout');
}