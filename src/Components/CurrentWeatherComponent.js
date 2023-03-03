import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../Screen/HomeScreen'
import weatherApi from '../api/weatherApi'
import style from "../StyleSheets/StyleCurrentWeather.module.css"
import SearchComponent from './SearchComponent'


const CurrentWeatherComponent = ({ children }) => {

    const { state: { coords, currentTempData }, getCurrentWeather } = useContext(Context)
    const now = new Date()

    console.log("Current is running....")

    useEffect(
        () => {
            if (!coords) return;
            getCurrentWeather(coords)
        }, [coords])

    return (
        <div className={style.body}>
            {children}
            {
                !currentTempData ?
                    "loading" :
                    <div className={style.main}>
                        <p className={style.fade_color}>{`${now.toDateString()}`}</p>
                        <div className={style.main_temp}>
                            <img src={`https://openweathermap.org/img/wn/${currentTempData.weather[0].icon}@2x.png`} />
                            <p>{currentTempData.main.temp}
                                <span className={style.unit}>&deg;C</span>
                            </p>
                        </div>

                        <div className={style.description}>
                            <p className={style.main_description}>{currentTempData.weather[0].main}</p>

                            <div className={style.horiozontal_direction}>
                                <div>
                                    <p className={style.fade_color}>Humidity</p>
                                    <p className={style.bold_font}>{currentTempData.main.humidity}%</p>
                                </div>
                                <div>
                                    <p className={style.fade_color}>Wind Speed</p>
                                    <p className={style.bold_font}>{currentTempData.wind.speed} m/s</p>
                                </div>

                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default React.memo(CurrentWeatherComponent)