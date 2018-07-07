import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { StyleProvider, Root } from 'native-base';
import getTheme from '../theme/components';
import variables from '../theme/variables/commonColor';
import AppNavigator from './Routes';
import reducers from './Reducers';

export default class Setup extends Component {
  render() {
    const persistConfig = { key: 'root', storage };
    const persistedReducer = persistReducer(persistConfig, reducers);
    const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
    const persistor = persistStore(store);
    return (
      <Provider store={createStore(reducers)}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <StyleProvider style={getTheme(variables)}>
              <AppNavigator />
            </StyleProvider>
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
