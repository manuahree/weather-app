<?php
$apiKey = "82dfce36194f8b6cdc2af62c7001b30f"; // Replace with your API key

$city = $_GET['city'];
$apiUrl = "https://home.openweathermap.org/api_keys";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

header('Content-Type: application/json');
echo $response;
?>
