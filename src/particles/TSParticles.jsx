import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import Img_url from '../img_url/Img_url';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Popup from '../popup/Popup';


function TSParticles(props) {
  const [shouldPopupshow, setShouldPopupshow] = useState(false)
  const [tsParticles, setTsParticles] = useState(null);

  const particlesInit = (main) => {
    // alert("init")
    setTsParticles(main);
  };

  const particlesLoaded = (container) => {
    console.log("loader")
    // ON CLICK LISTENERS FOR EACH PARTICLE
    tsParticles.setOnClickHandler((e, particles) => {
      console.log(e)
      for (const p of particles) {
        console.log(particles)
      }
      setShouldPopupshow(!shouldPopupshow)
      //  shouldPopupshow ? '<Popup />' : "false"


    });
  };

  function url(url) {
    return url;
  }


  return (
    <div>
      <Particles
        id='tsparticles'
        height='120px'
        width='300px'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          interactivity: {
            events: {
              onClick: false,
              onHover: false,
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
              onClick: {},
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#000000',
              distance: 150,
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
              speed: 1,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: 'images',

              images: [
                {
                  src: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png',
                  height: 20,
                  width: 20,
                },

                {
                  src: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpdGNvaW58ZW58MHx8MHx8&w=1000&q=80',
                  height: 10,
                  width: 10,
                },
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
      {shouldPopupshow ? <Popup /> : null}
      {/* https://help.twitter.com/content/dam/help-twitter/brand/logo.png */}
    </div>

  );
}

export default TSParticles;