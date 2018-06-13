import React, { Component } from 'react';

import MasterPage from '../../components/masterpage';
import { Carousel } from 'react-responsive-carousel';

import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


export default class Home extends Component {
    render(){
        return (
          <MasterPage>
            <Carousel showThumbs={false} showArrows={false}>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={image4} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={image5} />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
          </MasterPage>
        );
    }
}