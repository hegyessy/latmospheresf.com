<form role="form" method="post">

	<?php if($alert): ?>
		<div class="alert">
		  <ul>
			<?php foreach($alert as $message): ?>
			<li><?php echo html($message) ?></li>
			<?php endforeach ?>
		  </ul>
		</div>
	<?php endif ?>
		
	<label for="name">Name</label><br/>
	<input type="text" id="name" name="name" placeholder="Enter your name" required></br>
	<label for="email">Email address</label><br/>
	<input type="email" id="email" name="email" placeholder="Enter email" required></br>
	<label for="phone">Phone number (optional)</label></br>
	<input type="number" id="phone" name="phone" placeholder="1-408-555-5555"></br>
	<input type="submit" name="submit" value="Submit">
</form>