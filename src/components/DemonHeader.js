import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

const DemonHeader = header => {
  return (
    <Container>
      <Row>
        <Col>Name</Col><Col>{header.name}</Col>
        <Col>Concept</Col><Col>{header.concept}</Col>
        <Col>Incarnation</Col><Col>{header.incarnation}</Col>
      </Row>
      <Row>
        <Col>Player</Col><Col>{header.player}</Col>
        <Col>Virtue</Col><Col>{header.virtue}</Col>
        <Col>Agenda</Col><Col>{header.agenda}</Col>
      </Row>
      <Row>
        <Col>Chronicle</Col><Col>{header.chronicle}</Col>
        <Col>Vice</Col><Col>{header.vice}</Col>
        <Col>Catalyst</Col><Col>{header.catalyst}</Col>
      </Row>
    </Container>
  );
};

DemonHeader.propTypes = {
  name:         PropTypes.string.isRequired,
  concept:      PropTypes.string.isRequired,
  incarnation:  PropTypes.string.isRequired,
  player:       PropTypes.string.isRequired,
  virtue:       PropTypes.string.isRequired,
  agenda:       PropTypes.string.isRequired,
  chronicle:    PropTypes.string.isRequired,
  vice:         PropTypes.string.isRequired,
  catalyst:     PropTypes.string.isRequired,
};

export default DemonHeader;
