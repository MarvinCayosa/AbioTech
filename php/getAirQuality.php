<?php
include '../database.php';

try {
    // Connect to the database
    $pdo = Database::connect();
    $today = date("Y-m-d");

    // Query to fetch today's CO2, NH3, and CH2O data
    $sql = 'SELECT time, CO2, NH3, CH2O FROM esp32_table_dht11_leds_record WHERE date = ? ORDER BY time';
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$today]);

    // Fetch results
    $data = [];
    foreach ($stmt as $row) {
        $data[] = [
            'time' => $row['time'],
            'CO2' => (float) $row['CO2'],
            'NH3' => (float) $row['NH3'],
            'CH2O' => (float) $row['CH2O']
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
