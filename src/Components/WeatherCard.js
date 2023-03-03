import React, { useContext } from 'react'
import { Context } from '../Screen/HomeScreen'
import style from "../StyleSheets/WeatherCard.module.css"

const WeatherCard = () => {
    const { state: { graphData } } = useContext(Context)

    if (!graphData) {
        return <div>Loading</div>
    }

    return (
        <div className={style.cards}>
            {
                graphData.map(day => {
                    return (
                        <div className={style.card}
                            key={day.dt}>
                            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                            <p className={style.temp_text}>{day.main.temp} &deg;C</p>
                            <p>at {day.dt_txt.slice(10)}</p>
                            <p>{day.dt_txt.slice(0, 10)}</p>
                        </div>
                    )
                }

                )
            }
        </div >
    )
}

export default WeatherCard