<?
mb_internal_encoding("UTF-8");

$botToken = "173479491:AAFr7YjQw1qxTVkjuqG0itjBHJCEFAjG36o";
$website = "https://api.telegram.org/bot".$botToken;

$chatId = 21439948;

$service = $_GET['service'];
$name = $_GET['name'];
$phone = $GET['phone'];
$message = $GET['message'];

$fmessage = "'Тип задачи: ' + .$service. '. Имя обратившегося: ' .$name.  '. Номер телефона: ' .$phone. '. Текст сообщения: ' + .$message.";

//$fmessage = utf8_encode($fmessage);
echo "$fmessage"; 



//$messageToSend=$name+$phone+$service+$message;
//$messageToSend = $_POST['myMessage'];
//$chatId = $updateArray["result"][0]["message"]["chat"]["id"];
//print_r($chatId);

//print_r($message);
//echo $message;

                    
//Текст нащего сообщения можно использовать HTML теги
file_get_contents($website."/sendmessage?chat_id=".$chatId."&text=".$service);

?>