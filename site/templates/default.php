<div id="gallery">

	<?php foreach($pages->gallery->images()->limit(10) as $key => $image): ?>
		<div id="<?php echo $key ?>" class="slide" style="background-image:url(<?php echo $image->url() ?>);"></div>
	<?php endforeach ?>
	<div class="button_next">Next</div>
	<div class="button_prev">Prev</div>
	<div class="button_close">Close</div>
</div>