<?php

// Database connection parameters
$servername = "localhost"; // Hostname (e.g., localhost)
$username = "u711499391_sujal"; // Database username
$password = "Sujal@tourneypedia7"; // Database password
$database = "u711499391_tourneypedia"; // Database name

// Attempt to establish a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
}


?>
