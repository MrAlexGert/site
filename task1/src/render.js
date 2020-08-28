import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

 export const renderEntireTree = (state, post) => {
    ReactDOM.render(
      <React.StrictMode>
        {/* <App UsersData={state.UsersData} addPost={post}/> */}
        <App UsersData={state} addPost={post}/>
      </React.StrictMode>,
      document.getElementById('root')
    )
  }