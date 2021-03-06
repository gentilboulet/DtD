import * as React from 'react';

import AppHeader from 'components/AppHeader';
import DataSourceSelector from 'containers/DataSourceSelector';

class Homepage extends React.PureComponent {
  render() {
    return (
      <div>
        <AppHeader />
        <DataSourceSelector />
      </div>
    );
  }
}

export default Homepage;
