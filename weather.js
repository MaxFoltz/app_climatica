window.onload = () => {
  fetch('backend/weather.php')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      return response.json();
    })
    .then(data => {
      // Datos actuales
      document.getElementById('city-name').textContent = data.city;
      document.getElementById('current-temp').textContent = data.current_weather_data.temp + ' °C';
      document.getElementById('current-humidity').textContent = data.current_weather_data.humidity + ' %';
      document.getElementById('current-wind-speed').textContent = data.current_weather_data.wind_speed + ' Km/h';
      document.getElementById('current-icon').src = data.current_weather_data.icon_url;
    })
    .catch(error => {
      console.error('Hubo un problema:', error);
    });
};