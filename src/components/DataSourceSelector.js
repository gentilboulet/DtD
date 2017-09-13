import * as React from 'react';
import { Container, CardDeck } from 'reactstrap';
import DataSourceCardOffline from 'components/DataSourceCardOffline';
import DataSourceCardOneNote from 'components/DataSourceCardOneNote';

class DataSourceSelector extends React.PureComponent {
  render() {
    if (this.props.source === '') {
      return (
        <Container>
          <div><h2>Please select an available data source :</h2></div>
          <CardDeck>
            <DataSourceCardOneNote onConnect={(options) => this.props.onSelect('OneNote', options)}/>
            <DataSourceCardOffline onClick={() => this.props.onSelect('offline')}/>
          </CardDeck>
        </Container>
      );
    } else if (this.props.source === 'offline') {
      return <div>Soon </div>;
    } else if (this.props.source === 'OneNote') {
      return <div>Soon </div>;
    } else {
      return <div>Error : unknown datasource ??</div>
    }
  }
}

export default DataSourceSelector;
