<div id="gallery">
	<h2>Gallery</h2>
	<div id="gallery-images">
		<?php foreach($page->images() as $image): ?>
			<?php echo thumb($image, array('width' => 256, 'crop' => true)); ?>
	 	<?php endforeach ?>
	 </div>
</div>