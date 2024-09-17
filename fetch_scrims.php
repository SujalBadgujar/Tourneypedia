<?php
include './db_connection.php';

$sql = "SELECT * FROM scrims";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $scrims = array();
    while($row = $result->fetch_assoc()) {
        $scrims[] = $row;
    }
    echo json_encode($scrims);
} else {
    echo json_encode([]);
}

$conn->close();
?>
