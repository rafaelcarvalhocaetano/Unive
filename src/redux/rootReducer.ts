import { combineReducers } from "redux";
import SidebarReducer from "./store/sidebar/reducer"

const RootReducer = combineReducers({
  SidebarReducer
})

export default RootReducer