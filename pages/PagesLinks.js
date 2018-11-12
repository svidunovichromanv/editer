import React from 'react';
import { NavLink } from 'react-router-dom';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div>
        <NavLink to="/edit" exact className="PageLink" activeClassName="ActivePageLink">редактор</NavLink>
        <NavLink to="/result" className="PageLink" activeClassName="ActivePageLink">результат</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
    