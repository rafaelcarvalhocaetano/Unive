
import { Reducer } from "redux";
import { SidebarDataState, SidebarTypes } from "./types";

const INITIAL_STATE: SidebarDataState = {
  data: [],
  loading: false,
  error: false,
  show: false
}

const sidebarReducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidebarTypes.LOADER_REQUEST:
      return { ...state, loading: true, error: false }
    case SidebarTypes.LOADER_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload }
    case SidebarTypes.LOADER_FAILURE:
      return { loading: false, error: true, data: [] }
    case SidebarTypes.OPEN_OR_CLOSE:
      return { ...state, show: action.payload }
    default:
      return state;
  }
}

export default sidebarReducer;