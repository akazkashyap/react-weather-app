import axios from "axios"
const ENDPOINT = "https://api.openweathermap.org/data/2.5"


// const units = unitType?"imperial": "metric"

export default axios.create({
    baseURL: ENDPOINT,
    params: {
        appid: REACT_APP_KEY,
        units: "metric"
    }
})