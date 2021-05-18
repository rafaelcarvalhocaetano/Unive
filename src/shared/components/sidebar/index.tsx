import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SidebarDataTypes } from '../../../redux/store/sidebar/types'

const Sidebar = (props: any) => {
console.log("🚀 ~ file: index.tsx ~ line 7 ~ Sidebar ~ props", props)
  return (
    <nav className="nav-container">
      <ul className="nav-menu-items">
        <li className="navbar-toggle" >
          <Link to="/" className="action">
            <p>dashboard</p>
          </Link>
        </li>
        <li className="navbar-toggle" >
          <Link to="course" className="action">
            <p>course</p>
          </Link>
        </li>
        <li className="navbar-toggle" >
          <Link to="materials" className="action">
            <p>materials</p>
          </Link>
        </li>
        <li className="navbar-toggle" >
          <Link to="calendar" className="action">
            <p>calendar</p>
          </Link>
        </li>
        <li className="navbar-toggle" >
          <Link to="transcripts" className="action">
            <p>transcripts</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = (state: SidebarDataTypes) => {
  return {
    sidebar: state
  }
}

export default connect(mapStateToProps)(Sidebar)