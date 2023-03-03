import React, { useEffect, useState } from 'react'
import weatherApi from '../api/weatherApi'
import style from "../StyleSheets/StyleCurrentWeather.module.css"


const CurrentWeatherComponent = ({ lat, lon }) => {
    const [city, setCity] = useState("")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const now = new Date()


    const seach = async (params) => {
        try {
            if (params) {
                const response = await weatherApi.get("/weather", {
                    params
                })
                setData(response.data)
                setLoading(false)
            }
        } catch (error) {

        }

    }


    useEffect(() => {
        seach({ lat, lon })
    }, [])
    console.log(now)


    return (
        <div className={style.body}>
            <div className={style.city_input}>
                <label>Your City</label>
                <input type={"text"}
                    value={city}
                    onChange={e => setCity(e.target.value)} />
                <button onClick={() => seach({ q: city })}>Seach</button>
            </div>

            {
                loading ?
                    "loading" :
                    <div className={style.main}>
                        <p className={style.fade_color}>{`${now.toDateString()}`}</p>
                        <div className={style.main_temp}>
                            <img src='https://openweathermap.org/img/wn/50d@2x.png' />
                            <p>{data.main.temp}</p>
                        </div>

                        <div className={style.description}>
                            <p className={style.main_description}>{data.weather[0].main}</p>

                            <div className={style.horiozontal_direction}>
                                <div>
                                    <p className={style.fade_color}>Humidity</p>
                                    <p className={style.bold_font}>{data.main.humidity}</p>
                                </div>
                                <div>
                                    <p className={style.fade_color}>Wind Speed</p>
                                    <p className={style.bold_font}>{data.wind.speed} m/s</p>
                                </div>

                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default CurrentWeatherComponent