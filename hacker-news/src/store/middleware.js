import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const isProd = process.env.NODE_ENV === 'production';
const middlewareList = [];

middlewareList.push(thunk);
if(!isProd) {
    middlewareList.push(createLogger());
}

const middleWare = compose(applyMiddleware(...middlewareList));

export default middleWare;