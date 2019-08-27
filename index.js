export const smartImpactorPostMessage = {
  _domain: '',
  _postMessage(event, payload) {
    window.parent.postMessage({
      type: 'SMART_IMPACTOR_MESSAGE',
      event: event,
      payload: payload
    }, smartImpactorPostMessage._domain);
  },
  init(domain) {
    smartImpactorPostMessage._domain = domain;

    document.addEventListener("resize", function() {
      // Get width and height of the window excluding scrollbars
      var width = document.documentElement.clientWidth;
      var height = document.documentElement.clientHeight;

      smartImpactorPostMessage.postMessage('resize', {
        width: width,
        height: height
      });
    });
  },
  onSubmitSuccess() {
    smartImpactorPostMessage._postMessage('submitSuccess');
  },
  onSubmitError(error) {
    smartImpactorPostMessage._postMessage('submitError', {
      error: error
    });
  }
};
