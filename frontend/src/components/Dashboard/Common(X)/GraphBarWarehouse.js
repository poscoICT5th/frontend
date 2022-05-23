import React, { useEffect, useState } from 'react'
import ReactApexChart from "react-apexcharts";

function GraphBarStored() {
    const [inputData, setinputData] = useState([])
    const [labelData, setlabelData] = useState([])
    const rows = [
        { id: 1, productName: 'Snow', firstName: 'Jon', amout: 52 },
        { id: 2, productName: 'Lannister', firstName: 'Cersei', amout: 72 },
        { id: 3, productName: 'Lannister', firstName: 'Jaime', amout: 41 },
        { id: 4, productName: 'Stark', firstName: 'Arya', amout: 34 },
        { id: 5, productName: 'Targaryen', firstName: 'Daenerys', amout: 22 },
        { id: 6, productName: 'Melisandre', firstName: null, amout: 106 },
        { id: 7, productName: 'Clifford', firstName: 'Ferrara', amout: 75 },
        { id: 8, productName: 'Frances', firstName: 'Rossini', amout: 42 },
        { id: 9, productName: 'Roxie', firstName: 'Harvey', amout: 33 },
    ];
    // inputData 하나씩 가공해서 return
    function createData(productName, amout) {
        return { x: productName, y: amout };
    }
    // inputData 만들기
    function createGraphData(rows) {
        for (let index = 0; index < rows.length; index++) {
            setinputData(inputData => [...inputData, createData(rows[index].productName, rows[index].amout)])
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
            labels: labelData,
            title: {
                text: '창고 재고 수량별',
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
                    width="100%"
                    align="center"
                />
            </div>
        </div>
    )
}

export default GraphBarStored