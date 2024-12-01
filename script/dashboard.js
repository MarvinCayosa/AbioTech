AOS.init();



// Function to format date and time
function updateDateTime() {
    const now = new Date();
    
    // Get the current day, date, and time
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const day = days[now.getDay()];
    const date = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const time = `${hours % 12 || 12}:${minutes < 10 ? '0' + minutes : minutes}`;

    // Set the date and time in the HTML elements
    document.getElementById('day').textContent = day;
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
    document.getElementById('ampm').textContent = ampm;

    // Change the icon based on AM/PM
    // Get the current hour in 24-hour format
    const currentHour = new Date().getHours();

    // Get the icon element
    const icon = document.getElementById('timeIcon');

    // Update the icon based on the time
    if (currentHour >= 0 && currentHour < 18) {
        // 12:00 AM to 5:59 PM -> Sun icon
        icon.innerHTML = '<use xlink:href="icons.svg#icon-sun"></use>';
    } else {
        // 6:00 PM to 11:59 PM -> Moon icon
        icon.innerHTML = '<use xlink:href="icons.svg#icon-moon"></use>';
    }

}

// Call the function to update date and time initially
updateDateTime();

// Update date and time every minute
setInterval(updateDateTime, 60000);



// Online Status//
function updateStatus(isOnline) {
    const statusCircle = document.querySelector('.status-circle');
    const statusText = document.querySelector('.status-text');

    if (isOnline) {
        statusCircle.classList.add('online');
        statusText.textContent = 'Online';
    } else {
        statusCircle.classList.remove('online');
        statusText.textContent = 'Offline';
    }
}

// Example usage
updateStatus(true); // Set to online
// updateStatus(false); // Set to offline



//gauge//
document.addEventListener("DOMContentLoaded", function (event) {

    var g1 = new JustGage({
      id: "g1",
      value: getRandomFloat(0, 100),
      min: 0,
      max: 125.0,
      title: "Air Quality Index",
      decimals: 2,
      gaugeWidthScale: .3,
      gaugeColor:'#FEFADF',
      pointer: true,
      pointerOptions: {
        toplength: -2,
        bottomlength: 2,
        bottomwidth: 8,
        color: '#1C2628',
        stroke: '#ffffffc',
        stroke_width: 1,
        stroke_linecap: 'round'
      },
      titleFontColor: "#FEFADF",
      titleFontFamily: "Roboto",
      titleFontSize: 0,
      titleMinFontSize: 10,
      valueFontColor: "#FEFADF",
      valueFontFamily: "Roboto",
      label: 'µg/m³',

      customSectors: [
        {
          color: "#00cc66", // Green
          lo: 0,
          hi: 9
        },
        {
          color: "#ffcc00", // Yellow
          lo: 9.1,
          hi: 35.4
        },
        {
          color: "#ff9900", // Orange
          lo: 35.5,
          hi: 55.4
        },
        {
          color: "#ff3333", // Red
          lo: 55.5,
          hi: 125.0
        }
      ],
      
    });
    setInterval(function () {
        g1.refresh(getRandomFloat(0, 125));
    }, 2500);

    // Random float value generator function
    function getRandomFloat(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }
});

document.addEventListener("DOMContentLoaded", function (event) {

    // Define g2 outside the event listener to make it globally accessible
    window.g2 = new JustGage({
        id: "g2",
        value: getRandomInt(0, 2500), // Initial value within the range of 0 to 2500
        min: 0,
        max: 2500, // Max value updated to 2500

        titleFontColor: "#FEFADF",
        donut: true,
        valueFontColor: "#FEFADF",
        titleFontFamily: "Roboto",
        gaugeWidthScale: 0.4,
        gaugeColor: '#FEFADF',
        label: 'ppm',
        counter: true,
        pointer: true,
        pointerOptions: {
            toplength: -2,
            bottomlength: 2,
            bottomwidth: 8,
            color: '#1C2628',
            stroke: '#ffffffc',
            stroke_width: 1,
            stroke_linecap: 'round'
        },
    });

});

// Refresh the gauge value every 2.5 seconds with a random value between 0 and 2500
setInterval(function () {
    g2.refresh(getRandomFloat(0, 2500)); // Random value between 0 and 2500
}, 2500);

