import * as React from 'react';

import AppHeader from 'components/AppHeader';
import DataSourceSwitch from 'containers/DataSourceSwitch';

class DataSource extends React.PureComponent {
  render() {
    return (
      <div>
        <AppHeader />
        <DataSourceSwitch />
      </div>
    );
  }
}

export default DataSource;
