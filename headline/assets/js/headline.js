(function ($) {
    $(document).ready(function() {

		$('.field-with-headline').each(function(){
			$(this).nextUntil(".field-with-headline").andSelf().wrapAll('<div class="accordion" />');
		});
		$('.accordion .field-with-headline').each(function(){
			$(this).nextUntil(".field-with-headline").wrapAll('<div class="accordion-panel" />');
		});

		var allPanels = $('.accordion > .accordion-panel').hide();
		var allTitles = $('.accordion > .field-with-headline > h2');


		$('.accordion > .field-with-headline > h2').click(function() {
			$this = $(this);
			$target =  $this.parent().next();

			if($target.hasClass('active')){
			 	$('h2.active').removeClass('active');
				$target.removeClass('active').slideUp();
			} else {
			 	allPanels.removeClass('active').slideUp();
			 	allTitles.removeClass('active');
				$this.addClass('active');
				$target.addClass('active').slideDown();
			}
		}).first().addClass('active').parent().next().addClass('active').slideDown(0);

    });
} (jQuery));
