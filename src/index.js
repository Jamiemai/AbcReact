import React from 'react';
import ReactDOM from 'react-dom';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();
serviceWorker.register();
