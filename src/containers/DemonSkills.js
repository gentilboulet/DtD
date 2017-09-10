import { connect } from 'react-redux';
import DemonSkills from 'components/DemonSkills';

const mapStateToProps = state => {
  return {
    skills : [
      state.getIn(['character', 'skills']).map(key => {
        return {
          name : key,
          value : state.getIn(['character', 'skills', 'value'])
        };
      })
    ]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange : (skill, newValue) => { dispatch({ type: 'SKILL_SET', name: skill, value: newValue}); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
) (DemonSkills);
