import * as React from 'react';

import DataSourceSelector from 'containers/DataSourceSelector';

class DataSourceSwitch extends React.PureComponent {
  renderOffline() { return <div>offline </div>; }
  renderOneNote() { return <div>Conntected to OneNote </div>; }
  renderNoSource() { return <DataSourceSelector />; }

  render() {
    switch(this.props.source) {
      case '': return this.renderNoSource();
      case 'offline': return this.renderOffline();
      case 'onenote': return this.renderOneNote();
      default: throw new Error('Unknown data source :' + this.props.source);
    }
  }
}

export default DataSourceSwitch;
