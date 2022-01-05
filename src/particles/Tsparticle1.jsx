import React, { useState } from 'react'
import Particles from 'react-tsparticles';


function Tsparticle1(props) {
    console.log(props.data)
    // const [tsParticles, setTsParticles] = useState(null);
    // const [details, setDetails] = useState()
    // const [shouldPopupshow, setShouldPopupshow] = useState(false);



    // const particlesInit = (main) => {
    //     setTsParticles(main);
    // };

    // const particlesLoaded = (container) => {

    //     tsParticles.setOnClickHandler((e, particles) => {
    //         for (const p of particles) {
    //             console.log("name:>", p.shapeData.name)
    //             setDetails(p.shapeData)
    //             setShouldPopupshow(true)
    //         }
    //         if (shouldPopupshow) {
    //             // setShouldPopupshow(false)
    //             setShouldPopupshow(false)
    //         }
    //     });
    // };
    for (const keys of Object.entries(props.data)) {
    return (
        <div>

            <Particles
                id='tsparticles'
                init={props.particlesInit}
                loaded={props.particlesLoaded}
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
                            speed: 0.0002,
                            straight: true,
                        },
                        number: {
                            density: {
                                enable: false,
                                area: 800,
                            },
                            value: props.filteredData.length + 2,
                        },
                        opacity: {
                            value: 1,
                            color: "red"
                        },
                        shape: {
                            type: 'images',

                            images: [
                                ...props.filteredData
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


        </div>
    )
}
}

export default Tsparticle1
