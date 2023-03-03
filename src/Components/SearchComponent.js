import React, { useContext } from 'react'
import { Context } from '../Screen/HomeScreen'
import style from "../StyleSheets/StyleSearch.module.css"

const SearchComponent = () => {
    const { state } = useContext(Context)
    console.log(state)
    return (
        <div>
            <div className={style.city_input}>
                <label>Your City</label>
                <input type={"text"}
                    value={city}
                    onChange={e => setCity(e.target.value)} />
                <button onClick={() => seach({ q: city })}>Seach</button>
            </div>
        </div>
    )
}

export default SearchComponent