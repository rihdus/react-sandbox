import React from "react";

export const MapContext = React.createContext({
  map: null // Map instance
});

class Map extends React.Component {
  map = null;
  /** DOM container where the map canvas gets rendered. */
  mapContainer = React.createRef();

  componentDidMount() {
    /** Create new google map. */
    if (window.google) {
      /** Draw a popup in the container */
      this.map = new google.maps.Map(this.mapContainer.current, {
        zoom: this.props.zoom,
        center: this.props.center
      });
      this.setState({map: this.map})
    }
  }
  render() {
    // reference to the DOM element where the map will be rendered
    return (
      <div
        ref={this.mapContainer}
        style={{ height: "100vh", width: "100vw" }}
      >
        <MapContext.Provider value={this.map}>{this.props.children}</MapContext.Provider>
      </div>
    );
  }
}

export default Map;
