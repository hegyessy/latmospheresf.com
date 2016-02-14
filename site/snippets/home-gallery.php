<div id="gallery">
	<?php foreach($page->images() as $image): ?>
		<?php echo thumb($image, array('width' => 256, 'crop' => true)); ?>
	 <?php endforeach ?>
</div>