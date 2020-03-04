import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//My stuff
import App from './components/App';
import reducers from './reducers';

//Store                        
//Holding all state(data)
//You can only pass one reducer
//You are applying a Middleware called thunk
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);