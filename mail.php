<!-- <?php
$to = "Sve-Mac@yandex.ru"; // емайл получателя данных из формы // info@domain
$them = "You have received a letter from a site user"; // тема полученного емайла
$message = "Name User: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
$message .= "Phone: ".$_POST['phone']."<br>"; //полученное из формы name=phone
//$message .= "Сообщение: ".$_POST['message']."<br>"; //полученное из формы name=message
$headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $them, $message, $headers); //отправляет получателю на емайл значения переменных
?> -->
<?php
$fio = $_POST['name'];
$email = $_POST['email'];
$phone= $_POST['phone'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$fio = urldecode($fio);
$email = urldecode($email);
$phone = urldecode($phone);
$fio = trim($fio);
$email = trim($email);
$phone = trim($phone);
echo $fio;
echo "<br>";
echo $email;
mail("Sve-Mac@yandex.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n");
if (mail("example@mail.ru", "Заказ с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
ini_set('display_errors','On');
error_reporting('E_ALL');
?> 