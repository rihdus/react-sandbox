function injectGoogleMapsScript(apiKey, onloadCallbackFnName) {
  const script = document.createElement('script');
  return new Promise((resolve, reject) => {
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${onloadCallbackFnName}`;
    script.type = 'text/javascript';
    script.onerror = reject

    // Setup on google maps ready callback
    window[onloadCallbackFnName] = () => {
      delete window[onloadCallbackFnName];
      resolve();
    };

    if (document.head) {
      document.head.appendChild(script);
    }
  });
}

export default injectGoogleMapsScript;
