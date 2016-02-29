<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>L'atmosphere home decorating</title>
	<?php echo css('assets/css/reset.css') ?>
	<?php echo css('assets/css/site.css') ?>
	
	<script type="text/javascript">
		
		var HEADER = [
			<?php foreach($page->images() as $image): ?>
				"<?php echo $image->url() ?>",
			<?php endforeach ?>
		];
		
		var GALLERY = [
			<?php foreach($pages->gallery->images() as $image): ?>
				"<?php echo $image->url() ?>",
			<?php endforeach ?>
		];
	</script>
	
</head>
<body>
	<header>
		<h1><a href="/" title="about">L'atmosphere</a></h1>
		<nav>
			<a href="#about" title="about">About</a>
			<a href="#gallery" title="gallery">Gallery</a>
			<a href="#contact" title="contact">Contact</a>
		</nav>
		<?php foreach($page->images()->limit(3) as $image): ?>
	 		<span class="slide hide" style="background-image:url(<?php echo $image->url();?>)"></span>
	 	<?php endforeach ?>
	</header>