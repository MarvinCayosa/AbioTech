<?php
include '../database.php';

try {
    // Connect to the database
    $pdo = Database::connect();
    $today = date("Y-m-d");

    // Query to fetch today's temperature data
    $sql = 'SELECT time, humidity FROM esp32_table_dht11_leds_record WHERE date = ? ORDER BY time';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$today]);

    // Fetch results
    $data = [];
    foreach ($stmt as $row) {
        $data[] = [
            'time' => $row['time'],
            'humidity' => (float) $row['humidity']
        ];
    }

    // Output data in JSON format
    header('Content-Type: application/json');
    echo json_encode($data);
} catch (Exception $e) {
    // Handle errors
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch data']);
} finally {
    Database::disconnect();
}
?>
