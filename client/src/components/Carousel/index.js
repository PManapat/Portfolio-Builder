import React from 'react';
import "./style.css";
import Carousel from 'react-bootstrap/Carousel'

export default function () {
    return (
        <div className="carousel container pb-4 pt-4">
            <div className='container-fluid' >
                <div style={{ textAlign: "center" }}>
                    <h2> Featured Templates </h2>
                </div>
            </div>
            <div className="container-fluid MyCarousel" fluid="true" style={{ textAlign: "center" }}>
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img1.jpg'} />
                            <Carousel.Caption>
                                <h3></h3>
                            </Carousel.Caption>
                        </Carousel.Item >
                        <Carousel.Item >
                            <img style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img2.jpg'} />
                            <Carousel.Caption>
                                <h3>Sample Customer Portfolio</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img3.jpg'} />
                            <Carousel.Caption>
                                <h3>Sample Customer Portfolio</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img4.jpeg'} />
                            <Carousel.Caption>
                                <h3>Sample Customer Portfolio</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img5.jpeg'} />
                            <Carousel.Caption>
                                <h3>Sample Customer Portfolio</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img style={{ "height": "500px" }}
                                className="d-block w-100"
                                src={'assets/img/img6.jpeg'} />
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
