import React from 'react';
import ReactDOM from 'react-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './index.css';
import App from './app/layout/App';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/common/util/ScrollToTop';


const store = configureStore();

const rootEl = document.getElementById('root');

//Render/Re-render the page
let render = () => {
    ReactDOM.render(
        <Provider store={store} >
            <BrowserRouter>
                <ScrollToTop>
                    <ReduxToastr 
                        position='bottom-right'
                        transitionIn='fadeIn'
                        transitionOut='fadeOut'    
                    />
                    <App />
                </ScrollToTop>
            </BrowserRouter>
        </Provider>,
        rootEl
    );
}

//Checks for hot module replacement
if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    });
}

store.firebaseAuthIsReady.then(() => {
    //Calls Render
    render();
});

serviceWorker.unregister();
