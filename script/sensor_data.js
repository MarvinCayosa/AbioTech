function fetchSensorData() {
  if (window.XMLHttpRequest) {
    var xmlhttp = new XMLHttpRequest();
  } else {
    var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const myObj = JSON.parse(this.responseText);

      if (myObj.id === "esp32_01") {
        // Update temperature and humidity
        document.querySelector(".temperature-value h1").textContent = parseFloat(myObj.temperature).toFixed(1);
        document.querySelector(".humidity-value h5").textContent = `${parseFloat(myObj.humidity).toFixed(1)}%`;

        // Update CO2 levels
        if (myObj.CO2 !== undefined) {
          g2.refresh(parseFloat(myObj.CO2).toFixed(2));
        }

        // Update ammonia (NH3) levels
        if (myObj.NH3 !== undefined) {
          g3.refresh(parseFloat(myObj.NH3));
        }

        // Update formaldehyde (CH2O) levels
        if (myObj.CH2O !== undefined) {
          g4.refresh(parseFloat(myObj.CH2O));
        }

        // Update water level (using actual value)
        if (myObj.water_level !== undefined) {
          updateWaterLevel(parseFloat(myObj.water_level)); // Use actual water level from the sensor
        }
      }
    }
  };

  xmlhttp.open("POST", "../getdata.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("id=esp32_01");
}

// Fetch data every 5 seconds
setInterval(fetchSensorData, 5000);

// Initial fetch
fetchSensorData();