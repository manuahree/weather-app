document.getElementById("getWeatherBtn").addEventListener("click", function() {
    var city = document.getElementById("cityInput").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "weather.php?city=" + city, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var weatherData = JSON.parse(xhr.responseText);
        document.getElementById("weatherInfo").innerHTML = weatherData.description;
      } else {
        alert("Error fetching weather data. Please try again.");
      }
    };
    xhr.send();
  });
  