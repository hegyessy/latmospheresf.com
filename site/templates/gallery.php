<?php snippet('header') ?>
	<header id="gallery-header">
		<nav>
			<h1><a href="/" title="home" class="center">L'atmosphere</a><!-- <a href="/" title="close">
				<img src="/assets/images/ic_clear.svg" alt="close gallery"></a> --></h1>
		</nav>
	</header>
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
<?php echo js('assets/js/index.js') ?>
<script>
	APP.slideshow.init();
	APP.router.gallery();
</script>
</body>
</html>