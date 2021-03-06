import * as React from 'react';
import { Container, Row } from 'reactstrap';
import Column from 'components/Column';
import DotBar from 'components/DotBar';

class CharacterWillpower extends React.PureComponent {
  render() {
    const style = {textAlign: 'center'};
    return (
      <Container style={style}>
        <Row><Column>Willpower</Column></Row>
        <Row>
          <Column>
            <Row><Column><DotBar length={10} value={this.props.willpower} /></Column></Row>
            <Row><Column><DotBar length={10} value={0} shape="square"/></Column></Row>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default CharacterWillpower;
