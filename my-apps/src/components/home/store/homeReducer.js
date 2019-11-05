const defaultState = {
    lists:[],
    sineList:[],
    scanList:[],
    topicList:[],
};
export default (state = defaultState,action)=>{
    console.log(action,1111111111111111111111)
   if(action.type === 'init_home_data'){
       const newState = JSON.parse(JSON.stringify(state));
       newState.lists = action.data.lists;
        newState.sineList = action.data.sineList;
       newState.scanList = action.data.scanList;
       newState.topicList = action.data.topicList;
       return newState
   }
    return state
}