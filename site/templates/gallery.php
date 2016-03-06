<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>L'atmosphere home decorating</title>
	<?php echo css('assets/css/reset.css') ?>
	<style>
	
	* {	margin:0; padding:0; }
	
	body {
		font-family: "ATC Overlook", "Futura", Sans-serif;
	}
	
	#slideshow {
	 	position: absolute;
		top:0;
		left:0;
		bottom:0;
		right:0;
		background-color: #222;
	}
	
	.button {
		position: absolute;
		top: 50vh;
		z-index: 2;
		color: white;
		width: 5rem;
	}
	
	.left-controll {
		left: 2rem;
	}
	
	.right-controll {
		right: 2rem;
		text-align: right;
	}
	
	.show {
		opacity: 1;
	}
	
	.hide {
		opacity: 0;
	}
	
	.slide {
	 	position: absolute;
		top:0;
		left:0;
		bottom:0;
		right:0;
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		height: 100vh;
		transition: opacity 2s;
	}
	</style>

	<?php // echo css('assets/css/site.css') ?>
</head>
<div id="slideshow">
	<?php foreach($page->images()->flip() as $key => $image): ?>
		<div id="<?php echo $key ?>" class="slide hide" style="background-image:url(<?php echo $image->url() ?>);"></div>
	<?php endforeach ?>
	<div class="button button_next right-controll">Next</div>
	<div class="button button_prev left-controll">Prev</div>
</div>
<?php echo js('assets/js/index.js') ?>
<script>
	APP.slideshow.init();	
</script>
</body>
</html>