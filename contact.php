<?php

$myadress = "laurent.nunez.dev@gmail.com";
$name = $_POST['name'];
$email =  $_POST['email'];
$message = $_POST['message'];
$headers = 'From: '. $email . "\r\n" .
     'Reply-To:' . $email . "\r\n" .
     'X-Mailer: PHP/' . phpversion();

mail($myadress, $message, $headers)
or die ("Il y a eu un petit soucis, le mail n'a pas été envoyé :(");

echo "Le mail a bien été envoyé !"
          
?>