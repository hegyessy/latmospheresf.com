<?php snippet('header') ?>
<article id="slideshow">
 	<?php foreach($pages->gallery->images() as $image): ?>
 		<?php echo $image; ?>
 	<?php endforeach ?>
</article>