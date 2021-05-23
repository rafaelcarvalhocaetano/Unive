
import { Reducer } from "redux";
import { SidebarDataState, SidebarTypes } from "./types";

const INITIAL_STATE: SidebarDataState = {
  data: [],
  loading: false,
  error: false
}

const sidebarReducer: Reducer<SidebarDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidebarTypes.LOADER_REQUEST:
      return { ...state, loading: true, error: false }
    case SidebarTypes.LOADER_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload }
    case SidebarTypes.LOADER_FAILURE:
      return { loading: false, error: true, data: [] }
    default:
      return state;
  }
}

export default sidebarReducer;