<?php snippet('header') ?>
	<section id="header" class="gallery">
		<nav>
			<h1><a href="/" title="home">L'Atmosphere</a></h1>
			<div><a href="/" title="close" class="link"><img src="assets/images/ic_clear.svg" height="32px" alt="close the gallery" /></a></div>
		</nav>

	<img id="next" class="button right-controll controll" src="assets/images/ic_arrow_right.svg" />
	<img id="prev" class="button left-controll controll" src="assets/images/ic_arrow_left.svg" />

	<div id="slideshow">
		<?php foreach($page->images()->sortBy('sort', 'asc') as $key => $image): ?>
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
