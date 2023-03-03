import React, { useContext } from 'react'
import { Context } from '../Screen/HomeScreen'
import style from "../StyleSheets/StyleSearch.module.css"

const SearchComponent = () => {
    const { getCurrentWeather, getGraphData } = useContext(Context)

    const fetchNewData = (city) => {
        getCurrentWeather(city)
        getGraphData(city)
    }
    //() => fetchNewData({ q: city })
    //e => setCity(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchNewData({ q: e.target.city.value })
    }
    return (
        <div className={style.city_input}>
            <form onSubmit={handleSubmit}>
                <label>Your City</label>
                <input type={"text"}
                    name={"city"} />
                <button type={"submit"}>Seach</button>
            </form>
        </div>
    )
}

export default React.memo(SearchComponent)