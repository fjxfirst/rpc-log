function injectScript(path) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = window.chrome.runtime.getURL(path);
    s.onload = function () {
      this.remove();
      resolve();
    };
    s.onerror = reject;
    (document.head || document.documentElement).appendChild(s);
  });
}
injectScript('js/inject.js').then(()=>{
  console.log('chrome插件相关脚本注入成功');
});
const destructor = () => {
  window.removeEventListener('message', pageMessageHandle);
  window.removeEventListener('beforeunload', pageUnloadHandle);
};
// 每次执行content.js时，先移除事件
destructor();
let portContentToBackground = chrome.runtime.connect({ name: 'content' });

const pageMessageHandle = (event) => {
  const { source, data } = event;
  if (source === window && data.type === 'FROM_ATU_PAGE') {
    const { payloadData } = data;
    portContentToBackground.postMessage({ type: 'REQUEST_EVENT', data: payloadData });
  }
};
const pageUnloadHandle = (event) => {
  try {
    portContentToBackground && portContentToBackground.postMessage({ type: 'PAGE_UNLOAD' });
  } catch (err) {
    alert(err.toString());
  }
};

window.addEventListener('message', pageMessageHandle);
window.addEventListener('beforeunload', pageUnloadHandle);

let timer = setInterval(() => {
  portContentToBackground.postMessage({ type: 'PING' });
}, 20000);

portContentToBackground.onMessage.addListener((event) => {
});

portContentToBackground.onDisconnect.addListener((e) => {
  console.log('content掉线了', e);
  clearInterval(timer);
  portContentToBackground = chrome.runtime.connect({ name: 'content' });
});
