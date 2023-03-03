import React from 'react'

const WeatherCard = ({ list }) => {
    return (
        <div>
            {
                list.map(
                    (day) => {
                        return <div>
                            <p>{day.main.temp}</p>
                        </div>
                    }
                )
            }
        </div>
    )
}

export default WeatherCard