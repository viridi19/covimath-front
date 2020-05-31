import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import './config/reactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';

import { store, persistor } from './store';

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Router history={browserHistory}>
              <Routes />
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}
