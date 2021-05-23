import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { loaderRequestSidebar } from '../../../redux/store/sidebar/actions'
import { Sidebar } from '../../../models/sidebar'
import { ApplicationState } from '../../../store'

import UNLink from '../UNLink'
import logo from '../../../assets/icons/logo.svg'
import closeIcon from '../../../assets/icons/arrow_back.svg'
import info from '../../../assets/icons/info.svg'


const UNSidebar = (props: any) => {

  const { requestSidebar, repository } = props

  useEffect(() => {
    requestSidebar()
  }, [requestSidebar])


  return (
    <nav className="un-sidebar">
      <div className="un-sidebar__element">
        <button className="btn btn-action">
          <img className="btn-action__img" src={closeIcon} alt="Close sidebar" />
        </button>
        <div className="logo">
          <img className="logo__img" src={logo} alt="logo Univ" />
          <span className="logo__text">Univ</span>
        </div>
      </div>
      <ul className="un-sidebar__list">
        {
          !repository.loading
          &&
          repository.data.map((resp: Sidebar, index: number) => <UNLink value={resp} key={index} />)
        }
      </ul>
      <div className="un-sidebar__info info">
        <img src={info} alt="Information Univ" />
      </div>
    </nav>
  )
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    repository: state.sidebarReducer
  }
}

// tipar
const mapDispatchToProps = (dispatch: any) => ({
  requestSidebar: () => dispatch(loaderRequestSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UNSidebar)

