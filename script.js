

const options =
{
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b3e96323fmshf3e3bc30d3b8a90p1e091djsnfb21cde3eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    cityName.innerHTML = city    
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML  = response.temp 
        temp2.innerHTML  = response.temp 
        feels_like.innerHTML  =  response.feels_like 
        humidity.innerHTML  =  response.humidity 
        humidity2.innerHTML  =  response.humidity 
        min_temp.innerHTML  = response.min_temp 
        max_temp.innerHTML  = response.max_temp 
        wind_speed.innerHTML = response.wind_speed 
        wind_speed2.innerHTML = response.wind_speed 
        wind_degrees.innerHTML  = response.wind_degrees 
        sunrise.innerHTML  = response.sunrise 
        sunset.innerHTML  = response.sunset 
      
    })
    .catch(err => console.error(err));
}



submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Peshawar")


let Karachiweather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=karachi', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)       
        cloud_pct3.innerHTML = response.cloud_pct
        temp3.innerHTML  = response.temp 
        feels_like3.innerHTML  =  response.feels_like 
        humidity3.innerHTML  =  response.humidity 
        min_temp3.innerHTML  = response.min_temp 
        max_temp3.innerHTML  = response.max_temp 
        wind_speed3.innerHTML = response.wind_speed 
        wind_degrees3.innerHTML  = response.wind_degrees 
        sunrise3.innerHTML  = response.sunrise 
        sunset3.innerHTML  = response.sunset 
      
    })
    .catch(err => console.error(err));
}

Karachiweather("karachi")


let Lahoreweather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lahore', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)       
        cloud_pct4.innerHTML = response.cloud_pct
        temp4.innerHTML  = response.temp 
        feels_like4.innerHTML  =  response.feels_like 
        humidity4.innerHTML  =  response.humidity 
        min_temp4.innerHTML  = response.min_temp 
        max_temp4.innerHTML  = response.max_temp 
        wind_speed4.innerHTML = response.wind_speed 
        wind_degrees4.innerHTML  = response.wind_degrees 
        sunrise4.innerHTML  = response.sunrise 
        sunset4.innerHTML  = response.sunset 
      
    })
    .catch(err => console.error(err));
}

Lahoreweather("lahore")



let Islamabadweather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)       
        cloud_pct5.innerHTML = response.cloud_pct
        temp5.innerHTML  = response.temp 
        feels_like5.innerHTML  =  response.feels_like 
        humidity5.innerHTML  =  response.humidity 
        min_temp5.innerHTML  = response.min_temp 
        max_temp5.innerHTML  = response.max_temp 
        wind_speed5.innerHTML = response.wind_speed 
        wind_degrees5.innerHTML  = response.wind_degrees 
        sunrise5.innerHTML  = response.sunrise 
        sunset5.innerHTML  = response.sunset 
      
    })
    .catch(err => console.error(err));
}

Islamabadweather("Islamabad")