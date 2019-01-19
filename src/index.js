import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

console.log("welcome in Hau's console");

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
