import * as React from 'react';

import AppHeader from 'components/AppHeader';
import Character from 'components/Character';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Character />
      </div>
    );
  }
}

export default Homepage;
