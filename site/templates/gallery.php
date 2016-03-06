<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>L'atmosphere home decorating</title>
	<?php echo css('assets/css/reset.css') ?>
	<?php echo css('assets/css/site.css') ?>
</head>
<div id="next" class="button right-controll controll">Next</div>
<div id="prev" class="button left-controll controll">Prev</div>
<div id="slideshow">
	<?php foreach($page->images()->flip() as $key => $image): ?>
		<div id="<?php echo $key ?>" class="slide hide" style="background-image:url(<?php echo $image->url() ?>);"></div>
	<?php endforeach ?>

</div>
<?php echo js('assets/js/index.js') ?>
<script>
	APP.slideshow.init();	
</script>
</body>
</html>