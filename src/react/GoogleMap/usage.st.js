import React from 'react';
import {storiesOf} from '@storybook/react';
import OverlayViewContainer from "./OverlayViewContainer";
import {CustomPopupComponent} from "./CustomPopup";
import Map from "./Map";
import withGoogleMap from "./withGoogleMap";

const locations = [
  {name: 'Gardens by the Bay', lat: 1.2846583, lng: 103.850894}
]

class App extends React.Component {
  state = {
    time: new Date()
  }
  position = new google.maps.LatLng(37.814, -122.478)

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000)
  }

  render() {
    return (
      <Map zoom={13} center={this.position}>
        <OverlayViewContainer
          position={this.position}>
          <CustomPopupComponent>
            <div>
              <h2>Timer Popup</h2>
              <p>A custom react popup that shows the current time. <br/>Updates every second.</p>
              <pre><u>{this.state.time.toLocaleString()}</u></pre>
            </div>
          </CustomPopupComponent>
        </OverlayViewContainer>
      </Map>
    );
  }
}

const AppWithGoogleMap = withGoogleMap(App, '');

storiesOf('React - Portal', module)
  .add('GoogleMap', () => <AppWithGoogleMap/>);
