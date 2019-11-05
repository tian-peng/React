const defaultState = {
    flag:false
};
export default (state = defaultState,action)=>{
    console.log(action);
    if(action.type === 'input_focus'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.flag = true;
        return newState
    }else if(action.type === 'input_blur'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.flag = false;
        return newState
    }
    return state
}