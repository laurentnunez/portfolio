<?php

$to = "laurent.nunez.dev@gmail.com";
$name = $_POST['name'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$email =  $_POST['email'];
$headers = 'From:' . $email . "\r\n" . 'Reply-to: ' . $email . "\r\n" . 'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, );

?>