import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

import Autocomplete from 'react-google-autocomplete';

import { LOCATIONS } from '../../data';
 
const params = {v: '3.exp', key: 'AIzaSyAYlCMRcL4ngJHVxUS0tQLW-7O2Ni40VkQ'};
 
/* registering key 
https://developers.google.com/maps/documentation/javascript/get-api-key
*/
export default class Maps extends React.Component {
 
  constructor(props){
      super(props);
      this.state = {
          mapCenter: {
            lat: 51.5258541,
            lng: -0.08040660000006028
          },
          markers: LOCATIONS
      }
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
 
  onCloseClick() {
    console.log('onCloseClick');
  }
 
  onClick(e) {
    console.log('onClick', e);
  }
 
  render() {
    return (
        <div>
            <Autocomplete
                style={{width: '90%'}}
                onPlaceSelected={(place) => {
                    var lat = place.geometry.location.lat();
                    var lng = place.geometry.location.lng();
                    var newMarkers = [
                        { lat: lat + 0.01 , lng: lng - 0.001},
                        { lat: lat + 0.02 , lng: lng - 0.002},
                        { lat: lat + 0.03 , lng: lng - 0.003},
                        { lat: lat + 0.04 , lng: lng - 0.004},
                        { lat: lat + 0.05 , lng: lng - 0.005}
                    ]
                    this.setState({
                        mapCenter: { 
                            lat: lat, 
                            lng: lng
                        },
                        markers: newMarkers
                    })
                    //var lat = place.geo
                }}
                types={['(regions)']}
                componentRestrictions={{country: "ind"}}
            />
            <Gmaps
                width={'800px'}
                height={'600px'}
                lat={this.state.mapCenter.lat}
                lng={this.state.mapCenter.lng}
                zoom={10}
                loadingMessage={'Be happy'}
                params={params}
                onMapCreated={this.onMapCreated}>
                {this.state.markers.map(item => <Marker
                lat={item.lat}
                lng={item.lng}
                draggable={true}
                onDragEnd={this.onDragEnd} />)}
        </Gmaps>
      </div>
    );
  }
 
};