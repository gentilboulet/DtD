import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import EditText from 'components/EditText'
import PropTypes from 'prop-types';

const DemonHeader = header => {
  return (
    <Container>
      <Row>
        <Col>Name</Col>
        <Col><EditText label="Name" value={header.name}
              onChange={(v) => this.props.onSetName(v)}/></Col>
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
  onSetName:        PropTypes.func.isRequired,
  onSetConcept:     PropTypes.func.isRequired,
  onSetIncarnation: PropTypes.func.isRequired,
  onSetPlayer:      PropTypes.func.isRequired,
  onSetVirtue:      PropTypes.func.isRequired,
  onSetAgenda:      PropTypes.func.isRequired,
  onSetChronicle:   PropTypes.func.isRequired,
  onSetVice:        PropTypes.func.isRequired,
  onSetCatalyst:    PropTypes.func.isRequired,
};

export default DemonHeader;
