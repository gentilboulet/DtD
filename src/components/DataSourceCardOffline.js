import * as React from 'react';
import { Card, CardText, CardTitle, CardBlock } from 'reactstrap'

class DataSourceCardOffline extends React.PureComponent {
  render() {
    return (
      <Card onClick={() => this.props.onClick() }>
        <CardBlock>
          <CardTitle>Offline</CardTitle>
          <CardText> Load a demo dataset </CardText>
        </CardBlock>
      </Card>
    );
  }
}

export default DataSourceCardOffline;
