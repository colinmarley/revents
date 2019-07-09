import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export const configureStore = () => {
	const middlewares = [thunk]

	const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

	const store = createStore(rootReducer, composedEnhancer);

	return store;
};
