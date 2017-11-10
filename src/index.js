/* Redux and state management */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer  } from 'redux-devtools-extension';

/* React and DOM management */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { globalReducer } from 'state/reducers/global';
import { initialStateFactory } from 'state/initial';
import { Container } from 'reactstrap';

import registerServiceWorker from 'registerServiceWorker';

/* Routes */
import Homepage from 'routes/Homepage';
import DataSource from 'routes/DataSource';
import Character from 'routes/Character';
import Export from 'routes/Export';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import hello from 'hellojs/dist/hello.all.js';
import { MsGraph } from './config';

hello.init({
    msft: {
      id: MsGraph.appId,
      oauth: {
        version: 2,
        auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
      },
      scope_delim: ' ',
      form: false
    },
  },
  { redirect_uri: window.location.href }
);

const store = createStore(
  globalReducer,
  initialStateFactory(),
  devToolsEnhancer({})
);

/* Routes */
ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router>
        <Container>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/datasource" component={DataSource} />
          <Route exact={true} path="/character" component={Character} />
          <Route exact={true} path="/export" component={Export} />
        </Container>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
