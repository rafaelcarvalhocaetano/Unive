import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import logo from '../../../assets/icons/logo.svg'
import closeIcon from '../../../assets/icons/arrow_back.svg'

import { closeOrOpenSidebarWithHeader, loaderRequestSidebar } from '../../../redux/store/sidebar/actions'
import { Sidebar } from '../../../models/sidebar'
import { ApplicationState } from '../../../store'

import { SidebarDataState } from '../../../redux/store/sidebar/types'
import UNLink from '../UNLink'


interface TypeUNSidebar {
  requestSidebar: () => void,
  closeOrOpenSidebar: (data: boolean) => void
  repository: SidebarDataState,
  showSidebar: boolean,
  children: any,
  headerComponent: any
}


const UNSidebar: React.FC<TypeUNSidebar> = (props) => {

  const { 
    requestSidebar,
    repository,
    showSidebar,
    closeOrOpenSidebar,
    children,
    headerComponent
  } = props


  const sizedAction = (): boolean => {
    requestSidebar()
    const sizeWindows = window.screen.availWidth
    if (sizeWindows <= 1024) {
      closeOrOpenSidebar(true)
    }
    return false
  }

  useEffect(() => {
    sizedAction()
  }, [false])


  return (
    <nav className="un-sidebar">
      <ul className={`un-sidebar__list ${!showSidebar ? 'un-sidebar__list--open' : ''}`}>
        {
          !repository.loading && repository.data.map((resp: Sidebar, index: number) => <UNLink value={resp} key={index} />)
        }
      </ul>
      { !showSidebar && <div className="un-sidebar__backdrop" onClick={() => closeOrOpenSidebar(!showSidebar)}></div> }
      <div className="un-sidebar__render">
        <div className="un-sidebar__render header">{ headerComponent }</div>
        <div className="un-sidebar__render components">{ children }</div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    repository: state.sidebarReducer,
    showSidebar: state.sidebarReducer.show
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  requestSidebar: () => dispatch(loaderRequestSidebar()),
  closeOrOpenSidebar: (data: boolean) => dispatch(closeOrOpenSidebarWithHeader(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UNSidebar)

