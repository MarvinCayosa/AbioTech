AOS.init();

const startMonitoringBtn = document.getElementById('startMonitoringBtn');

// Add click event listener to the button
startMonitoringBtn.addEventListener('click', function() {
    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const exploreMoreBtn = document.getElementById('exploreMoreBtn');
const keyFeaturesSection = document.getElementById('ftPage1');

// Add click event listener to the button
exploreMoreBtn.addEventListener('click', function() {
    // Scroll to the "Key Features" section smoothly
    keyFeaturesSection.scrollIntoView({
        behavior: 'smooth'
    });
});


