import * as React from 'react';
import { Container, CardDeck } from 'reactstrap';
import DataSourceCardOffline from 'components/DataSourceCardOffline';
import DataSourceCardOneNote from 'components/DataSourceCardOneNote';

class DataSourceSelector extends React.PureComponent {
  render() {
    return (
      <Container>
        <div><h3>Please select an available data source :</h3></div>
        <CardDeck>
          <DataSourceCardOneNote onConnect={(options) => this.props.onSelect('onenote', options)}/>
          <DataSourceCardOffline onClick={() => this.props.onSelect('offline')}/>
        </CardDeck>
      </Container>
    );
  }
}

export default DataSourceSelector;
