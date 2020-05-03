import {createStore, compose, applyMiddleware} from 'redux';
import reducer from "./reducers";
import thunkMiddleware from 'redux-thunk';

const stringEnhancer = (createStore) => (...args)=>{
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) =>{
        if (typeof action === 'string'){
            return originalDispatch(
                {type: action}
            )
        }
        return originalDispatch(action)
    };

    return store;
};

const logEnhancer = (createStore) => (...args)=>{
    const store = createStore(...args);
    const originalDispatch = store.dispatch;
    store.dispatch = (action) =>{
        console.log(action.type);
        return originalDispatch(action)
    };

    return store;
};
//middleware - это подмена(модификация) только!! функции dispatch
// store enhancer - это подмена всего store

const middlewareExample = ({getState, dispatch}) => (next) => (action)=>{ //получаем доступ не ко всему store, а только к getState,
    // dispatch; next - это либо оригинальный dispatch, либо следующий в цепочке middleware
    //applyMiddleware - srore enhancer, единственный, который идет в комплекте с redux
    console.log(action.type, store.getState());
    return next(action);
};

const logMiddleware = (store) => (dispatch) => (action)=>{
    console.log(action.type, store.getState());
    return dispatch(action);
};
const stringMiddleware = (store) => (dispatch) => (action)=>{
    if (typeof action === 'string'){
        return dispatch(
            {type: action}
        )
    }
    return dispatch(action)
};

//const store = createStore(reducer, compose(stringEnhancer, logEnhancer));
const store = createStore(reducer, compose(stringEnhancer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)));

const myAction = (dispatch)=>{
    setTimeout(()=>{
        dispatch({
            type: 'DELAYED_ACTION'
        })
    }, 2000)
};
const delayedActionCreator = (timeout)=> (dispatch)=>{
    setTimeout(()=>{
        dispatch({
            type: 'DELAYED_ACTION'
        })
    }, timeout)
};
store.dispatch("HELLO_WORLD");
store.dispatch(myAction);
store.dispatch(delayedActionCreator(3000));

export default store;