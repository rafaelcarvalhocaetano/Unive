import { SidebarTypes } from './types';
import { action } from 'typesafe-actions';
import { Sidebar } from '../../../models/sidebar';

export const loaderRequestSidebar = () => action(SidebarTypes.LOADER_REQUEST);
export const loaderSuccessSidebar = (data: Sidebar[]) => action(SidebarTypes.LOADER_SUCCESS, data);
export const loaderFailureSidebar = () => action(SidebarTypes.LOADER_FAILURE);