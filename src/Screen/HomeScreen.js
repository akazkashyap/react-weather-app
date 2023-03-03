import React, { useEffect, useState, useReducer } from 'react'
import weatherApi from '../api/weatherApi'
import CurrentWeatherComponent from '../Components/CurrentWeatherComponent'
import GraphComponent from '../Components/GraphComponent'
import useLocation from '../hooks/useLocation'
import style from "../StyleSheets/StyleHome.module.css"
import WeatherCard from "../Components/WeatherCard"

export const Context = React.createContext()
const Provider = Context.Provider


const initialState = {
    city: "",
    grapData: "",
    currentTempData: ""
}

const reducer = (action, state) => {
    switch (action.type) {
        default:
            return state
    }
}

const HomeScreen = () => {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(true)
    const [lat, lon] = useLocation()
    // const units = unitType?"imperial": "metric"

    const [state, dispatch] = useReducer(reducer, initialState)

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
        <Provider value={{ state, dispatch }}>
            <div >
                <div className={style.main}>
                    <CurrentWeatherComponent lat={lat} lon={lon} />

                    <div className={style.graph}>
                        {loading ?
                            "loading" :
                            <GraphComponent rawData={data.list} />
                        }
                    </div>
                </div>
                <div className={style.cards}>
                    {!loading &&
                        <WeatherCard list={data.list} />
                    }
                </div>
            </div>
        </Provider>
    )
}

export default HomeScreen