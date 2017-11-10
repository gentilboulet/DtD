import { connect } from 'react-redux';
import DataSourceSwitch from 'components/DataSourceSwitch';

const mapStateToProps = state => {
  return {
    source: state.getIn(['data', 'source']),
  };
};

export default connect(
  mapStateToProps
) (DataSourceSwitch);
