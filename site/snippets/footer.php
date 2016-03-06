<footer id="contact">
	<h2>Contact</h2>
	<form role="form">
		<label for="contact_name">Name</label><br/>
		<input type="text" id="contact_name" placeholder="Enter your name"></br>
		<label for="contact_email">Email address</label><br/>
		<input type="email" id="contact_email" placeholder="Enter email"></br>
		<label for="contact_phone">Phone number (optional)</label></br>
		<input type="number" id="contact_phone" placeholder="1-408-555-5555"></br>
	</form>
</footer>
<?php echo js('assets/js/index.js') ?>
<script>
	CONFIG._type = "auto";
	APP.slideshow.init();
</script>
</body>
</html>