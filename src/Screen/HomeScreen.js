import React, { useEffect, useState } from 'react'
import weatherApi from '../api/weatherApi'
import CurrentWeatherComponent from '../Components/CurrentWeatherComponent'
import GraphComponent from '../Components/GraphComponent'
import useLocation from '../hooks/useLocation'
import style from "../StyleSheets/StyleHome.module.css"
import WeatherCard from "../Components/WeatherCard"

const HomeScreen = () => {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(true)
    const [lat, lon] = useLocation()
    // const units = unitType?"imperial": "metric"

    useEffect(() => {
        weatherApi
            .get("/forecast",
                {
                    params: {
                        lat, lon
                    }
                })
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(e => { console.log(e.data) })
    }, [])
    return (
        <div className={style.main}>
            <CurrentWeatherComponent lat={lat} lon={lon} />
            <div className={style.graph}>
                {loading ?
                    "loading" :
                    <GraphComponent rawData={data.list} />
                }
                {/* <WeatherCard list={data.list} /> */}
            </div>
        </div>
    )
}

export default HomeScreen