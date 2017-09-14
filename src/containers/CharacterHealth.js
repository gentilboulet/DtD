import { connect } from 'react-redux';
import CharacterHealth from 'components/CharacterHealth';

const mapStateToProps = state => {
  const stamina = state.getIn(['character', 'attributes', 'stamina', 'value']);
  const size = state.getIn(['character', 'size']);
  return {
    health : stamina + size,
  };
};

export default connect(
  mapStateToProps,
) (CharacterHealth);
