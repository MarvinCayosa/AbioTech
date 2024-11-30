<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AbioTech</title>
    <!-- Popper.js and Bootstrap JS -->
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

    <!-- Bootstrap CSS -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
    />
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">


    <!-- Custom CSS -->
    <link rel="stylesheet" href="../css/index.css" />
    <link rel="stylesheet" href="../css/scrollbar.css" />
    <script src="../script/index.js" defer></script>
</head>
<body>
    <!-- Info Page Section -->
    <div class="info-page" id="heroPage">
        <div class="background-box top-blur"><div class="ellipse"></div></div>
        <div class="background-box bottom-blur"><div class="ellipse"></div></div>
        <div class="content-wrapper">
            <h2 class="welcome-text">Welcome to</h2>
            <h1 class="title">AbioTech</h1>
            <p class="description">
                AbioTech is an innovative IoT-based solution designed to provide real-time monitoring of environmental air quality and flood levels. 
                It integrates advanced sensor technology and seamless connectivity to deliver precise, timely data to help communities and authorities 
                make informed decisions. By unifying air quality and flood monitoring into a single platform, AbioTech enhances environmental awareness 
                and disaster preparedness, offering an essential tool for sustainable urban planning and resilience against environmental challenges.
            </p>
            <button type="button" class="btn btn-try" onclick="window.location.href='loading.php';">
                Try it now
                <svg class="icon-up-diag" fill="currentColor">
                    <use xlink:href="icons.svg#icon-up-diag"></use>
                </svg>
            </button>
            <button type="button" class="btn btn-more" id="exploreMoreBtn">
                Explore More
            </button>
        </div>
    </div>
    <!-- Key Features Section -->
    <div class="key-features" id="ftPage1">
        <div class="image-container"data-aos="fade-up"
        data-aos-duration="500">
            <div class="image-placeholder">
                <img src="../assets/air.jpg" alt="Air Quality Monitoring" />
            </div>
        </div>
        <div class="content-wrapper features" data-aos="fade-up"
        data-aos-duration="500">
            <h1 class="title"data-aos="fade-up"
            data-aos-duration="800">Air Quality Made <span>Easy.</span></h1>
            <p class="description"data-aos="fade-up"
            data-aos-duration="1000">
                AbioTech simplifies air quality monitoring using the <b>MQ-135 sensor</b> for harmful gases and the <b>DHT22 sensor</b> for temperature and humidity. In urban areas with elevated pollution levels, it provides real-time data to identify hotspots and track air quality trends. This empowers communities to take proactive steps for cleaner, healthier environments.
            </p>
        </div>
    </div>
    <div class="key-features flood" id="ftPage2">

        <div class="content-wrapper features" data-aos="fade-up"
        data-aos-duration="500">
            <h1 class="title"data-aos="fade-up"
            data-aos-duration="800">Flood <span>Monitoring.</span></h1>
            <p class="description"data-aos="fade-up"
            data-aos-duration="1000">
                AbioTech integrates advanced flood monitoring through <b>real-time water level sensors </b>, providing accurate data to detect rising water levels. In flood-prone urban areas, this system offers early warnings, enabling timely responses to prevent damage and ensure safety.
            </p>
        </div>
        <div class="image-container"data-aos="fade-up"
        data-aos-duration="500">
            <div class="image-placeholder">
                <img src="../assets/flood.jpg" alt="Flood Monitoring" />
            </div>
        </div>
    </div>
    <div class="key-features anytime" id="ftPage3">
        <div class="content-wrapper features" data-aos="fade-up"
        data-aos-duration="500">
            <h1 class="title"data-aos="fade-up"
            data-aos-duration="800">Stay Updated
            <br><span>Anytime.</span></h1>
            <p class="description" data-aos="fade-up"
            data-aos-duration="1000">
            AbioTech keeps you updated in real-time through its IoT-enabled system, providing continuous monitoring via a web interface. Connected seamlessly to the cloud, it delivers live air quality and flood data directly to your device. This ensures you stay informed and ready to respond to environmental changes anytime, from anywhere.
            </p>
        </div>
        <button type="button" class="btn btn-try" data-aos="fade-up" data-aos-duration="1000" id="startMonitoringBtn">
            Start Monitoring Now
            <svg class="icon-up-diag" fill="currentColor">
                <use xlink:href="icons.svg#icon-up-diag"></use>
            </svg>
        </button>
    </div>

</body>
</html>
