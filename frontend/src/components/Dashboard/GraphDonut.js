import React from 'react'
import ReactApexChart from "react-apexcharts";

function GraphDonut() {
    const donutData = {
        series: [50, 92],
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
                        // image: '../../css/images/a-icon.jpg',
                        // imageWidth: 64,
                        // imageHeight: 64,
                        // imageClipped: false
                        // },
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
            labels: ["입고", "출고"],
            title: {
                text: 'Test',
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

export default GraphDonut