import * as React from 'react';

import AppHeader from 'components/AppHeader';

class Homepage extends React.PureComponent {
  render() {
    return (
      <div>
        <AppHeader />
        <div>Nothing new here !</div>
      </div>
    );
  }
}

export default Homepage;
