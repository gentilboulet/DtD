import * as React from 'react';
import { Container, Row } from 'reactstrap';
import Column from 'components/Column';
import DotBar from 'components/DotBar';

class CharacterHealth extends React.PureComponent {
  render() {
    const style = {textAlign: 'center'};
    return (
      <Container style={style}>
        <Row><Column>Health</Column></Row>
        <Row>
          <Column>
            <Row><Column><DotBar length={12} value={this.props.health} /></Column></Row>
            <Row><Column><DotBar length={12} value={0} shape="square"/></Column></Row>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default CharacterHealth;
