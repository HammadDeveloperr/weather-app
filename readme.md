


https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={eb34c3355c9bc0dd6e87beeebdd9b8dc}



<td><span id="cloud_pct5"></span></td>
                <td><span id="feels_like5"></span></td>
                <td><span id="humidity5"></span></td>
                <td><span id="max_temp5"></span></td>
                <td><span id="min_temp5"></span></td>
                <td><span id="sunrise5"></span></td>
                <td><span id="sunset5"></span></td>
                <td><span id="temp5"></span></td>
                <td><span id="wind_degrees5"></span></td>
                <td><span id="wind_speed5"></span></td>



                const url = 'https://weather-api99.p.rapidapi.com/weather?city=%3CREQUIRED%3E';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6a5fff7a2fmsh5d7c53f1ec951cdp125ff8jsn4a6837d831e9',
		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}