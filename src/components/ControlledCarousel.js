import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const imgStyle = {
        marginLeft: "auto",
        marginRight: "auto",
    }

    return (
        <div>
            <div className="container-fluid"
                style={{
                    marginTop: "2vh",
                    marginBottom: "4vh",
                    width: "80%",
                    textAlign: "center",
                    background: "Aquamarine"
                }}>
                <h4 style={{ padding: "1.5vh" }}>Milburn Parish Council</h4>
            </div >

            {/*
      A "filter" style is applied to bootstrap's .carousel-control-next/prev control styles to
      darken the white "chevron" control icons - show better against a white background! This also
      has the happy consequence of turning the standard red border (applied by the index.html
      element's :focus style) highlighting the tab sequence to a light blue - handy in this case 
      because there seems to be no way of restricting the highlight to the icon itself - you get 
      the whole panel to right or left of the image
      */}

            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block"
                        width="70%"
                        src="assets/images/Milburn Village from the air (courtesy visitcumbria.com).jpg"
                        alt="Milburn Village from the air (courtesy visitcumbria.com)"
                        style={imgStyle}
                    />
                    <Carousel.Caption>
                        <p>Milburn Village from the air (courtesy visitcumbria.com)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        width="70%"
                        src="assets/images/Milburn Village Church (courtesy visitcumbria.com).jpg"
                        alt="Milburn Village Church (courtesy visitcumbria.com)"
                        style={imgStyle}
                    />
                    <Carousel.Caption>
                        <p>Milburn Village Church (courtesy visitcumbria.com)</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block"
                        width="70%"
                        src="assets/images/Milburn Village Hall.jpg"
                        alt="Milburn Village Hall"
                        style={imgStyle}
                    />
                    <Carousel.Caption>
                        <p>
                            Milburn Village Hall
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        width="70%"
                        src="assets/images/Milburn Village School (courtesy visitcumbria.com).jpg"
                        alt="Milburn Village School (courtesy visitcumbria.com)"
                        style={imgStyle}
                    />
                    <Carousel.Caption>
                        <p>
                            Milburn Village School (courtesy visitcumbria.com)
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
}

export {ControlledCarousel};