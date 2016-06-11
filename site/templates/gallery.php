<?php snippet('header') ?>
	<section id="header" class="gallery">
		<nav>
			<h1><a href="/" title="home">L'Atmosphere</a></h1>
			<div><a href="/" title="close" class="link">Close</a></div>
		</nav>

	<img id="next" class="button right-controll controll" src="assets/images/ic_arrow_right.svg" />
	<img id="prev" class="button left-controll controll" src="assets/images/ic_arrow_left.svg" />

	<div id="slideshow">
		<?php foreach($page->images()->flip() as $key => $image): ?>
			<div
				id="<?php echo $key ?>"
				class="slide hide <?php echo $image->orientation(); ?>"
				style="background-image:url(<?php echo $image->url() ?>);">
			</div>

		<?php endforeach ?>
	</div>
	</section>
<?php echo js('assets/js/index.js') ?>
<script>
	APP.slideshow.init();
	APP.router.gallery();
</script>
</body>
</html>
