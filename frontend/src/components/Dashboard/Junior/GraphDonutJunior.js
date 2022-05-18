import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";

function GraphDonutJunior() {
    const [inputData, setinputData] = useState([])
    const [labelData, setlabelData] = useState([])
    const rows = [
        { id: 1, productName: 'Snow', firstName: 'Jon', request: 35 },
        { id: 2, productName: 'Lannister', firstName: 'Cersei', request: 42 },
        { id: 3, productName: 'Lannister', firstName: 'Jaime', request: 45 },
        { id: 4, productName: 'Stark', firstName: 'Arya', request: 16 },
        { id: 5, productName: 'Targaryen', firstName: 'Daenerys', request: 23 },
        { id: 6, productName: 'Melisandre', firstName: null, request: 52 },
        { id: 7, productName: 'Clifford', firstName: 'Ferrara', request: 44 },
        { id: 8, productName: 'Frances', firstName: 'Rossini', request: 36 },
        { id: 9, productName: 'Roxie', firstName: 'Harvey', request: 65 },
    ];
    const donutData = {
        series: [30, 27, 15],
        options: {
            chart: {
                type: 'donut',
            },
            legend: {
                position: 'bottom'
            },
            responsive: [{
                breakpoint: 480,
            }],
            plotOptions: {
                pie: {
                    donut: {
                        // hollow: {
                        // margin: 15,
                        // size: '70%',
                        // imrequest: '../../css/imrequests/a-icon.jpg',
                        // imrequestWidth: 64,
                        // imrequestHeight: 64,
                        // imrequestClipped: false
                        // },
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true,
                                label: '물품 요청 현황',
                                fontSize: '15px',
                                color: 'black'
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
            labels: ["입고", "출고", "이동"],
            title: {
                text: '입고, 출고, 이동에 관한 물품 요청 현황',
                align: 'center'
            },
        },
    }
    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={donutData.options}
                    series={donutData.series}
                    type="donut"
                    width={500}
                    align="center"
                />
            </div>
        </div>
    )
}

export default GraphDonutJunior