import * as React from 'react';
import { Container, Row } from 'reactstrap';
import Column from 'components/Column';
import CharacterAttributes from 'components/CharacterAttributes';
import CharacterHeader from 'components/CharacterHeader';
import CharacterSkills from 'components/CharacterSkills';
import CharacterOtherTraits from 'components/CharacterOtherTraits';

class Character extends React.Component {
  render() {
    return (
      <Container>
        <Row><Column><CharacterHeader /></Column></Row>
        <Row><Column><CharacterAttributes /></Column></Row>
        <Row>
          <Column width={4}><CharacterSkills /></Column>
          <Column width={8}><CharacterOtherTraits /></Column>
        </Row>
      </Container>);
  }
}

export default Character;
