<?php
include './db_connection.php';

$sql = "SELECT id, title, organizer, prize_pool, entry_fee, link, featured, location, image FROM tournament ORDER BY id DESC"; // Include the image column in the query
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $tournaments = array();
    while($row = $result->fetch_assoc()) {
        // Assuming the image column contains the URL of the image
        // You might need to adjust this depending on how your image URLs are stored in the database
        $row['image'] = $row['image']; // Add image_url key to the row array

        $tournaments[] = $row;
    }
    echo json_encode($tournaments);
} else {
    echo json_encode([]);
}

$conn->close();
?>
