document.querySelector(".temperature-value h1").textContent = "00";
document.querySelector(".humidity-value h5").textContent = "00";

// Function to fetch data from ESP32
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
        // Update temperature and humidity values with one decimal place
        document.querySelector(".temperature-value h1").textContent = parseFloat(myObj.temperature).toFixed(1);
        document.querySelector(".humidity-value h5").textContent = `${parseFloat(myObj.humidity).toFixed(1)}%`;

        // Update the CO2 level gauge with the fetched co2_level value
        if (myObj.co2_level !== undefined) {
          g2.refresh(myObj.co2_level); // Assuming co2_level is a number and is in the range of 0 to 2500 ppm
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