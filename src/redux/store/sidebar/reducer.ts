
import { Reducer } from "redux";
import { SidebarDataTypes, SidebarTypes } from "./types";

const INITIAL_STATE: SidebarDataTypes = {
  data: [],
  loading: false,
  error: false
}

const SidebarReducer: Reducer<SidebarDataTypes> = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SidebarTypes.LOADER_REQUEST:
      return { ...state, loading: true }
    case SidebarTypes.LOADER_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload }
    case SidebarTypes.LOADER_FAILURE:
      return { loading: false, error: true, data: [] }
    default:
      return state;
  }
}

export default SidebarReducer;