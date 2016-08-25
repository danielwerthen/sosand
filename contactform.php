<?php

/* subject and email variables. */

	$emailsubject = 'Mail from Sonjasandstrom.com';
	$webmaster = 'sandstrom.sonja@gmail.com';
	
/* gathering informaion*/
$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];


$body = <<<EOD
<br><hr><br>

Name: $name <br>
Email: $email <br>

Message: $comment <br>
EOD;

$headers = "Form: $email\r\n";
$headers .= "Content-type: text/html\r\n";
$success = mail($webmaster, $emailsubject, $body, $headers);

/* Results rendered */

	$result = <<<EOD
<html>
<head>
</head>

<body>
Thank you for your message! We will be in contact with you as soon as possible.
<br>
<a href="index.html"> Return to the site

</a> 
</body>
</html>
EOD;
echo "$result";
?>