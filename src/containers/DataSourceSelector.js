import { connect } from 'react-redux';
import DataSourceSelector from 'components/DataSourceSelector';

const mapStateToProps = state => {
  return {
    source: state.getIn(['data', 'source']),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect : (source, options) => { dispatch({ type: 'DATA_SOURCE_CONNECT', source: source, options: options}); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (DataSourceSelector);
