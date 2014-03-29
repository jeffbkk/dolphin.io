$(function() {
	var toggle = $('#toggle'),
	      sidebar = $('#sidebar'),
        contentListing =$('.contents-listing'),
        contentList =$('.contents-items'),
	      filters = $('.filters'),
	      wrapper = $('#wrapper'),
	      main = $('#main');

       filters.on('click touch', function(){
           dt = $(this).attr('data-type');
            if ( dt =='all') {
               return false;
           };
           var $filter = contentList.filter(function(){
               return $(this).attr('data-type') == dt;
           });

           contentList.addClass('hidden');
           contentList.attr("[data-type='"+dt+"']").removeClass('hidden').addClass('fadeinUp');
          
           // contentList.addClass('fadeinUp');
          return false;
       });





       // Login / Forgot passowrd form switching
       // Caching element

       var $forms = $('#login-form-container form'),
           $currentForm = $('form.activated'),
           $linkForm = $forms.find('.linkform');

           $forms.each(function(){
              var $theForm = $(this);
              if (!$theForm.hasClass('activated')) 
                  $theForm.hide();
           });
           
           $linkForm.on('click touch', function(){
                 
             var $link = $(this),
                 target = $link.attr('rel');

                      // $currentForm.fadeOut(250,function(){
                      // $currentForm.removeClass('activated');
                      // $currentForm = $('form.'+target);

                      // $currentForm.addClass('activated');
                      // $currentForm.fadeIn(250);


                      $currentForm.removeClass('fadeIn').addClass('fadeOut').delay(400).queue(function(){
                      $currentForm.removeClass('activated').removeClass('fadeOut').dequeue();

                      $currentForm = $('form.'+target);

                      $currentForm.addClass('activated');
                      $currentForm.addClass('fadeIn');
                      
                 });
           
             return false;
           });


	      
});