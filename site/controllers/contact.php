<?php
return function($site, $pages, $page) {
	
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
	  $body  = snippet('contactmail', $data, true);
	  $email = Email(array(
		'to'      => 'hegyessy@mac.com',
		'from'    => 'jason@hegyessy.com',
		'subject' => 'New contact request',
		'replyTo' => $data['email'],
		'body'    => $body
	  ));

	  if($email->send()) {
		  echo "200";
	  } else {
		  echo "500";
	  }
	}
};