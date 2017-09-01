import * as React from 'react';

import AppHeader from 'components/AppHeader';
import DotBar from 'components/DotBar';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div>Empty Homepage</div>
        <div><DotBar length="5" value="3" shape="square" /></div>
      </div>
    );
  }
}

export default Homepage;
