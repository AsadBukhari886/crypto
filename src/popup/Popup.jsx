import React from 'react';
import FlowData from './flowData/FlowData';
import './popup.css';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import reddit from '../images/reddit.jpg';
function Popup(props) {

  console.log('popup data:>', props.detail);
  return (
    <div>
      <div className='main_popup'>
        <div className='popup'>
          <div className='header'>
            <div className='partical_image'>
              <img src={props.detail.src} alt='url' />

              {/* <<<<<<< HEAD */}

              {/* ======= */}
              <h2>{props.detail.name}</h2>
            </div>
            <div className='partical_price'>
              <div className='big_price'>{props.detail.price}</div>
              <div className='small_price'>+$0.87 (2.04%)</div>
            </div>
            {/* // >>>>>>> 0af5107a03104789e8819fadeea5c0e902a6544b */}
          </div>
          <br />
          {/* <h2 >heading</h2> */}
          <div className='details'>
            <FlowData color={'rgb(110, 185, 110)'} button={'83'} data={props.detail.facebook} src={facebook} />
            <FlowData color={'#4b9b4b'} button={'75'} data={props.detail.twitter} src={twitter} />
            <FlowData color={'rgb(204, 0, 0)'} button={'22'} data={props.detail.reddit} src={reddit} />
            {/* <FlowData color={'lightgreen'} button={'94'} /> */}
          </div>
          <div className='link'>
            <a href='#a'>see more</a>
          </div>
        </div >
      </div >
    </div >
  );
}

export default Popup;
