import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../../../models/sidebar';

interface Props {
  value: Sidebar,
  showTitle: boolean
}

const UNLink: React.FC<Props> = ({ value, showTitle }) => {

  return (
    <li className="item-sidebar">
      <Link className={`item-sidebar__action link ${showTitle ? 'item-sidebar__action--show' : ''}`} to={value.path}>
        <img className={`link__icon ${showTitle ? 'link__icon--show' : ''}`} src={require(`../../../assets/icons/${value.icon}.svg`).default} alt={value.icon + value.path} />
        { !showTitle && <span className="link__name">{ value.icon }</span> }
      </Link>
    </li>
  )
}

export default UNLink;
