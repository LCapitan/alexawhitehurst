import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import persistor from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ParallaxProvider } from 'react-scroll-parallax';

//components
import MainApp from './components/mainApp/MainApp';

function App() {
    return (
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={persistor.persistor}>
                <ParallaxProvider>
                    <MainApp/>
                </ParallaxProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
