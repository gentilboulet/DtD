import * as React from 'react';

import AppHeader from 'components/AppHeader';
import CharacterExport from 'containers/CharacterExport';

class Export extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <CharacterExport />
      </div>
    );
  }
}

export default Export;
