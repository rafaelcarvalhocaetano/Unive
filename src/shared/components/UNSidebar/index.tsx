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
}


const UNSidebar: React.FC<TypeUNSidebar> = (props) => {

  const { requestSidebar, repository, showSidebar, closeOrOpenSidebar } = props

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
    <nav className={`un-sidebar ${showSidebar ? 'un-sidebar--close' : ''}`}>
      <div className="un-sidebar__element">
        {
          !showSidebar
          &&
          (
            <button className={`btn-action ${showSidebar ? 'btn-action--center' : ''}`} onClick={() => closeOrOpenSidebar(!showSidebar)}>
              <img className="btn-action__img" src={closeIcon} alt="Close sidebar" />
            </button>
          )
        }
        <div className="logo">
          <img className="logo__img" src={logo} alt="logo Univ" />
          {
            !showSidebar && <span className="logo__text">Univ</span>
          }
        </div>
      </div>
      <ul className={`un-sidebar__list `}>
        {
          !repository.loading && repository.data.map((resp: Sidebar, index: number) => <UNLink value={resp} key={index} showTitle={showSidebar}/>)
        }
      </ul>
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

