<form class="form" role="form" method="post">

	<?php if($alert): ?>
		<div class="alert">
		  <ul>
			<?php foreach($alert as $message): ?>
			<li><?php echo html($message) ?></li>
			<?php endforeach ?>
		  </ul>
		</div>
	<?php endif ?>
		

	<input type="text" class="contact-input" id="name" name="name" placeholder="Name (required)" required>
	<input type="email" class="contact-input" id="email" name="email" placeholder="Email (required)" required>
	<input type="number" class="contact-input" id="phone" name="phone" placeholder="Phone number (optional)">
	<input type="submit" class="contact-button" name="submit" value="Submit">
</form>