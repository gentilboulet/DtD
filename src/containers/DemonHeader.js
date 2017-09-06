import { connect } from 'react-redux';
import DemonHeader from 'components/DemonHeader';

const mapStateToProps = state => {
  return {
    name: state.getIn(['character', 'name']),
    player: state.getIn(['character', 'player']),
    chronicle: state.getIn(['character', 'chronicle']),
    type: state.getIn(['character', 'type']),
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
    dispatch: {
      onSetName: name => dispatch({type: 'HEADER_SET_NAME', name: name})
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (DemonHeader);
