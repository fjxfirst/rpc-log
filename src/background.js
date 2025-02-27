

import { contentMessageHandler, contentDisConnectHandler, contentPortHandler } from './backend/content_port_handle';
import { panelMessageHandler, panelDisconnectHandler, panelPortHandler } from './backend/panel_port_handle';

const portHandle = (port, portHandler, messageHandler, disconnectHandler) => {
  console.log(`${port.name}的sender`, port.sender);
  portHandler(port);
  port.onMessage.addListener(messageHandler);
  port.onDisconnect.addListener(() => {
    // 关闭panel时也会触发这个掉线
    console.log(`${port.name}的background掉线了`);
    port.onMessage.removeListener(messageHandler);
    disconnectHandler(port);
  });
};

chrome.runtime.onConnect.addListener((port) => {
  if (port.name.startsWith('panel-')) {
    portHandle(port, panelPortHandler, panelMessageHandler, panelDisconnectHandler);
  } else if (port.name === 'content') {
    portHandle(port, contentPortHandler, contentMessageHandler, contentDisConnectHandler);
  }
});
