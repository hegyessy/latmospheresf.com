<?php
return function($site, $pages, $page) {
  $alert = null;
  if(get('submit')) {
	$data = array(
	  'name'  => get('name'),
	  'email' => get('email'),
	  'phone'  => get('phone')
	);
	$rules = array(
	  'name'  => array('required'),
	  'email' => array('required'),
	  'phone'  => array('required')
	);
	$messages = array(
	  'name'  => 'Please enter a valid name',
	  'email' => 'Please enter a valid email address',
	  'phone'  => 'Please enter a text between 3 and 3000 characters'
	);

	if($invalid = invalid($data, $rules, $messages)) {
	  $alert = $invalid;

	} else {
	  // create the body from a simple snippet
	  $body  = snippet('contactmail', $data, true);
	  // build the email
	  $email = Email(array(
		'to'      => 'hegyessy@mac.com',
		'from'    => 'jason@hegyessy.com',
		'subject' => 'New contact request',
		'replyTo' => $data['email'],
		'body'    => $body
	  ));
	  // try to send it and redirect to the
	  // thank you page if it worked
	  if($email->send()) {
		go('gallery/');
	  // add the error to the alert list if it failed
	  } else {
		$alert = array($email->error());
	  }
	}
  }
  return compact('alert');
};