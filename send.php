<?
mb_internal_encoding("UTF-8");

$botToken = "173479491:AAFr7YjQw1qxTVkjuqG0itjBHJCEFAjG36o";
$website = "https://api.telegram.org/bot".$botToken;

$chatId = 21439948;


//получаем поля
$service = htmlspecialchars($_POST['service']);
$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST['phone']);
$message = htmlspecialchars($_POST['message']);


//отправляем поля
file_get_contents($website."/sendmessage?chat_id=".$chatId."&text=".$service. ". ".$name.". ".$phone." ".$message);

?>