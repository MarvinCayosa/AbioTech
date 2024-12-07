AOS.init();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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



//gauge1 CO2//
document.addEventListener("DOMContentLoaded", function (event) {

    // Define g2 outside the event listener to make it globally accessible
    window.g2 = new JustGage({
        id: "g2",
        value: 0, // Initial value for CO2 concentration
        min: 0,
        max: 2500, // Max value for CO2, as per safety levels
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
        // Custom intervals based on CO2 safety levels
        customSectors: [
            { color: '#28a745', lo: 0, hi: 800 },  // Green for Good (400-800 ppm)
            { color: '#ffc107', lo: 800, hi: 1200 }, // Yellow for Fair (800-1200 ppm)
            { color: '#fd7e14', lo: 1200, hi: 1800 }, // Orange for Poor (1200-1800 ppm)
            { color: '#dc3545', lo: 1800, hi: 2500 }, // Red for Dangerous (1800-2500 ppm)
        ],
        formatNumber: function (value) {
            return value.toFixed(2); // Display with two decimal places
        }
    });

});


//gauge2 Ammonia//
document.addEventListener("DOMContentLoaded", function (event) {

    // Define g3 outside the event listener to make it globally accessible
    window.g3 = new JustGage({
        id: "g3",
        value: 3, // Initial value for ammonia concentration
        min: 0,
        max: 100, // Max value for ammonia, as per safety levels (Unsafe starts above 55 ppm)
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
        // Custom intervals based on ammonia safety levels
        customSectors: [
            { color: '#28a745', lo: 0, hi: 55 },  // Green for Safe to Tolerable (0-55 ppm)
            { color: '#dc3545', lo: 55, hi: 100 }, // Red for Unsafe (Above 55 ppm)
        ],
        formatNumber: function (value) {
            return value.toFixed(2); // Display with two decimal places
        }
    });

});


//gauge3 Formaldehyde//
document.addEventListener("DOMContentLoaded", function (event) {

    // Define g4 outside the event listener to make it globally accessible
    window.g4 = new JustGage({
        id: "g4",
        value: 0.1, // Initial value for formaldehyde concentration
        min: 0,
        max: 2, // Max value for formaldehyde, since Dangerous starts above 1 ppm
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
        // Custom intervals based on formaldehyde safety levels
        customSectors: [
            { color: '#28a745', lo: 0, hi: 0.1 },   // Green for Safe to Tolerable (0-0.1 ppm)
            { color: '#ffc107', lo: 0.1, hi: 0.3 },  // Yellow for Caution (0.1-0.3 ppm)
            { color: '#fd7e14', lo: 0.3, hi: 1.0 },  // Orange for Hazardous (0.3-1.0 ppm)
            { color: '#dc3545', lo: 1.0, hi: 2.0 },  // Red for Dangerous (Above 1.0 ppm)
        ],
        // Decimal formatting for the value displayed on the gauge
        formatNumber: function (value) {
            return value.toFixed(2); // This will ensure two decimal places
        }
    });

});



// Random float value generator function
function getRandomFloat(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Random integer value generator (used for initial value)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Function to update water level visually
function updateWaterLevel(waterLevelCm) {
    const waterLevelElement = document.querySelector(".water-level");
    const waterLabelElement = document.querySelector(".water-label");
  
    // Convert water level to percentage (0 to 100%)
    const waterLevelPercentage = (waterLevelCm / 70) * 100; // Assuming 70 cm is the maximum level
  
    // Update the height of the water level bar
    waterLevelElement.style.height = `${waterLevelPercentage}%`;
  
    // Update the label to show the water level in centimeters
    waterLabelElement.textContent = `${Math.round(waterLevelCm)} cm`;
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
                    width: "100%", 
                    toolbar: { show: false }
                },
                stroke: {
                    width: 2.5,
                    curve: "smooth",
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
                            fontSize: "12px",
                            fontFamily: "Roboto",
                            fontWeight: 300,
                            colors: "#FEFADF"
                        },
                        rotate: -60,
                    },
                    tickAmount: Math.min(labels.length, 6),
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
                    borderColor: "#bababa4c",
                    xaxis: { lines: { show: false } },
                    yaxis: { lines: { show: true } },
                },
                tooltip: {
                    enabled: true,
                    followCursor: true,
                    custom: function ({ series, seriesIndex, dataPointIndex }) {
                        const value = series[seriesIndex][dataPointIndex];
                        return `<div style="background: #e7ae1d; color: #fff; padding: 5px 10px; border-radius: 5px; font-size: 12px; text-align: center;">
                                    ${value}°C
                                </div>`;
                    },
                    offsetY: -20
                },
                colors: ["#e7ae1d"]
            };

            const chart = new ApexCharts(document.querySelector("#temperature-chart"), options);
            chart.render();
        })
        .catch((error) => console.error("Error fetching temperature data:", error));
});
