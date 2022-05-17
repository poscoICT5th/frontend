import React from 'react'
import Barcode from '../Function/Barcode'
import GraphBar from './GraphBar'
import GraphDonut from './GraphDonut'

function MainDashboard() {
    return (
        <div>
            <div className='grid grid-cols-3 gap-4 m-16'>
                <div><GraphDonut /></div>
                <div><GraphBar /></div>
                <div><GraphDonut /></div>
                <div><GraphDonut /></div>
                <Barcode />test
            </div>
        </div>
    )
}

export default MainDashboard