(function($) {
	$.fn.autolink = function() {
		return this.each( function(){
			$(this).html( $(this).html().replace(/((http|https|ftp):\/\/([^\s]+))/g,'<a href="$1" target="_blank">$1</a>') );
		});
	}
})(jQuery);