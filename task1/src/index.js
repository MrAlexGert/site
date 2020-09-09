import './index.scss';
import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';


import { Provider } from 'react-redux'
import store from './redux/redux_store'



ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
)


serviceWorker.unregister();
