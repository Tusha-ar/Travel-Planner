import { postData } from "./postData";
import { currentDayUpdate } from "./currentDayUpdate";

export const getWeather = async (url, key, lat, long, destination,days) =>{
    const weather_data = await fetch(url + lat + '&lon=' + long + '&key=' + key)
    const weather_data_json = await weather_data.json();
    const data = {
        temp: weather_data_json.data[0].temp,
        dis: weather_data_json.data[0].weather.description,
        des: destination
    }
    const res = await postData('http://localhost:8800/current', data)
    currentDayUpdate(days, res)
}