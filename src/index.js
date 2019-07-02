import React from 'react';
import ReactDOM from 'react-dom';
import './themes/base.css';
import './themes/styles.css';
import './themes/media.css';
import './themes/layout.css';
import './themes/animatons.css';
import App from './navigation';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-143162794-1');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
