document.querySelector('.nav-btn').onclick = function(e) {
   e.preventDefault();
   this.classList.toggle('is-on');
};

$(document).ready(function() {
	$(".fancybox").fancybox();
});
