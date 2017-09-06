import { connect } from 'react-redux';
import Character from 'components/Character';

const mapStateToProps = state => {
  return {
      type: state.getIn(['character', 'type']),
    };
};

export default connect(
  mapStateToProps,
) (Character);
