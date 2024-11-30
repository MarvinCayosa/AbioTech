<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading...</title>
    <link rel="stylesheet" href="../css/loading.css" />
    <script>
        // Redirect to the dashboard after 2 seconds
        setTimeout(() => {
            window.location.href = 'dashboard.php';
        }, 1500);
    </script>
</head>
<body>
    <section class="sec-loading">
        <!-- Spinner -->
        <div class="one"></div>
        <!-- Loading Text -->
        <p class="loading-text">Loading...</p>
    </section>
</body>
</html>
