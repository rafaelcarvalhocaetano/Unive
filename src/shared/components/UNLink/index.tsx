import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../../../models/sidebar';

interface Props {
  value: Sidebar
}

const UNLink: React.FC<Props> = ({ value }) => {

  return (
    <li className="item-sidebar">
      <Link className="item-sidebar__action link" to={value.path}>
        <img className="link__icon" src={require(`../../../assets/icons/${value.icon}.svg`).default} alt={value.icon + value.path} />
        <span className="link__name">{ value.icon }</span>
      </Link>
    </li>
  )
}

export default UNLink;
