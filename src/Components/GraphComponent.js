import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from "chart.js/auto"
import { Line } from "react-chartjs-2"


const GraphComponent = ({ rawData }) => {
    console.log("Graph is running....")


    const [newdata, setNewData] = useState({
        labels: rawData.map(day => day.dt_txt),
        datasets: [{
            label: 'Temperature',
            data: rawData.map(day => day.main.temp),
            borderWidth: 2,
            lineTension: 0.6,
        }],
    })
    const options = {
        // scales: {
        //     y: { // defining min and max so hiding the dataset does not change scale range
        //         min: 0,
        //         max: 50
        //     }
        // }
    }

    return (
        <div style={{ width: "800px" }}>
            <Line data={newdata} options={options} />
        </div>
    )
}

export default GraphComponent