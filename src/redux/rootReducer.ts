import { combineReducers } from "redux";
import sidebarReducer from "./store/sidebar/reducer"

const RootReducer = combineReducers({
  sidebarReducer 
})

export default RootReducer