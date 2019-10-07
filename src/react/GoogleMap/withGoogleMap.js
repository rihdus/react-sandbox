import React, {Component} from 'react';
import injectGoogleMapsScript from "../../utils/inject-script/injectGoogleMapsScript";
import PropTypes from "prop-types";

export class GoogleScriptLoader extends Component {

  state = {googleMapLoaded: false};

  componentDidMount() {
    const {apiKey, cbName = 'googlemapscriptloadcallback'} = this.props;
    injectGoogleMapsScript(apiKey, cbName)
      .then(() => this.setState({
        googleMapLoaded: true
      }));
  }

  render() {
    return this.state.googleMapLoaded ? this.props.children : null;
  }
}

GoogleScriptLoader.propTypes = {
  apiKey: PropTypes.string.isRequired,
  cbName: PropTypes.string
}

const withGoogleMap = (Component, apiKey, options = {}) =>
  () => <GoogleScriptLoader
    apiKey={apiKey}
    cbName={options.cbName}
  ><Component/></GoogleScriptLoader>

export default withGoogleMap;
