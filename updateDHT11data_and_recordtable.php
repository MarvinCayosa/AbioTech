<?php
  require 'database.php';
  
  //---------------------------------------- Condition to check that POST value is not empty.
  if (!empty($_POST)) {
    //........................................ Keep track POST values
    $id = $_POST['id'];
    $temperature = $_POST['temperature'];
    $humidity = $_POST['humidity'];
    $CO2 = $_POST['CO2'];
    $NH3 = $_POST['NH3']; 
    $CH2O = $_POST['CH2O'];
    $water_level = $_POST['water_level'];  
    $status_read_sensor_dht11 = $_POST['status_read_sensor_dht11'];
    $led_01 = $_POST['led_01'];
    $led_02 = $_POST['led_02'];
 // New variable for CO2 level
    //........................................
    
    //........................................ Get the time and date.
    date_default_timezone_set("Asia/Jakarta"); // Look here for your timezone : https://www.php.net/manual/en/timezones.php
    $tm = date("H:i:s");
    $dt = date("Y-m-d");
    //........................................
    
    //........................................ Updating the data in the table.
    $pdo = Database::connect();
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Update the table with new data, including co2_level
    $sql = "UPDATE esp32_table_dht11_leds_update 
    SET temperature = ?, 
        humidity = ?, 
        CO2 = ?, 
        NH3 = ?, 
        CH2O = ?, 
        water_level = ?,
        status_read_sensor_dht11 = ?, 
        time = ?, 
        date = ? 
        WHERE id = ?";
        $q = $pdo->prepare($sql);
        $q->execute(array($temperature, $humidity, $CO2, $NH3, $CH2O, $water_level, $status_read_sensor_dht11, $tm, $dt, $id));

    Database::disconnect();
    //........................................ 
    
    //........................................ Entering data into a table.
    $id_key;
    $board = $_POST['id'];
    $found_empty = false;
    
    $pdo = Database::connect();
    
    //:::::::: Process to check if "id" is already in use.
    while ($found_empty == false) {
      $id_key = generate_string_id(10);
      // Insert into record table, including co2_level
      $sql = 'SELECT * FROM esp32_table_dht11_leds_record WHERE id="' . $id_key . '"';
      $q = $pdo->prepare($sql);
      $q->execute();
      
      if (!$data = $q->fetch()) {
        $found_empty = true;
      }
    }
    //::::::::
    
    //:::::::: The process of entering data into a table.
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO esp32_table_dht11_leds_record 
    (id, board, temperature, humidity, CO2, NH3, CH2O, water_level, status_read_sensor_dht11, LED_01, LED_02, time, date) 
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $q = $pdo->prepare($sql);
    $q->execute(array($id_key, $board, $temperature, $humidity, $CO2, $NH3, $CH2O, $water_level, $status_read_sensor_dht11, $led_01, $led_02, $tm, $dt));

    //::::::::
    
    Database::disconnect();
    //........................................ 
  }
  //---------------------------------------- 
  
  //---------------------------------------- Function to create "id" based on numbers and characters.
  function generate_string_id($strength = 16) {
    $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $input_length = strlen($permitted_chars);
    $random_string = '';
    for($i = 0; $i < $strength; $i++) {
      $random_character = $permitted_chars[mt_rand(0, $input_length - 1)];
      $random_string .= $random_character;
    }
    return $random_string;
  }
  //---------------------------------------- 
?>
