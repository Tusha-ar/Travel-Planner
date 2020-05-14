export const photo = async (url, des) =>{
    const res = await fetch(url+des+'&image_type=photo')
    const resJson = await res.json();
    const link = resJson.hits[1].webformatURL
    return link
}