import * as React from 'react';
import { Container, Row } from 'reactstrap';
import Column from 'components/Column';
import DemonOtherTraitsLeft from 'components/DemonOtherTraitsLeft';
import DemonOtherTraitsRight from 'components/DemonOtherTraitsRight';

class DemonOtherTraits extends React.Component {
  render() {
    return (
      <Container>
        <Row><Column>Other Traits</Column></Row>
        <Row>
          <Column width={6}><DemonOtherTraitsLeft /></Column>
          <Column width={6}><DemonOtherTraitsRight /></Column>
        </Row>
        <Row>
          <Column>Cipher</Column>
        </Row>
      </Container>
    );
  }
}

export default DemonOtherTraits;
