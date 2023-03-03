import React, { useEffect, useState, useReducer } from 'react'
import weatherApi from '../api/weatherApi'
import CurrentWeatherComponent from '../Components/CurrentWeatherComponent'
import GraphComponent from '../Components/GraphComponent'
import useLocation from '../hooks/useLocation'
import style from "../StyleSheets/StyleHome.module.css"
import WeatherCard from "../Components/WeatherCard"
import SearchComponent from '../Components/SearchComponent'

export const Context = React.createContext()
const Provider = Context.Provider


const initialState = {
    city: "",
    graphData: null,
    currentTempData: null,
    coords: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "save_coords":
            return { ...state, coords: action.payload }

        case "save_current_temp":
            return { ...state, currentTempData: action.payload }

        case "save_graph_data":
            return { ...state, graphData: action.payload }

        case "save_city_name":
            return { ...state, city: action.payload }


        default:
            return state
    }
}

const HomeScreen = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getCurrentWeather = async (params) => {
        //Prams can me {lat, lon} or city name {q}
        const response = await weatherApi.get("/weather", { params })
        dispatch({ type: "save_current_temp", payload: response.data })
    }
    const getGraphData = async (params) => {
        //Prams can me {lat, lon} or city name {q}
        const response = await weatherApi.get("/forecast", { params })
        dispatch({ type: "save_graph_data", payload: response.data.list })
    }
    const setCity = (name) => {
        dispatch({ type: "save_city_name", payload: name })

    }
    const setCoords = (coords) => {
        dispatch({ type: "save_coords", payload: coords })
    }


    const [lat, lon] = useLocation()
    useEffect(() => {
        setCoords({ lat, lon })
    }, [])

    return (
        <Provider value={{ state, getCurrentWeather, getGraphData, setCity }}>
            <div>
                <h1>Weather Forecast</h1>
            </div>
            <div >
                <div className={style.main}>
                    <CurrentWeatherComponent>
                        <SearchComponent />
                    </CurrentWeatherComponent>

                    <div className={style.graph}>
                        <GraphComponent />
                    </div>
                </div>

                <div className={style.cards}>
                    <WeatherCard />
                </div>
            </div>
        </Provider>
    )
}

export default HomeScreen