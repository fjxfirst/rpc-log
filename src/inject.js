window.__atu_devtool = {
  recordReq: (reqHead, reqData, reqIdx, fetchTime) => {
    const payloadData = {
      requestType: 'FETCH',
      isReceived: false,
      reqHead,
      reqData,
      reqIdx,
      fetchTime
    };
    window.postMessage({type: 'FROM_ATU_PAGE', payloadData});
  },
  recordFetchRes: (resBody, reqIdx, receiveTime) => {
    window.postMessage({
      type: 'FROM_ATU_PAGE',
      payloadData: {
        requestType: 'FETCH',
        isReceived: true,
        resBody,
        receiveTime,
        id: `fetch-${reqIdx}`
      }
    });
  },
  recordMsgRes: (resBody, receiveTime, state) => {
    window.postMessage({
      type: 'FROM_ATU_PAGE', payloadData: {
        requestType: 'MSG',
        isReceived: true,
        resBody,
        receiveTime,
        state
      }
    });
  }
};
console.log('inject.js execute')
