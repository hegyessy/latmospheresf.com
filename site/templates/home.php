<?php snippet('header') ?>
	<header>
		<?php snippet('nav') ?>
		<?php foreach($page->images()->limit(3) as $image): ?>
	 		<div class="slide hide" style="background-image:url(<?php echo $image->url();?>)"></div>
	 	<?php endforeach ?>
	</header>


<?php snippet('about') ?>
<?php snippet('home-gallery') ?>
<?php snippet('footer') ?>
