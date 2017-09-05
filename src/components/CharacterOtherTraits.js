import * as React from 'react';
import { Container, Row } from 'reactstrap';
import Column from 'components/Column';
import CharacterOtherTraitsLeft from 'components/CharacterOtherTraitsLeft';
import CharacterOtherTraitsRight from 'components/CharacterOtherTraitsRight';

class CharacterOtherTraits extends React.Component {
  render() {
    return (
      <Container>
        <Row><Column>Other Traits</Column></Row>
        <Row>
          <Column width={6}><CharacterOtherTraitsLeft /></Column>
          <Column width={6}><CharacterOtherTraitsRight /></Column>
        </Row>
        <Row>
          <Column>Cipher</Column>
        </Row>
      </Container>
    );
  }
}

export default CharacterOtherTraits;
