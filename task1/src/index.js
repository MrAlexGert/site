import './index.scss';
import * as serviceWorker from './serviceWorker';

import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './Components/App';
import {BrowserRouter} from 'react-router-dom' // import from libraries react-router-dom for dynamic site 

import { Provider } from 'react-redux' // import from libraries react-redux for create context container
import store from './redux/redux_store'



ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} > 
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
    
)


serviceWorker.unregister();
