import React, { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import './TSParticles.css'

import Popup from '../popup/Popup';
import bnb from '../images/bnb.png';
import eth from '../images/eth.png';
import xrp from '../images/xrp.png';
import xlc from '../images/xlc.png';
import ltc from '../images/ltc.jpg';
import eos from '../images/eos.png';
import btc from '../images/btc.png';

// import { ltc } from '../images/Image';


function TSParticles(props) {
  const [shouldPopupshow, setShouldPopupshow] = useState(false);
  const [tsParticles, setTsParticles] = useState(null);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState('')
  const [details, setDetails] = useState()

  const particlesInit = (main) => {
    setTsParticles(main);
  };

  const particlesLoaded = (container) => {

    tsParticles.setOnClickHandler((e, particles) => {
      for (const p of particles) {
        console.log("name:>", p.shapeData.name)
        setDetails(p.shapeData)
        setShouldPopupshow(true)
      }
      if (shouldPopupshow) {
        // setShouldPopupshow(false)
        setShouldPopupshow(false)
      }
    });
  };

  // console.log("data1", details?.src)


  let imageData = [
    {
      src: bnb,
      height: 20,
      width: 20,
      name: "bnd"
    },

    {
      src: eth,
      height: 10,
      width: 10,
      name: "eth"
    },
    {
      src: btc,
      height: 10,
      width: 10,
      name: "btc bitcoin"
    },
    {
      src: ltc,
      height: 10,
      width: 10,
      name: "ltc"
    },
    {
      src: xrp,
      height: 10,
      width: 10,
      name: "xrp"
    },
    {
      src: xlc,
      height: 10,
      width: 10,
      name: "xlc"
    },
    {
      src: eos,
      height: 10,
      width: 10,
      name: "eos"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/36/ETC_Logo.png",
      height: 10,
      width: 10,
      name: "ETC",
      image_address: "https://upload.wikimedia.org/wikipedia/commons/3/36/ETC_Logo.png"
    },


  ]
  useEffect(() => {
    setFilteredData(imageData);
    setAllData(imageData);

  }, [])

  // console.log("images", imageData.filter)

  const changer = (e) => {
    let value = e.target.value.toLowerCase();
    setValue(value)
    console.log(value)
    let result = [];
    result = allData.filter((data, index) => {
      return data.name.search(value) != -1;
    })
    setFilteredData(result)
  }
  // console.log(filteredData)


  return (
    <div>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          interactivity: {
            events: {
              onClick: false,
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: false,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#000000',
              distance: 300,
              enable: true,
              opacity: 0.7,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              direction: 'straight',
              random: false,
              outMode: "bounce",
              speed: 1,
              straight: true,
            },
            number: {
              density: {
                enable: false,
                area: 800,
              },
              value: filteredData.length + 2,
            },
            opacity: {
              value: 1,
              color: "red"
            },
            shape: {
              type: 'images',

              images: [
                ...filteredData
              ],
            },

            size: {
              random: false,
              value: 35,
            },
          },
          detectRetina: true,
        }}
      />

      {shouldPopupshow ? <Popup show={setShouldPopupshow} detail={details} /> : null}
      <div className='input'>
        <input
          placeholder='search it here'
          value={value}
          onChange={(event) => changer(event)}
        />
      </div>
    </div>

  );
}

export default TSParticles;