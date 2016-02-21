<?

$botToken = "173479491:AAFr7YjQw1qxTVkjuqG0itjBHJCEFAjG36o";
$website = "https://api.telegram.org/bot".$botToken;

$chatId = 21439948;

$name=$_POST['name'];
$phone=$_POST['phone'];
$service=$_POST['service'];
$message=$_POST['message'];

//$messageToSend=$name+$phone+$service+$message;
//$messageToSend = $_POST['myMessage'];
//$chatId = $updateArray["result"][0]["message"]["chat"]["id"];
//print_r($chatId);



                    
                //Текст нащего сообщения можно использовать HTML теги
file_get_contents($website."/sendmessage?chat_id=".$chatId."&text=text");

?>