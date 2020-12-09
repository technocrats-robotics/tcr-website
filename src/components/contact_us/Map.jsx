import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Header, Icon } from 'semantic-ui-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    render() {
        return (
            <div>
            <div style={{ height: '60vh', width: '95%' }} className='map'>
            <GoogleMapReact
              bootstrapURLKeys= 'AIzaSyBdhEOY7h6IdQspIT8CNN004zR3zP4DD7M'
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
          </div>
        )
      }
}