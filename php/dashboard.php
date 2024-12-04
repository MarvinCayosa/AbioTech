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
    <script src="../script/sensor_data.js" defer></script>
    <script src="../script/raphael-2.1.4.min.js" defer></script>
    <script src="../script/justgage.js" defer></script>
</head>
<body>

    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Dashboard</span>
            <div class="device-status ms-auto d-flex align-items-center">
                <span class="status-circle online"></span>
                <span class="status-text">Online</span>
            </div>
        </div>
    </nav>
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
                <div class="toggle-container">
                    <button id="toggleTemp" class="btn btn-primary active">Temperature</button>
                    <button id="toggleHumidity" class="btn btn-secondary">Humidity</button>
                </div>
                <div class="rectangle2-part2">
       
                    <div id="chart-container">
                        <div id="temperature-chart" style="margin-top: 20px;"></div>
                        <div id="humidity-chart" style="margin-top: 20px; display: none;"></div>
                    </div>
                </div>

            </div>
        </div>

        <div class="rectangle rectangle3">
            <div class="rectangle3-container">
                <div class="rectangle3-part2">
                    <div class="co2-header" 
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right" 
                    data-bs-html="true" 
                    data-bs-title='
                        <div class="tooltip-content">
                            <p><strong>Carbon Dioxide (CO2)</strong></p>
                            <p>CO2 is a pollutant released by the burning of fossil fuels, respiration, deforestation, and industrial processes.</p>
                            <div class="tooltip-level">
                                <p>Safety Levels:</p>
                                <div><span class="color-box green"></span> Good (400-800 ppm)</div>
                                <div><span class="color-box yellow"></span> Fair (800-1200 ppm)</div>
                                <div><span class="color-box orange"></span> Poor (1200-1800 ppm)</div>
                                <div><span class="color-box red"></span> Dangerous (1800-2100 ppm)</div>
                            </div>
                        </div>'>
                            <h5>CO2</h5>
                            <h7>Carbon Dioxide</h7>
                    </div>
                     <div id="g2" class="gauge"></div>
                </div>
                <div class="rectangle3-part2">
                    <div class="co2-header" 
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right" 
                    data-bs-html="true" 
                    data-bs-title='
                        <div class="tooltip-content">
                            <p><strong>Ammonia (NH3)</strong></p>
                            <p>Ammonia is a gas primarily released by agricultural processes, wastewater treatment, and industrial activities.</p>
                            <div class="tooltip-level">
                                <div><span class="color-box green"></span> Safe to Tolerable (0-55 ppm)</div>
                                <div><span class="color-box red"></span> Unsafe (Above 55 ppm)</div>
                            </div>
                        </div>'>
                            <h5>NH3</h5>
                            <h7>Ammonia</h7>
                    </div>
                     <div id="g3" class="gauge"></div>
                </div>
                <div class="rectangle3-part2">
                    <div class="co2-header" 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="right" 
                        data-bs-html="true" 
                        data-bs-title='
                            <div class="tooltip-content">
                                <p><strong>Formaldehyde (CH2O)</strong></p>
                                <p>Formaldehyde is a colorless, strong-smelling gas used in building materials, and is also a byproduct of combustion and industrial processes.</p>
                                <div class="tooltip-level">
                                    <div><span class="color-box green"></span> Safe to Tolerable (0–0.1 ppm) - For general indoor air, within the WHO recommended limits</div>
                                    <div><span class="color-box yellow"></span> Caution (0.1–0.3 ppm) - Indoor levels that may cause irritation in sensitive individuals</div>
                                    <div><span class="color-box orange"></span> Hazardous (0.3–1.0 ppm) - Long-term exposure may lead to health risks like respiratory irritation</div>
                                    <div><span class="color-box red"></span> Dangerous (Above 1.0 ppm) - High risk of acute toxicity, should be avoided</div>
                                </div>
                            </div>'>
                        <h5>CH2O</h5>
                        <h7>Formaldehyde</h7>
                    </div>
                    <div id="g4" class="gauge"></div>
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
