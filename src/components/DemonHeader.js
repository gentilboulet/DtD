import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MultiBox from 'components/MultiBox';
import EditText from 'components/EditText'
import PropTypes from 'prop-types';

const DemonHeader = props => {
  const virtuesData = [
    {name: 'aaaa', description: <div>aaaa</div>},
    {name: 'bbbb', description: <div>aaaab</div>},
    {name: 'cccc', description: <div>ccccc</div>}
  ];
  return (
    <Container>
      <Row>
        <Col>Name</Col>
        <Col><EditText label="Name" value={props.name} onChange={(v) => props.onSetName(v)}/></Col>
        <Col>Concept</Col>
        <Col><EditText label="Concept" value={props.concept} onChange={(v) => props.onSetConcept(v)}/></Col>
        <Col>Incarnation</Col><Col>{props.incarnation}</Col>
      </Row>
      <Row>
        <Col>Player</Col>
        <Col><EditText label="Player" value={props.player} onChange={(v) => props.onSetPlayer(v)}/></Col>
        <Col>Virtue</Col>
        <Col><MultiBox label="Virtue" data={virtuesData} value={[props.virtue]} multiple={true} onChange={(v) => this.onSetVirtue(v)}/></Col>
        <Col>Agenda</Col><Col>{props.agenda}</Col>
      </Row>
      <Row>
        <Col>Chronicle</Col><Col>{props.chronicle}</Col>
        <Col>Vice</Col>
        <Col><MultiBox label="Vice" data={virtuesData} value={[props.vice]} onChange={(v) => this.onSetVice(v)}/></Col>
        <Col>Catalyst</Col><Col>{props.catalyst}</Col>
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
