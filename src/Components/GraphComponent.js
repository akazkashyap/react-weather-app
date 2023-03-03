import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../Screen/HomeScreen'
import { Chart as ChartJS } from "chart.js/auto"
import { Line } from "react-chartjs-2"
import style from "../StyleSheets/StyleGraph.module.css"


const GraphComponent = () => {
    console.log("Graph is running....")

    const { state: { coords, graphData }, getGraphData } = useContext(Context)
    const options = {
        // scales: {
        //     y: { // defining min and max so hiding the dataset does not change scale range
        //         min: 0,
        //         max: 50
        //     }
        // }
    }

    useEffect(() => {
        if (!coords) return;
        getGraphData(coords)
    }, [coords])


    return (
        <div className={style.graph}>
            {!graphData ? "Loading..." : <Line data={{
                labels: graphData.map(row => row.dt_txt),
                datasets: [{
                    label: 'Temperature',
                    data: graphData.map(row => row.main.temp),
                    borderWidth: 2,
                    lineTension: 0.6,
                }],
            }} options={options} />}
        </div >
    )
}

export default React.memo(GraphComponent)