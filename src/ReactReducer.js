import {useReducer} from 'react';
const reducer = (state,action)=>{
    if(action.type === "expend") return {money: state.money -10 }
    if(action.type === "sell") return {money: state.money +10 }
    return state;
}
const ReactReducer = ()=>{
    const initialState = {money:100}
    const [state,dispatch] = useReducer(reducer, initialState);
    return(
        <>
            <h1>Current Balace: {state.money}</h1>
            <button onClick={()=>{ dispatch({type:"expend"})}}>Expend</button>
            <button onClick={()=>{ dispatch({type:"sell"})}}>Sell</button>
        </>
    );
}
export default ReactReducer;