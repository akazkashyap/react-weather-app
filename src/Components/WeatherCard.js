import React from 'react'
import style from "../StyleSheets/WeatherCard.module.css"

const WeatherCard = ({ list }) => {
    console.log("Cards is running....")

    return (
        <div className={style.cards}>
            {
                list.map(day => {
                    return (
                        <div className={style.card}
                            key={day.dt}>
                            <p>{day.dt_txt.slice(0, 10)}</p>
                            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                            <p className={style.temp_text}>{day.main.temp} &deg;C</p>
                            <p>at {day.dt_txt.slice(10)}</p>
                        </div>
                    )
                }

                )
            }
        </div >
    )
}

export default WeatherCard