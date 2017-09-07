import { connect } from 'react-redux';
import DemonAttributes from 'components/DemonAttributes';

const mapStateToProps = state => {
  return {
    strength : state.getIn(['character', 'attributes', 'strength']),
    dexterity : state.getIn(['character', 'attributes', 'dexterity']),
    stamina : state.getIn(['character', 'attributes', 'stamina']),
    charisma : state.getIn(['character', 'attributes', 'charisma']),
    manipulation : state.getIn(['character', 'attributes', 'manipulation']),
    composure : state.getIn(['character', 'attributes', 'composure']),
    intelligence : state.getIn(['character', 'attributes', 'intelligence']),
    wits : state.getIn(['character', 'attributes', 'wits']),
    resolve : state.getIn(['character', 'attributes', 'resolve']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange : (attribute, newValue) => { dispatch({ type: 'ATTRIBUTE_SET', name: attribute, value: newValue}); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
) (DemonAttributes);
