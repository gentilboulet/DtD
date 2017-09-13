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
import Character from 'routes/Character';
import Export from 'routes/Export';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

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
          <Route exact={true} path="/character" component={Character} />
          <Route exact={true} path="/export" component={Export} />
        </Container>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
