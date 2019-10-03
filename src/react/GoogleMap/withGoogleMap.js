import React, {Component} from 'react';

class GoogleScriptLoader extends Component {

  state = {googleMapLoaded: false};

  componentDidMount() {
    injectGoogleMapsScript('', 'reactsandboxgooglemapscriptloadcallback')
      .then(() => {
        this.setState({
          googleMapLoaded: true
        })
      })
  }

  render() {
    return this.state.googleMapLoaded ? this.props.children : null
  }

}

function injectGoogleMapsScript(apiKey, onloadCallbackFnName) {
  const script = document.createElement('script');
  return new Promise((resolve, reject) => {
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${onloadCallbackFnName}`;
    script.type = 'text/javascript';

    // Setup on google maps ready callback
    window[onloadCallbackFnName] = () => {
      delete window[onloadCallbackFnName];
      window.google ? resolve(window.google) : reject();
    };

    if (document.head) {
      document.head.appendChild(script);
    }
  });
}

const withGoogleMap = () => props => <GoogleScriptLoader>{props.children}</GoogleScriptLoader>

export default withGoogleMap;