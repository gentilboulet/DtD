import * as React from 'react';
import { Container, Row } from 'reactstrap';
import Column from 'components/Column';
import DotBar from 'components/DotBar';

class DemonCover extends React.PureComponent {
  render() {
    const style = {textAlign: 'center'};
    return (
      <Container style={style}>
        <Row><Column>Cover</Column></Row>
        <Row>
          <Column>
            <Row><Column><DotBar length={10} value={this.props.cover} /></Column></Row>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default DemonCover;
