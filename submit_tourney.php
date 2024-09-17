<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect and sanitize form data
    $title = htmlspecialchars($_POST['title']);
    $organizer = htmlspecialchars($_POST['organizer']);
    $prizepool = htmlspecialchars($_POST['prizepool']);
    $entry_fee = htmlspecialchars($_POST['entry_fee']);
    $registration_link = htmlspecialchars($_POST['registration_link']);

    // Prepare the email content
    $to = 'submittourney@tourneypedia.in';
    $subject = 'New Tournament Submission';
    $message = "
    <html>
    <head>
    <title>New Tournament Submission</title>
    </head>
    <body>
    <h1>Received Tournament Data</h1>
    <p><strong>Tournament Title:</strong> $title</p>
    <p><strong>Organizer:</strong> $organizer</p>
    <p><strong>Prize Pool:</strong> $prizepool</p>
    <p><strong>Entry Fee:</strong> $entry_fee</p>
    <p><strong>Registration Link:</strong> $registration_link</p>
    </body>
    </html>
    ";

    // Set the content-type header for HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= 'From: webmaster@tourneypedia.in' . "\r\n";

    // Send the email
   if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true, "message" => "Email sent successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to send email."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}

?>
