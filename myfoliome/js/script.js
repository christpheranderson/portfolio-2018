$(document).ready(function(){
	$('a').click(function(){
		//alert("i am click");
		var selected = $(this);
		$('a').removeClass('.active');
		$(selected).addClass('.active');
	});

	var $a = $('.a');
	var $b = $('.b');
	var $c = $('.c');
	var $d = $('.d');
	var $home = $('.home');
	var $about = $('.about');
	var $gallery = $('.gallery');
	var $contact = $('.contact');

    
	$a.click(function(){
		$home.fadeIn();
		$about.fadeOut();
		$gallery.fadeOut();
		$contact.fadeOut();
   });
	$b.click(function(){
		$about.fadeIn();
		$home.fadeOut();
		$gallery.fadeOut();
		$contact.fadeOut();
	});
	$c.click(function(){
		$gallery.fadeIn();
		$home.fadeOut();
		$about.fadeOut();
		$contact.fadeOut();
	});
	
	$d.click(function(){
		$contact.fadeIn();
        $gallery.fadeOut();
		$home.fadeOut();
		$about.fadeOut();
	});

});




