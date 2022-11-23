import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Redux Import:
import { Provider } from 'react-redux';
// Import  Config function of App Store
import { createAppAsyncStore} from './store/config/storeConfig';
import AppReduxSaga from './App ReduxSaga';
import App from './App';

//We create the App Store
let appStore = createAppAsyncStore();


ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={appStore}>

  // </Provider>

      <React.StrictMode>
        <App />
    </React.StrictMode> 
  
)
