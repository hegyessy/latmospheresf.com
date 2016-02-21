<div id="gallery">
	<h2>Gallery</h2>
	<div id="gallery-images">
	 	<?php foreach($pages->gallery->images()->limit(10) as $image): ?>
	 		<?php echo thumb($image, array('width' => 200, 'crop' => true)); ?>
	 	<?php endforeach ?>
	 </div>
</div>