// Random float value generator function
function getRandomFloat(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Random integer value generator (used for initial value)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Update water level//
function updateWaterLevel() {
    const waterLevelElement = document.querySelector(".water-level");
    const waterLabelElement = document.querySelector(".water-label");

    // Generate a random water level in centimeters (0 to 70 cm)
    const waterLevelCm = Math.random() * 70;

    // Convert water level to percentage (0 to 100%)
    const waterLevelPercentage = (waterLevelCm / 70) * 100;

    // Update the height of the water level bar
    waterLevelElement.style.height = `${waterLevelPercentage}%`;

    // Update the label to show the water level in centimeters
    waterLabelElement.textContent = `${Math.round(waterLevelCm)}cm`;
  }

  // Update water level every 2 seconds
  setInterval(updateWaterLevel, 2000);

  // Initial update
  updateWaterLevel();



  document.addEventListener("DOMContentLoaded", function () {
    fetch("getTempData.php")
        .then((response) => response.json())
        .then((data) => {
            // Function to adjust time by adding 1 hour and converting to 12-hour format
            const adjustAndConvertTime = (time) => {
                let [hours, minutes] = time.split(":").map(Number);

                // Add 1 hour
                hours = (hours + 1) % 24; // Ensure hours stay within 24-hour range

                // Convert to 12-hour format with AM/PM
                const ampm = hours >= 12 ? "PM" : "AM";
                const adjustedHours = hours % 12 || 12; // Convert 0 to 12 for midnight
                return `${adjustedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
            };

            // Extract and format labels (time) and temperature data
            const labels = data
                .filter((item, index) => index % 10 === 0)  // Show data every 10 minutes
                .map((item) => adjustAndConvertTime(item.time));
            const temperatureData = data
                .filter((item, index) => index % 10 === 0)  // Filter corresponding temperature data
                .map((item) => item.temperature);

            // Configure and render the chart
            const options = {
                chart: {
                    type: "line",
                    height: "100%",
                    width: "120%",
                    toolbar: { show: false }
                },
                stroke: {
                    width: 2.5,  // Adjust the stroke width as desired
                    curve: "smooth",  // Define the curve style (e.g., smooth line)
                },
                title: {
                    text: "Temperature for the Past Hour",
                    align: "center",
                    style: {
                        fontSize: "16px",
                        fontFamily: "Roboto",
                        fontWeight: 300,
                        color: "#FEFADF"
                    }
                },
                series: [
                    {
                        name: "Temperature (°C)",
                        data: temperatureData
                    }
                ],
                xaxis: {
                    categories: labels,
                    labels: {
                        style: {
                            fontSize: "12px",  // Reduce font size to prevent cramping
                            fontFamily: "Roboto",
                            fontWeight: 300,
                            colors: "#FEFADF"
                        },
                        rotate: -60,  // Rotate labels to prevent overlap
                    },
                    tickAmount: labels.length > 6 ? 6 : labels.length, // Show only 5 labels to create space
                    interval: 2,  // Add space by showing every other label
                    show: true,  // Ensure labels are visible
                },
                yaxis: {
                    labels: {
                        style: {
                            fontSize: "12px",
                            fontFamily: "Roboto",
                            fontWeight: 300,
                            colors: "#FEFADF"
                        }
                    },
                    min: Math.min(...temperatureData) - 1,
                    max: Math.max(...temperatureData) + 1
                },
                grid: {
                    show: true, // Ensure grid lines are visible
                    borderColor: "#bababa4c",
                    strokeDashArray: 0, // Solid lines; increase this for dashed lines
                    position: "back", // Ensure grid lines render behind data points
                    xaxis: { lines: { show: false } }, // Ensure x-axis grid lines are visible
                    yaxis: { lines: { show: true } },
                    row: {
                        colors: "#bababa4c",
                        opacity: 0.5
                    },   // Ensure y-axis grid lines are visible
                },
                
                tooltip: {
                    enabled: true,
                    followCursor: true, // Make the tooltip follow the cursor
                    custom: function({ series, seriesIndex, dataPointIndex, w }) {
                        const value = series[seriesIndex][dataPointIndex];
                        return `<div style="background: #e7ae1d; color: #fff; padding: 5px 10px; border-radius: 5px; font-size: 12px; text-align: center;">
                            ${value}°C
                        </div>`;
                    },
                    offsetY: -20 // Adjust the tooltip to appear above the cursor
                },
                colors: ["#e7ae1d"]  // Change this to the desired line color
            };

            const chart = new ApexCharts(document.querySelector("#temperature-chart"), options);
            chart.render();
        })
        .catch((error) => console.error("Error fetching temperature data:", error));
});
