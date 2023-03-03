import axios from "axios"
const ENDPOINT = "http://api.openweathermap.org/data/2.5"


// const units = unitType?"imperial": "metric"

export default axios.create({
    baseURL: ENDPOINT,
    params: {
        appid: "e290e16615cfdc8971de26f806de323f",
        units: "metric"
    }
})