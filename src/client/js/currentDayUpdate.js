import { photo } from './photo'


//if the departure date is within a week then this fucntion will display current weather
export const currentDayUpdate = async(days, data) =>{
    const urlPhoto = 'https://pixabay.com/api/?key=16540773-65b46ecd525d2b83550f4789b&q='
    try{
    const link = await photo(urlPhoto, data.des)
    document.getElementById('img').innerHTML = `<img src=${link}>`
    document.getElementById('destination').textContent = ' '+data.des
    document.getElementById('days').textContent = days.diff
    document.getElementById('len').textContent = days.back
    document.getElementById('temp').innerHTML = `<strong>Current temp. there: </strong>${data.temp}&#8451`
    document.getElementById('detail').textContent = ' ' + data.dis
    document.getElementById('res').classList.remove('invisible')
    document.getElementById('res').scrollIntoView({behavior: "smooth"})
    }
    catch(err){
        console.log(err)
    }
}