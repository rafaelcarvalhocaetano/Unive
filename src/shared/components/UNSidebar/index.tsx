import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { loaderRequestSidebar } from '../../../redux/store/sidebar/actions'
import { Sidebar } from '../../../models/sidebar'
import { ApplicationState } from '../../../store'

import UNLink from '../UNLink'
import logo from '../../../assets/icons/logo.svg'
import closeIcon from '../../../assets/icons/arrow_back.svg'


const UNSidebar = (props: any) => {

  const { requestSidebar, repository } = props

  const [showSide, setShowSide] = React.useState(false)

  const sizedAction = () => {
    requestSidebar()
    const sizeWindows = window.screen.availWidth
    if (sizeWindows <= 1024) {
      setShowSide(true)
      return
    }
    if (sizeWindows > 1024) {
      setShowSide(false)
      return
    }
  }

  useEffect(() => {
    sizedAction()
  }, [false])


  return (
    <nav className={`un-sidebar ${showSide ? 'un-sidebar--close' : ''}`}>
      <div className="un-sidebar__element">
        <button className={`btn btn-action ${showSide ? 'btn-action--center' : ''}`} onClick={() => setShowSide(!showSide)}>
          <img className="btn-action__img" src={closeIcon} alt="Close sidebar" />
        </button>
        <div className="logo">
          <img className="logo__img" src={logo} alt="logo Univ" />
          {
            !showSide && <span className="logo__text">Univ</span>
          }
        </div>
      </div>
      <ul className={`un-sidebar__list `}>
        {
          !repository.loading && repository.data.map((resp: Sidebar, index: number) => <UNLink value={resp} key={index} showTitle={showSide}/>)
        }
      </ul>
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

