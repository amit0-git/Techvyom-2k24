<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your-email@gmail.com"; // Your Gmail address
    $subject = "Message from website";
    $email = $_POST["email"];
    $message = $_POST["message"];
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
