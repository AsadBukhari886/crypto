import React, { useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import './Ts_particles.css';
import Img_url from '../img_url/Img_url';


function Ts_Particles(props) {
    const [hover, setHover] = useState(true)

    useEffect(() => {
        document.body.addEventListener('mouseover', () => {
            setHover(false)
        }, true)
        return () => {
            document.body.addEventListener("mouseout", () => {
                setHover(true)
            }, true)
        }
    })
    // const [search, setSearch] = useState(false)
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    function url(url) {
        return url
    }
    console.log("componend", Img_url("this is image"))
    console.log("function", url("this is me"))
    return (
        <div>
            <Particles
                id="tsparticles"
                height="120px"
                width="300px"
                init={particlesInit}
                loaded={particlesLoaded}
                onClick={() => alert("this is event handler")}
                options={{
                    // background: {
                    //     color: {
                    //         value: "#ffffff",
                    //     },
                    // },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "repulse",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                                background: {
                                    color: {
                                        value: "#000000"
                                    }
                                }
                            },
                            resize: true,
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
                            onClick: {
                                
                            }
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#000000",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "straight",
                            enable: hover,
                            // outMode: "bounce",
                            random: false,
                            speed: 0.1,
                            straight: false,
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
                            type: "images",

                            images: [
                                props.search ? { src: `${url("https://help.twitter.com/content/dam/help-twitter/brand/logo.png")}`, height: 20, width: 20 } : { src: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpdGNvaW58ZW58MHx8MHx8&w=1000&q=80" },
                                { src: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpdGNvaW58ZW58MHx8MHx8&w=1000&q=80', height: 10, width: 10 }


                            ],
                            container: [
                                <Img_url />
                            ]

                        },

                        size: {
                            random: false,
                            value: 35,
                        },
                    },
                    detectRetina: true,
                }}

            />
            {/* https://help.twitter.com/content/dam/help-twitter/brand/logo.png */}
        </div>
    )
}

export default Ts_Particles
