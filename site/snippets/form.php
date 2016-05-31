<form class="form" role="form">

	<div class="response">
	</div>

	<input type="text" class="form-element contact-input" id="name" name="name" placeholder="Name (required)" required>
	<input type="email" class="form-element contact-input" id="email" name="email" placeholder="Email (required)" required>
	<input type="tel" onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 32 || event.charCode 45" class="form-element contact-input" id="phone" name="phone" placeholder="Phone number (optional)">
	<textarea name="message" class="form-element contact-input" placeholder="Message (optional)"></textarea>
	<input type="submit" class="form-element contact-button" name="submit">

</form>
