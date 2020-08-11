import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import "./style.css";

// function Data(props) {
//     console.log("Propss are", props);
//     // console.log("Props are", props.image);
//     return (

//     )
// }

export default function() {
        return (
            <div className="carousel container pb-4 pt-4">
                <div className='container-fluid' >
                        <div style={{textAlign:"center"}}>
                            <h1> Our Proud Customers</h1>
                        </div>
                </div>
                <div className="container-fluid MyCarousel" fluid="true" style={{ textAlign: "center" }}>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img style={{ "height": "500px" }}
                                    className="d-block w-100"
                                    src={'assets/img/Rest1.jpeg'} />
                                <Carousel.Caption>
                                    <h3>Sample Customer Portfolio</h3>
                                </Carousel.Caption>
                            </Carousel.Item >
                            <Carousel.Item >
                                <img style={{ "height": "500px" }}
                                    className="d-block w-100"
                                    src={'assets/img/Rest2.jpeg'} />
                                <Carousel.Caption>
                                    <h3>Sample Customer Portfolio</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img style={{ "height": "500px" }}
                                    className="d-block w-100"
                                    src={'assets/img/Rest3.jpeg'} />
                                <Carousel.Caption>
                                    <h3>Sample Customer Portfolio</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img style={{ "height": "500px" }}
                                    className="d-block w-100"
                                    src={'assets/img/Rest4.jpeg'} />
                                <Carousel.Caption>
                                    <h3>Sample Customer Portfolio</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img style={{ "height": "500px" }}
                                    className="d-block w-100"
                                    src={'assets/img/Rest5.jpeg'} />
                                <Carousel.Caption>
                                    <h3>Sample Customer Portfolio</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
