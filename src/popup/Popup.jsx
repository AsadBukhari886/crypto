import React from 'react';
import FlowData from './flowData/FlowData';
import './popup.css'

function Popup(props) {
    console.log("popup data:>", props.detail)
    return (
        <div className='main_popup'>
            <div className='popup'>
                <div className="header">
                    <div className="partical_image">
                        <img src={props.detail?.image_address} alt="url" />

                        <h2>{props.detail.name}</h2>
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
                        <FlowData color={'red'} button={"83"} />
                        <FlowData color={"paret"} button={"75"} />
                        <FlowData color={"red"} button={"22"} />
                        <FlowData color={"lightgreen"} button={"94"} />
                    </div>
                    {/* <div className="detail2"><p>{props.width}</p></div> */}

                </div>
                <div className='link'>
                    <a href="">see more>>>> </a>
                </div>
            </div>
        </div>
    )
}

export default Popup
