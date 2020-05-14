export const dayDiff = (departureDate, currentDate) =>{
    const Time_diff = departureDate.getTime() - currentDate.getTime();
    return Math.floor(Time_diff/(1000*3600*24))
}