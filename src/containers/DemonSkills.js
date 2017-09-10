import { connect } from 'react-redux';
import DemonSkills from 'components/DemonSkills';

const mapStateToProps = state => {
  const stateSkills = state.getIn(['character', 'skills']);
  return {
    skills : stateSkills.toJS()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange : (skill, newValue) => { dispatch({ type: 'CHARACTER_SKILL_SET', name: skill, value: newValue}); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
) (DemonSkills);
