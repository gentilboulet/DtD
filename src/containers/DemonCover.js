import { connect } from 'react-redux';
import DemonCover from 'components/DemonCover';

const mapStateToProps = state => {
  const cover = state.getIn(['character', 'cover']);
  return {
    cover: cover,
  };
};

export default connect(
  mapStateToProps,
) (DemonCover);
