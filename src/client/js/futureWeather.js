import { postData } from "./postData";
import { futureUpdate } from './futureUpdate'

export const futureWeather = async (url, key, lat, long, destination, days) =>{
    const weather_data = await fetch(url + lat + '&lon=' + long + '&key=' + key)
    const weather_data_json = await weather_data.json();
    const data = {
        low_temp: weather_data_json.data[15].low_temp,
        max_temp: weather_data_json.data[15].max_temp,
        dis: weather_data_json.data[15].weather.description,
        des: destination
    }
    const res = await postData('http://localhost:8800/future', data)
    futureUpdate(days, res)
}