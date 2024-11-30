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
    const icon = document.getElementById('timeIcon');
    if (ampm === 'pm') {
        // Set to moon icon for PM
        icon.innerHTML = '<use xlink:href="icons.svg#icon-moon"></use>';
    } else {
        // Set to sun icon for AM
        icon.innerHTML = '<use xlink:href="icons.svg#icon-sun"></use>';
    }
}

// Call the function to update date and time initially
updateDateTime();

// Update date and time every minute
setInterval(updateDateTime, 60000);

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
    // Mock data for temperature over the past hour
    const temperatureData = [31, 32, 33, 34, 33, 32, 31, 30, 31, 32, 33];
    const labels = [
        "1:00 PM", "1:10 PM", "1:20 PM", "1:30 PM", "1:40 PM",
        "1:50 PM", "2:00 PM", "2:10 PM", "2:20 PM", "2:30 PM", "2:40 PM"
    ];

    // ApexCharts configuration
    const options = {
        chart: {
            type: "line",
            height: "90%",
            toolbar: { show: false }
        },
        title: {
            text: "Temperature for the past hour",
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
                }
            }
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
            min: 30,
            max: 35
        },
        stroke: { curve: "smooth" },
        tooltip: {
            y: { formatter: (val) => `${val}°C` }
        },
        colors: ["#FF5733"]
    };

    const chart = new ApexCharts(document.querySelector("#temperature-chart"), options);
    chart.render();
});













  