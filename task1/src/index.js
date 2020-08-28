import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import * as serviceWorker from './serviceWorker';

// data
import {state} from './redux/state'
import {post} from './redux/state'
// render
import {renderEntireTree} from './render'



renderEntireTree(state.UsersData, post)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
