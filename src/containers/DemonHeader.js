import { connect } from 'react-redux';
import DemonHeader from 'components/DemonHeader';

const mapStateToProps = state => {
  return {
    name: state.getIn(['character', 'name']),
    player: state.getIn(['character', 'player']),
    chronicle: state.getIn(['character', 'chronicle']),
    concept: state.getIn(['character', 'concept']),
    vice: state.getIn(['character', 'vice']),
    virtue: state.getIn(['character', 'virtue']),
    incarnation: state.getIn(['character', 'incarnation']),
    agenda: state.getIn(['character', 'agenda']),
    catalyst: state.getIn(['character', 'catalyst'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetName:        value => dispatch({type: 'HEADER_SET_NAME',        name: value}),
    onSetPlayer:      value => dispatch({type: 'HEADER_SET_PLAYER',      player: value}),
    onSetChronicle:   value => dispatch({type: 'HEADER_SET_CHRONICLE',   chronicle: value}),
    onSetConcept:     value => dispatch({type: 'HEADER_SET_CONCEPT',     concept: value}),
    onSetVice:        value => dispatch({type: 'HEADER_SET_VICE',        vice: value}),
    onSetVirtue:      value => dispatch({type: 'HEADER_SET_VIRTUE',      virtue: value}),
    onSetIncarnation: value => dispatch({type: 'HEADER_SET_INCARNATION', incarnation: value}),
    onSetAgenda:      value => dispatch({type: 'HEADER_SET_AGENDA',      agenda: value}),
    onSetCatalyst:    value => dispatch({type: 'HEADER_SET_CATALYST',    catalyst: value})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (DemonHeader);
