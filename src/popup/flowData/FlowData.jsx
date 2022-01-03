import React from 'react';
import './Flowdata.css'

function FlowData(props) {
    return (
        <div className='flowData'>
            <div className="icon">
                <img src='https://upload.wikimedia.org/wikipedia/commons/3/36/ETC_Logo.png' alt="icon" />
            </div>
            <div className="button">
                <button style={{ backgroundColor: `${props.color}` }} onClick={() => alert("button clicked")}>{props.button}</button>
            </div>
        </div>
    )
}

export default FlowData
