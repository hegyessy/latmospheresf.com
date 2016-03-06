<?php snippet('header') ?>

	<header>
		<h1><a href="/" title="about">L'atmosphere</a></h1>
		<nav>
			<a href="#about" title="about">About</a>
			<a href="gallery" title="gallery">Gallery</a>
			<a href="#contact" title="contact">Contact</a>
		</nav>
		<?php foreach($page->images()->limit(3) as $image): ?>
	 		<div class="slide hide" style="background-image:url(<?php echo $image->url();?>)"></div>
	 	<?php endforeach ?>
	</header>

	<h2>About</h2>
	<div id="about">
		<?php echo kirbytext($page->about()) ?>
	</div>

<?php snippet('home-gallery') ?>
<?php snippet('footer') ?>