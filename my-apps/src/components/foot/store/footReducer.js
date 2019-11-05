const defaultState = {
   footList:[]
};
export default (state = defaultState,action)=>{
    if (action.type === 'init_foot_data'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.footList = action.data.footList;
        return newState
    }
    return state
}