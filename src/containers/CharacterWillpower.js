import { connect } from 'react-redux';
import CharacterWillpower from 'components/CharacterWillpower';

const mapStateToProps = state => {
  const resolve = state.getIn(['character', 'attributes', 'resolve', 'value']);
  const composure = state.getIn(['character', 'attributes', 'composure', 'value']);
  return {
    willpower: resolve + composure,
  };
};

export default connect(
  mapStateToProps,
) (CharacterWillpower);
