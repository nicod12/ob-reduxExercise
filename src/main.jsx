import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Redux Import:
import { Provider } from 'react-redux';
// Import  Config function of App Store
import { createAppAsyncStore} from './store/config/storeConfig';
import AppReduxSaga from './App ReduxSaga';

//We create the App Store
let appStore = createAppAsyncStore();


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <React.StrictMode>
     <AppReduxSaga />
    </React.StrictMode> 
  </Provider>
)
