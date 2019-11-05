import {combineReducers} from "redux";
import headReducer from "../components/head/store/headReducer";
import homeReducer from "../components/home/store/homeReducer";
import footReducer from "../components/foot/store/footReducer";
export default combineReducers({
    head:headReducer,
    home:homeReducer,
    foot:footReducer
})