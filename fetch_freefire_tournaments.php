<?php
include './db_connection.php'; // Adjust path as per your actual file structure

$sql = "SELECT id, title, organizer, prize_pool, entry_fee, link, featured, image FROM free_fire ORDER BY id DESC"; // SQL query for Free Fire tournaments
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $tournaments = array();
    while($row = $result->fetch_assoc()) {
        $row['image'] = $row['image'];

        $tournaments[] = $row;
    }
    echo json_encode($tournaments);
} else {
    echo json_encode([]);
}

$conn->close();
?>
