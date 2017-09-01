import { connect } from 'react-redux';
import CharacterExport from 'components/CharacterExport';

function mapStateToProps(state) {
  return { };
}

function mapDispatchToProps(dispatch) {
  return { };
}

function mergeProps(propsFromState, propsForDispatch) {
  return Object.assign({}, propsFromState, propsForDispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CharacterExport);
