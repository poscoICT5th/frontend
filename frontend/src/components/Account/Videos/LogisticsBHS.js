import { Tooltip } from '@mui/material'
import React from 'react'

function LogisticsBHS() {
    return (
        <div className="wrapper">
            <Tooltip title="Logistics & BHS">
                <input type="checkbox" className="maincirclevideo" />
            </Tooltip>
            <div className="video">
                <video src="/videos/BHS.mp4" loop muted autoPlay playsInline />
            </div>
            <div className="text">
                <span data-text="Logistics & BHS" />
            </div>
        </div>
    )
}

export default LogisticsBHS