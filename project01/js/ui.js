// UI things to do when the document runs
$(document).ready(function() {
	console.log('Document Loaded');
	loadShortcuts();
	loadLinks();
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