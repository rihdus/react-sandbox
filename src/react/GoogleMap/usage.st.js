import React from 'react';
import { storiesOf } from '@storybook/react';

const locations = [
   { name: 'Gardens by the Bay', lat: 1.2846583, lng: 103.850894 }
]

function usage() {
   return <GoogleMap />
}

function GoogleMap() {
   return <Map center={{lat, lng}}>
      {locations.map(({lat, lng}) => 
         <Marker lat={lat} lng={lng}>
            <InfoWindow lat={lat} lng={lng}>
               <p>This is an info bubble</p>
            </InfoWindow>
         </Marker>
      )}
   </Map>
}

function Map (props) {
   return props.children;
}

function Marker (props) {
   return props.children;
}

function InfoWindow (props) {
   return props.children;
}

storiesOf('React - Portal', module)
   .add('GoogleMap', usage);
