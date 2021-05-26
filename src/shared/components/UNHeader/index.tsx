import React from 'react';
import search from '../../../assets/icons/search.svg'
import message from '../../../assets/icons/message.svg'
import bell from '../../../assets/icons/bell.svg'
import dotColumn from '../../../assets/icons/dot_column.svg'
import user from '../../../assets/images/user.jpg'

const UNHeader: React.FC<any> = () => {

  return (
    <header className="un-header">
      <div className="un-header__item un-search">
        <img src={search} alt="Search course" className="un-search__img" />
        <input type="text" className="un-search__find" placeholder="Search course, student or instructor" />
      </div>
      
      <div className="un-header__item un-info">
        <button className="un-info__btn">
          <img src={message} alt="Message information" />
        </button>
        <button className="un-info__btn un-info__btn--alert">
          <img src={bell} alt="Message information" />
        </button>
        <div className="un-info__use-img" style={{ backgroundImage: `url(${user})`}}></div>
        <div className="un-info__user-text description">
          <span className="description__name">Mia V</span>
          <span className="description__type">Student</span>
        </div>
        <button className="un-info__btn-action">
          <img src={dotColumn} alt="Message information" />
        </button>
      </div>
    </header>
  )
}

export default UNHeader;
