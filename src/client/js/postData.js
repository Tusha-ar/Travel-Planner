export const postData = async (url, data={}) =>{
    const res = await fetch(url,{
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const resJson = await res.json()
    return resJson
}