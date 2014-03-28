// UI things to do when the document runs
$(document).ready(function() {
	console.log('Document Loaded');
	loadShortcuts();
	
});

function loadShortcuts() {
	$(".shortcuts li").click(function() {
		$(".shortcuts li").each(function(i, obj) {
			$(".menu-left ." + this.dataset.name).hide();
		});
		$(".menu-left ." + this.dataset.name).show();
	});
}