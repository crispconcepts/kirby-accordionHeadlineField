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

				$('.accordion > .field-with-headline > h2').click(function() {
					$this = $(this);
					$target =  $this.parent().next();

					if(!$target.hasClass('active')){
					 allPanels.removeClass('active').slideUp();
					 $target.addClass('active').slideDown();
					 $(this).addClass('active');
					} else {
						$target.removeClass('active').slideUp();
					 	$this.removeClass('active');
					}
					return false;
				});


            });
        }

    });
} (jQuery));
