import React, { Component } from 'react';

import MasterPage from '../../components/masterpage';

import { CONTACTINFO } from '../../data';

export default class ContactUs extends Component {
    render(){
        var { storeLocation,
          storeHours,
          reservationNo,
          officePhoneNumber,
          fax,
          email: Email
        } = CONTACTINFO;
        return (
          <MasterPage>
            <div id="body">
            <div class="content">
              <div class="body">
                <h2>CONTACT US</h2>
                <ul>
                  <li>
                    <h4> This website template has been designed by free website templates for you, for free. You can replace all this text with your own text. </h4>
                    <p> You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forum. </p>
                  </li>
                </ul>
                <table>
                  <tr>
                    <td><span>Store Location</span></td>
                    <td>:{storeLocation}</td>
                  </tr>
                  <tr>
                    <td><span>Store hours</span></td>
                    <td>:{storeHours}</td>
                  </tr>
                  <tr>
                    <td><span>Reservation Number</span></td>
                    <td>:{reservationNo}</td>
                  </tr>
                  <tr>
                    <td><span>Office Phone Number</span></td>
                    <td>:{officePhoneNumber}</td>
                  </tr>
                  <tr>
                    <td><span>Fax Number</span></td>
                    <td>:{fax}</td>
                  </tr>
                  <tr>
                    <td><span>Email</span></td>
                    <td>:{Email}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          </MasterPage>
        );
    }
}