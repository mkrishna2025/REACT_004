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
          <div id="background">
  <div id="page">
    <div id="header">
      <ul class="navigation">
        <li><a href="food.html">OUR FOOD</a></li>
        <li><a href="beer.html">OUR BEER</a></li>
      </ul>
      <a id="logo" href="index.html"><img src="images/logo.jpg" width="276" height="203" alt="" /></a>
      <ul id="navigation">
        <li><a href="reservation.html">RESERVATION</a></li>
        <li><a href="contact.html">CONTACT US</a></li>
      </ul>
    </div>
    <div id="body">
      <div class="slider">
        <ul>
          <li class="first">
            <h2>FUSCE SIT AMET EGET UTRU</h2>
            <img src="images/nine-dollars.gif" alt="" width="213" height="64" />
            <p> Curabitur omare dolor arcu. Sed gravida eu risus dapibus eu posuere quam pulvinar </p>
            <a href="reservation.html">BOOK A TABLE</a> </li>
          <li> <a href="#"> <img src="images/barbeque.jpg" width="640" height="331" alt="" /></a> </li>
        </ul>
      </div>
      <ul id="featured">
        <li class="first"><a href="food.html"><img src="images/food-menu.jpg" width="470" height="237" alt="" /></a> </li>
        <li><a href="beer.html"><img src="images/beer.jpg" width="460" height="237" alt="" /></a> </li>
      </ul>
      <div class="section">
        <h3>$7 LUNCH &amp; DINNER BUFFET </h3>
        <p> Nulla a tellus in erat ullamcorper trisque. Suspendisse at mauris. Sed ut eros. <a href="#" class="more">&nbsp;</a> </p>
      </div>
      <div id="content">
        <div class="article">
          <ul>
            <li>
              <h2><a href="#">Duis a quam sem Vivamus elit felis</a></h2>
              <p> <a href="#"><img src="images/waiter.jpg" width="162" height="101" alt="" /></a> This website template has been designed by Free website templates for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. </p>
            </li>
            <li>
              <h2><a href="#">Vestibulum at neque nibh condimentum</a></h2>
              <p> <a href="#"><img src="images/food.jpg" width="162" height="122" alt="" /></a> If you're having problems editing this website template, then don't hesitate to ask for help on the forum. </p>
              <p> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec tellus quis enim pharetra molestie. </p>
            </li>
          </ul>
        </div>
        <div class="aside">
          <h3>Duis a quam sem Vivamus elit felis</h3>
          <ul>
            <li>
              <h2>Cum sociis natoque penatibusmagnis</h2>
              <p> parturient montes, nascetur ridiculus mus. Aliquam odio neque, elementum nec laoreet </p>
            </li>
            <li>
              <h2>Looking for more templates?</h2>
              <p> Just browse through all our Free Website Templates and find what you're looking for. </p>
            </li>
            <li class="last">
              <h2>Nulla vitae quam in sapien lobortis </h2>
              <p> sed vitae magna. Nulla risus felis, dapibus vitae porta eu, pulvinar vitae tellus.Pellen tesque habitant morbi tristique sapien </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="footer">
      <ul>
        <li class="first">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="beer.html">Beer</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </li>
        <li> <span>Follow us:</span> <a href="#" class="facebook">&nbsp;</a> <a href="#" class="twitter">&nbsp;</a> </li>
      </ul>
      <p>Copyright &copy; 2012 <a href="#">Company Name</a> All rights reserved | Website Template By <a target="_blank" href="http://www.freewebsitetemplates.com/">freewebsitetemplates.com</a></p>
    </div>
  </div>
</div>
        );
    }
}