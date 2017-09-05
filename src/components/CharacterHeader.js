import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

class CharacterHeader extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Name</Col>
          <Col>Concept</Col>
          <Col>Incarnation</Col>
        </Row>
        <Row>
          <Col>Player</Col>
          <Col>Virtue</Col>
          <Col>Agenda</Col>
        </Row>
        <Row>
          <Col>Chronicle</Col>
          <Col>Vice</Col>
          <Col>Catalyst</Col>
        </Row>
      </Container>
    );
  }
}

export default CharacterHeader;
