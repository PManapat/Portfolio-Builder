import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

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
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        <div className="col-sm-12 btn btn-warning">
                            Our Proud Customers
                             </div>
                    </div>
                </div>
                <div className='container-fluid' fluid={true} style={{ textAlign: "center" }}>
                    <div>
                        <Carousel>
                            <Carousel.Item>
                                <img style={{ "height": "500px" }}
                                    className="d-block w-100"
                                    src={'assets/img/img1.jpg'} />
                                <Carousel.Caption>
                                    <h3>Sample Customer Portfolio</h3>
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
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
