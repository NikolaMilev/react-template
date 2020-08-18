import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../redux';
import DefaultComponent from './DefaultComponent';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <DefaultComponent />
            </PersistGate>
        </Provider>
    );
}

// TODO:
// pre-commit linting?
// router
// serialization

export default App;
