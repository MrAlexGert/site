import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

// import {state, subscribe} from './redux/state'
// import { addPost, updateNewPostText } from './redux/state'
import store from './redux/state'

const renderEntireTree = (data) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={data} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    )
}
renderEntireTree(store.getState())

store.subscribe(renderEntireTree)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
