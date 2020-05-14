export const getLocation = async(url, userName, destination) =>{
    const coords = await fetch(url + destination + '&maxRows=10&username=' + userName)
    try{
        const cityLoc = await coords.json();
        return cityLoc;
    }   
    catch(err){
        console.log(err);
    }
}