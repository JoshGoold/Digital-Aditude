<?php
$to = "your@email.com";
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$message = $_POST['message'];

$message = "First name: $first_name\nLast name: $last_name\nEmail: $email\nMessage: $message";
$subject = "=?utf-8?B?".base64_encode("message from the site")."?=";

// Replace with your SMTP server details
$smtp_server = "your_smtp_server";
$smtp_port = 587; // Usually 587 for TLS or 465 for SSL
$smtp_username = "your_smtp_username";
$smtp_password = "your_smtp_password";

$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/plain; charset=utf-8\r\n";

// Use the mail function with additional parameters
$success = mail($to, $subject, $message, $headers, 
  "-smtp=$smtp_server;port=$smtp_port;ssl;auth-login;username=$smtp_username;password=$smtp_password");

if($success) {
  echo "Good";
} else {
  echo "Error: " . error_get_last()['message']; // Display error message if available
}

?>