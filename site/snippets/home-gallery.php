<h2><?php echo $pages->gallery->title() ?></h2>
<div id="gallery-images">
	 	<?php foreach($pages->gallery->images()->limit(10) as $key => $image): ?>
	 		<a href="gallery#<?php echo $key ?>" title=""><?php echo thumb($image, array('width' => 200, 'crop' => true)); ?></a>
	 	<?php endforeach ?>
</div>
