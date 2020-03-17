import { Container, Root } from 'native-base';
import React, { PureComponent } from 'react';
import { Platform, StatusBar, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ScreenNavigation from './navigations';
import configureStore from './store/configureStore';

// wrapping of app with routes and store
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
export default class App extends PureComponent {
  render() {
    const { store, persistor } = configureStore();
    return (
      <Root>
        <Container>
          {Platform.OS === 'android' ? (
            <StatusBar
              backgroundColor="rgba(0,0,0,0.5)"
              barStyle="light-content"
              translucent
            />
          ) : null}
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <ScreenNavigation />
            </PersistGate>
          </Provider>
        </Container>
      </Root>
    );
  }
}
