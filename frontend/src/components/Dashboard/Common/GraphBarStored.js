import React, { useEffect, useState } from 'react'
import ReactApexChart from "react-apexcharts";

function GraphBarStored() {
    const [inputData, setinputData] = useState([])
    const [labelData, setlabelData] = useState([])
    const rows = [
        { id: 1, productName: 'Snow', firstName: 'Jon', amount: 35 },
        { id: 2, productName: 'Lannister', firstName: 'Cersei', amount: 42 },
        { id: 3, productName: 'Lannister', firstName: 'Jaime', amount: 45 },
        { id: 4, productName: 'Stark', firstName: 'Arya', amount: 16 },
        { id: 5, productName: 'Targaryen', firstName: 'Daenerys', amount: 23 },
        { id: 6, productName: 'Melisandre', firstName: null, amount: 52 },
        { id: 7, productName: 'Clifford', firstName: 'Ferrara', amount: 44 },
        { id: 8, productName: 'Frances', firstName: 'Rossini', amount: 36 },
        { id: 9, productName: 'Roxie', firstName: 'Harvey', amount: 65 },
    ];
    // inputData 하나씩 가공해서 return
    function createData(productName, amount) {
        return { x: productName, y: amount };
    }
    // inputData 만들기
    function createGraphData(rows) {
        for (let index = 0; index < rows.length; index++) {
            setinputData(inputData => [...inputData, createData(rows[index].productName, rows[index].amount)])
            setlabelData(labelData => [...labelData, rows[index].productName])
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
                // height: 500
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
            name: "test",
            labels: labelData,
            title: {
                text: '최근 입고물품 수량별',
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

export default GraphBarStored