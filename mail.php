<?php
$to = 'info@' . $_SERVER[SERVER_NAME]; 
$them = 'You have received a letter from your site'; 
$fio = 'Name User: ' . $_POST['name'];
$email = 'E-mail: ' . $_POST['email'];
$phone= 'Phone: ' . $_POST['phone'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$fio = urldecode($fio);
$email = urldecode($email);
$phone = urldecode($phone);
$fio = trim($fio);
$email = trim($email);
$phone = trim($phone);
$headers = 'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $them, $fio, $email, $phone, $headers); 
?> 