import { connect } from 'react-redux';
import DemonAttributes from 'components/DemonAttributes';

const mapStateToProps = state => {
  return {
    strength : state.getIn(['character', 'attributes', 'strength', 'value']),
    dexterity : state.getIn(['character', 'attributes', 'dexterity', 'value']),
    stamina : state.getIn(['character', 'attributes', 'stamina', 'value']),
    charisma : state.getIn(['character', 'attributes', 'charisma', 'value']),
    manipulation : state.getIn(['character', 'attributes', 'manipulation', 'value']),
    composure : state.getIn(['character', 'attributes', 'composure', 'value']),
    intelligence : state.getIn(['character', 'attributes', 'intelligence', 'value']),
    wits : state.getIn(['character', 'attributes', 'wits', 'value']),
    resolve : state.getIn(['character', 'attributes', 'resolve', 'value']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange : (attribute, newValue) => { dispatch({ type: 'CHARACTER_ATTRIBUTE_SET', name: attribute, value: newValue}); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
) (DemonAttributes);
