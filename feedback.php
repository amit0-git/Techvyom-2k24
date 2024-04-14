<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submit Form to Gmail</title>
</head>
<body>
    <h2>Submit Form to Gmail</h2>
    <form action="submit.php" method="post">
        <label for="email">Your Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        <label for="subject">Subject:</label><br>
        <input type="text" id="subject" name="subject" required><br><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
        <input type="submit" value="Submit" name="send">
    </form>
</body>
</html>
