import { photo } from "./photo"


//if the departure date is a week later then this function will show weather forecast
export const futureUpdate = async(days, data) =>{
    const urlPhoto = 'https://pixabay.com/api/?key=16540773-65b46ecd525d2b83550f4789b&q='
    const des= data.des
    const low_temp = data.low_temp
    const max_temp = data.max
    const dis = data.dis
    try{
        const link = await photo(urlPhoto,data.des)
        document.getElementById('img').innerHTML = `<img src=${link}>`
        document.getElementById('destination').textContent = ' '+des
        document.getElementById('days').textContent = days.diff
        document.getElementById('len').textContent = days.back
        document.getElementById('temp').innerHTML = `<strong>Min temp.: </strong>${low_temp}&#8451 <br/><strong>Max temp.: </strong>${max_temp}&#8451`
        document.getElementById('detail').textContent = ' ' + dis
        document.getElementById('res').classList.remove('invisible')
        document.getElementById('res').scrollIntoView({behavior: "smooth"})

    }
    catch(err){
        console.log(err)
    }
}