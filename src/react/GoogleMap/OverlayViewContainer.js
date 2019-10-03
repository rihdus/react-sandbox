import React from "react";
import ReactDOM from 'react-dom';
import { MapContext } from './Map';

class OverlayViewContainer extends React.Component {
  /**
   * Overlay instance.
   * */
  overlay = null;

  /**
   * Dom element reference to the content rendered in the overlay.
   * */
  el = null;

  componentWillUnmount() {
    this.overlay.setMap(null);
    delete this.overlay;
  }

  render() {
    return (
      <MapContext.Consumer>
        {map => {
          if (map) {
            this.el = this.el || createOverlayElement();
            const OverlayView = createOverlayViewClass();

            this.overlay = this.overlay ||
              new OverlayView({ position: this.props.position, content: this.el });
            this.overlay.setMap(map);

            return ReactDOM.createPortal(this.props.children, this.el);
          } else {
            return null;
          }
        }}
      </MapContext.Consumer>
    );
  }
}

export default OverlayViewContainer;

function createOverlayElement() {
  const el = document.createElement('div');
  el.style.position = 'absolute';
  el.style.display = 'inline-block';
  el.style.width = '9999px';
  return el;
}

function createOverlayViewClass() {

  class OverlayView extends window.google.maps.OverlayView {
    position = null;
    content = null;

    constructor(props) {
      super(props);
      props.position && (this.position = props.position);
      props.content && (this.content = props.content);
    }

    /** Called when the popup is added to the map. */
    onAdd = () => {
      this.getPanes().floatPane.appendChild(this.content);
    };

    /** Called when the popup is removed from the map. */
    onRemove = () => {
      if (this.content.parentElement) {
        this.content.parentElement.removeChild(this.content);
      }
    };

    /** Called each frame when the popup needs to draw itself. */
    draw = () => {
      const divPosition = this.getProjection().fromLatLngToDivPixel(
        this.position
      );
      this.content.style.display = 'inline-block';
      this.content.style.left = divPosition.x + 'px';
      this.content.style.top = divPosition.y + 'px';
    };
  }
  return OverlayView;
}
