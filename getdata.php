<?php
  include 'database.php';
  
  //---------------------------------------- Condition to check that POST value is not empty.
  if (!empty($_POST)) {
    // keep track post values
    $id = $_POST['id'];
    
    $myObj = (object)array();
    
    //........................................ 
    $pdo = Database::connect();
    // Query to fetch data from the table, filtering by the provided ID
    $sql = 'SELECT * FROM esp32_table_dht11_leds_update WHERE id="' . $id . '"';
    $stmt = $pdo->query($sql);
    
    // Check if data is found
    if ($stmt && $stmt->rowCount() > 0) {
      // Data found, process it
      $row = $stmt->fetch();
      $date = date_create($row['date']);
      $dateFormat = date_format($date, "d-m-Y");

      // Check if the data is recent (within the last 10 minutes)
      $currentTime = new DateTime();
      $dataTime = new DateTime($row['date']);
      $interval = $currentTime->diff($dataTime);
      
      // If the difference is greater than 10 minutes, mark it as offline
      if ($interval->i > 10) {
        $myObj->status = "offline";  // Last update was too old
      } else {
        $myObj->status = "online";  // Data is recent, device is online
      }
      
      // Process other data fields
      $myObj->id = $row['id'];
      $myObj->temperature = $row['temperature'];
      $myObj->humidity = $row['humidity'];
      $myObj->CO2 = $row['CO2'];
      $myObj->NH3 = $row['NH3'];
      $myObj->CH2O = $row['CH2O'];
      $myObj->water_level = $row['water_level'];
      $myObj->status_read_sensor_dht11 = $row['status_read_sensor_dht11'];
      $myObj->LED_01 = $row['LED_01'];
      $myObj->LED_02 = $row['LED_02'];
      $myObj->ls_time = $row['time'];
      $myObj->ls_date = $dateFormat;
      
      // Send back data in JSON format
      echo json_encode($myObj);
    } else {
      // No data found, indicate offline
      $myObj->status = "offline";  // No data available
      echo json_encode($myObj);  // Send the offline status as JSON
    }
    
    Database::disconnect();
    //........................................ 
  }
  //---------------------------------------- 
?>
