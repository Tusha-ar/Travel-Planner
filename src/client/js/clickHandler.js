import { dayDiff } from "./days";
import { getLocation } from "./getLoaction";
import { getWeather } from "./getWeather";
import { futureWeather } from "./futureWeather";
import { currentDayUpdate } from "./currentDayUpdate";
import { futureUpdate } from './futureUpdate'

export const clickHandler= (e) =>{
    e.preventDefault();
    const urlCoords = 'http://api.geonames.org/searchJSON?q='
    const urlfuture = 'https://api.weatherbit.io/v2.0/forecast/daily?lat='
    const urlWeather = 'https://api.weatherbit.io/v2.0/current?&lat='
    const apiKey_weather = '613bafb67a404b8e82977b17abfa7349'
    const username = 'tush_aar'
    const today = new Date();
    const destination = document.getElementById('dest').value;
    const date = document.getElementById('date').value;
    const departure_date = new Date(date);
    const current_date = new Date(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate());
    const days = dayDiff(departure_date, current_date)
    getLocation(urlCoords, username, destination)
        .then(coords=>{
            if(coords.totalResultsCount === 0)
            {
                alert('No City or Place found with this name...')
            }
            else
            {
                const lat = coords.geonames[0].lat
                const long = coords.geonames[0].lng
                if(days < 7)
                    getWeather(urlWeather,apiKey_weather, lat, long, destination, days)
                else
                    futureWeather(urlfuture,apiKey_weather,lat, long, destination, days) 
            } 
        })
}