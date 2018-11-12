import React from 'react';
import { Route } from 'react-router-dom';

import Page_Editor from './Page_Editor';
import Page_Result from './Page_Result';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/edit" exact component={Page_Editor} />
        <Route path="/result" component={Page_Result} />
      </div>
    );
    
  }

}
    
export default PagesRouter;
    