<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"
    ></script>
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
        crossorigin="anonymous"
    ></script>
  
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    

    <!-- Bootstrap CSS -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
    />
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css"  rel="stylesheet" />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="../css/dashboard.css" />
    <link rel="stylesheet" href="../css/scrollbar.css" />
    <script src="../script/dashboard.js" defer></script>
    <script src="../script/raphael-2.1.4.min.js" defer></script>
    <script src="../script/justgage.js" defer></script>
</head>
<body>


    <h1>Dashboard</h1>
    <div class="dashboard">
        <div class="rectangle rectangle1">
            <div class="rectangle1-container">
                <div class="rectangle1-part1">
                    <div class="temperature-header">
                        <h5>Temperature</h5>
                    </div>
                    <div class="temperature-value">
                        <h1>32</h1>
                        <h5 class="degrees">°C</h5>
                    </div>
                    <div class="humidity">
                        <h5>Humidity</h5>
                        <div class="humidity-value">
                            
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6 14.4C15.0643 16.0764 13.7176 17.4168 12 18M12.0001 21.6C8.03005 21.6 4.80005 18.5579 4.80005 14.8187C4.80005 9.6 12.0002 2.4 12.0002 2.4C12.0002 2.4 19.2 9.6 19.2 14.8187C19.2 18.558 15.9702 21.6 12.0001 21.6Z" stroke="#C8F9F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h5>70%</h5>
                        </div>
                    </div>

                </div>
            
                <div class="rectangle1-part2">
                </div>

            </div>
        </div>

        <div class="rectangle rectangle2">
            <div class="rectangle2-container">
                <div class="rectangle2-part1">
                    <div class="date-time">
                        <div class="day-date">
                            <span class="day" id="day"></span>
                            <span class="date" id="date"></span>
                        </div>
                        <div class="time">
                            <span id="time"></span> <span class="ampm" id="ampm"></span>
                            <svg class="icon" id="timeIcon" fill="currentColor">
                                <!-- Icon will be set dynamically here -->
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="rectangle2-part2">
                    <div id="temperature-chart"></div>
                </div>

            </div>
        </div>



        <div class="rectangle rectangle3">
            <div class="rectangle3-container">
                <div class="rectangle3-part1">
                    <div id="g1"></div>
                </div>
                <div class="rectangle3-part2">
                    <div class="co2-header">
                        <h5>CO2 Level</h5>
                    </div>
                    <div id="g2" class="gauge"></div>
                </div>
            </div>
        </div>

        <div class="rectangle rectangle4">
            <div class="water-header">
                <h5>Water Level</h5>
            </div>
            <div class="gauge-container">
                    
                <div class="water-label">0cm</div>
                <div class="water-level" style="height: 0%;"></div>
            </div>
        </div>

    <div class="background-box top-blur"><div class="ellipse"></div></div>
    <div class="background-box bottom-blur"><div class="ellipse"></div></div>



</body>
</html>
