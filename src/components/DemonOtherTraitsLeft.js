import * as React from 'react';
import { Container, Row } from 'reactstrap';
import Column from 'components/Column';

class DemonOtherTraitsLeft extends React.PureComponent {
  render() {
    return (
      <Container>
        <Row><Column>Merits</Column></Row>
        <Row><Column>Conditions</Column></Row>
        <Row><Column>Aspirations</Column></Row>
      </Container>
    );
  }
}

export default DemonOtherTraitsLeft;
