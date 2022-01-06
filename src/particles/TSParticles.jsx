import React, { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import './TSParticles.css';
import imageData from '../imageData';
import Popup from '../popup/Popup';


function TSParticles() {
  const [shouldPopupshow, setShouldPopupshow] = useState(false);
  const [tsParticles, setTsParticles] = useState(null);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState('');
  const [details, setDetails] = useState();

  useEffect(() => {
    setFilteredData(imageData);
    setAllData(imageData);

  }, [])

  const changer = (e) => {
    let value = e.target.value.toLowerCase();
    setValue(e.target.value)
    let result = [];
    result = allData.filter((data, index) => {
      const search = data.name.toLowerCase()
      return search.search(value) !== -1;
    })
    setFilteredData(result)
  }

  const particlesInit = (main) => {
    setTsParticles(main);
  };

  const particlesLoaded = (container) => {

    tsParticles.setOnClickHandler((e, particles) => {
      for (const p of particles) {
        setDetails(p.shapeData)
        setShouldPopupshow(true)
      }
      if (shouldPopupshow) {
        setShouldPopupshow(false)
      }
    });
  };



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
                distance: 100,
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
              distance: 200,
              enable: true,
              opacity: 0.7,
              width: 3,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: true,
              direction: 'straight',
              random: false,
              outMode: "out",
              speed: 1,
              straight: true,
            },
            number: {
              density: {
                enable: false,
                area: 80,
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
          placeholder='search'
          value={value}
          onChange={(event) => changer(event)}
        />
      </div>
    </div>

  );

}

export default TSParticles;