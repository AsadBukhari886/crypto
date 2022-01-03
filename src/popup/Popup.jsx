import React from 'react';
import FlowData from './flowData/FlowData';
import './popup.css'

function Popup(props) {
    console.log("popup data:>", props.detail)
    return (
        <div className='popup'>
            <div className="header">
                <div className="partical_image">
                    <img src={props.detail?.image_address} alt="image url" />

                    <h2>name</h2>
                </div>
                <div className="partical_price">
                    <div className="big_price">$19.49</div>
                    <div className="small_price">+$0.87 (2.04%)</div>
                </div>
            </div>
            <br />
            {/* <h2 >heading</h2> */}
            <div className='details'>
                <div className="detail1">
                    <FlowData color={'red'} />
                    <FlowData color={"paret"} />
                    <FlowData color={"red"} />
                    <FlowData color={"lightgreen"} />
                </div>
                {/* <div className="detail2"><p>{props.width}</p></div> */}
                <a href="">see more>>>> </a>
            </div>
        </div>
    )
}

export default Popup
