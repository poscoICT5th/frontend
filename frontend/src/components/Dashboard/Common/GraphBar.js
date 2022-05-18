import React, { useEffect, useState } from 'react'
import ReactApexChart from "react-apexcharts";

function GraphBar() {
    const [inputData, setinputData] = useState([])
    const [labelData, setlabelData] = useState([])
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 23 },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 52 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    // inputData 하나씩 가공해서 return
    function createData(lastName, age) {
        return { x: lastName, y: age };
    }
    // inputData 만들기
    function createGraphData(rows) {
        for (let index = 0; index < rows.length; index++) {
            setinputData(inputData => [...inputData, createData(rows[index].lastName, rows[index].age)])
            setlabelData(labelData => [...labelData, rows[index].lastName])
        }
    }
    useEffect(() => {
        setinputData([]);
        setlabelData([]);
        createGraphData(rows)
    }, [])

    const barData = {
        series: [{
            data: inputData
        }],
        options: {
            chart: {
                type: 'bar',
            },
            legend: {
                position: 'bottom'
            },
            responsive: [{
                // breakpoint: 480,
            }],
            plotOptions: {
                pie: {
                    bar: {
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true,
                                label: '입출고현황',
                                fontSize: '20px',
                                color: 'red'
                            },
                            value: {
                                fontSize: '22px',
                                show: true,
                                color: 'blue',
                            },
                        },
                    }
                }
            },
            labels: labelData,
            title: {
                text: '최근입고물품(Graph)',
                align: 'center'
            },
        },
    }
    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={barData.options}
                    series={barData.series}
                    type="bar"
                    width={500}
                    align="center"
                />
            </div>
        </div>
    )
}

export default GraphBar