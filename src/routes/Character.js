import * as React from 'react';

import AppHeader from 'components/AppHeader';
import Character from 'containers/Character';

class CharacterRoute extends React.PureComponent {
  render() {
    return (
      <div>
        <AppHeader />
        <Character />
      </div>
    );
  }
}

export default CharacterRoute;
