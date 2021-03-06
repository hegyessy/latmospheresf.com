<?php
return function($site, $pages, $page) {

  $time = date('l jS \of F Y h:i:s A');

	$data = array(
	  'name'  => get('name'),
	  'email' => get('email'),
	  'phone'  => get('phone'),
	  'message' => get('message'),
	  'time' => $time
	);

	$rules = array(
	  'name'  => array('required'),
	  'email' => array('required')
	);

	$messages = array(
	  'name'  => 'Please enter a valid name',
	  'email' => 'Please enter a valid email address',
	  'phone'  => 'Please enter a phone number'
	);

	if($invalid = invalid($data, $rules, $messages)) {
	  echo "failure";
	} else {
	  
	  $body  = snippet('contactmail', $data, true);	
    $email = Email(array(
    	'to'      => 'ingrid.ternynck@gmail.com',
    	'from'    => 'ingrid@latmposhperesf.com',
    	'subject' => 'New contact request',
    	'replyTo' => $data['email'],
    	'body'    => $body
    ));

    if($email->send()){
	    echo 'success';
		} else {
	    echo 'email failed';
		}
	}
};
