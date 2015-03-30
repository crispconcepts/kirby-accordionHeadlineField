(function ($) {
    $(document).ready(function() {

        if (app && typeof app == 'object') {
            $(app.main).on('view:load', function () {


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
				});


            });
        }

    });
} (jQuery));
