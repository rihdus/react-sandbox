import injectGoogleMapsScript from "./injectGoogleMapsScript";

describe('injectGoogleMapsScript', () => {
  
  const mockGoogleApiObject = {};
  
  it('should resolve promise after loading google maps api from the google maps scipry', () => {
    const promise = injectGoogleMapsScript('mock-google-api-key', 'mockOnLoadCb');
    expect(global.mockOnLoadCb).toBeInstanceOf(Function);
    
    // manually setup global google maps api.
    global.google = mockGoogleApiObject;
    global.mockOnLoadCb();
    
    expect(promise).resolves.toBeUndefined();
  });

  it('should reject promise if google api fails to load successfully', () => {
    const promise = injectGoogleMapsScript('mock-google-api-key', 'mockOnLoadCb');

    // manually trigger script load fail
    const script = global.document.getElementsByTagName('script')[0]
    expect(script.onerror).toBeInstanceOf(Function);
    script.onerror();
    
    expect(promise).rejects.toBeUndefined();
  });
});
