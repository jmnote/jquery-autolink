(function($) {
	$.fn.autolink = function (target) {
		if (target == null) target = '_parent';
		return this.each( function(){
			var re = /((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g;
			$(this).html( $(this).html().replace(re, '<a href="$1" target="'+ target +'">$1</a> ') );
		});
	}
}(jQuery || $));
