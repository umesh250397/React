import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class Carousel_react extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="http://via.placeholder.com/900x500" />
                </div>
                <div>
                    <img src="http://via.placeholder.com/900x500" />
                </div>
                <div>
                    <img src="http://via.placeholder.com/900x500" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default Carousel_react;
