import { Sidebar } from "../../../models/sidebar";

export enum SidebarTypes {
  LOADER_REQUEST = '@univ/LOADER_REQUEST',
  LOADER_SUCCESS = '@univ/LOADER_SUCCESS',
  LOADER_FAILURE = '@univ/LOADER_FAILURE'
}

export interface SidebarDataTypes {
  readonly data: Sidebar [],
  readonly loading: boolean,
  readonly error: boolean
}