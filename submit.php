<?php




use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';





if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["send"])) {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $subject =  $_POST["subject"];

    $mail = new PHPMailer(true);

    try {
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth = true;                                   //Enable SMTP authentication
        $mail->Username = 'techvyom.srmscet@gmail.com';                     //SMTP username
        $mail->Password = 'mzxfpldtizckjiey';                         //SMTP password
        $mail->SMTPSecure = "ssl";
        //$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        //Recipients
        $mail->setFrom("techvyom.srmscet@gmail.com", "SRMS CET");

        $mail->addAddress("techvyom.srmscet@gmail.com", $name);


        //Attachments
        //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $_POST["subject"];

        $msg = <<<EOT
            <h1 style="color:blue;">Techvyom 2K24</h1>
            <p style="font-size:20px"><b>Name:</b> $name</p>
            <p style="font-size:20px"><b>Email:</b> $email</p>
            <p style="font-size:20px"><b>Subject:</b> $subject</p>
            <p style="font-size:20px"><b>Message:</b><span style="color:red;"> $message</span></p>
            EOT;


        $mail->Body = $msg;
        //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();

        echo '<script>alert("Send Successfully!"); window.location.href = "index.html";</script>';

    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

}