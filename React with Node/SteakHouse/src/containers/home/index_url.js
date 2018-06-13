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
  constructor(props){
    super(props);
    this.state ={
      items: [
        { text: 'Legend 1' , image: {image1} },
        { text: 'Legend 2' , image: {image2} },
        { text: 'Legend 3' , image: {image3} },
        { text: 'Legend 4' , image: {image4} },
        { text: 'Legend 5' , image: {image5} }
      ]
    }
  }
    render(){
        return (
          <MasterPage>
            <Carousel showThumbs={false} showArrows={false}>
              {this.state.items.map(item => {
                return <div>
                <img src={item.image} />
                <p className="legend">{item.text}</p>
            </div>
              })}
            </Carousel>
          </MasterPage>
        );
    }
}