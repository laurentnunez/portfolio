<?php

$myadress = "laurent.nunez.dev@gmail.com";
$name = $_POST['name'];
$email =  $_POST['email'];
$message = $_POST['message'];


$themail = mail($myadress, $message, "From: ". $name . "depuis le portfolio" . "/r/n" . "Reply-to:" . $email)
or die ("Il y a eu un petit soucis, le mail n'a pas été envoyé :(");

if ($themail) {
echo "<p>Le mail a bien été envoyé !</p>";
}

?>