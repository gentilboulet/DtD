import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

import AppHeader from 'components/AppHeader';
import CharacterAttributes from 'components/CharacterAttributes';
import CharacterSkills from 'components/CharacterSkills';
import CharacterOtherTraits from 'components/CharacterOtherTraits';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Container>
          <Row><Col><CharacterAttributes /></Col></Row>
          <Row>
          <Col
              xs={4}
              sm={4}
              md={4}
              lg={4}
              xl={4}
          ><CharacterSkills /></Col>
          <Col
              xs={8}
              sm={8}
              md={8}
              lg={8}
              xl={8}
          ><CharacterOtherTraits /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Homepage;
