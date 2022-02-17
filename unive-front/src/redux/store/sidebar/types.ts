import { Sidebar } from "../../../models/sidebar";

export enum SidebarTypes {
  LOADER_REQUEST = '@univ/LOADER_REQUEST',
  LOADER_SUCCESS = '@univ/LOADER_SUCCESS',
  LOADER_FAILURE = '@univ/LOADER_FAILURE',
  OPEN_OR_CLOSE = '@univ/OPEN_OR_CLOSE_SIDEBAR',
}

export interface SidebarDataState {
  readonly data: Sidebar [],
  readonly loading: boolean,
  readonly error: boolean,
  show: boolean
}