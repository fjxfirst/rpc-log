import './styles/cssreset.css'
import ReactDom from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux'
import {store} from './store'
import {panelPortInit} from './panel_message/panel_port_creator';

panelPortInit();
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
