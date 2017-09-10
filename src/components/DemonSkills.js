import * as React from 'react';
import skills from 'data/skills.json';
import { Container, Row, Col } from 'reactstrap';
import { toTitleCase } from 'string';
import DotBar from 'components/DotBar';

const skills_types = [
  {name: 'mental', unskilled: '-3'},
  {name: 'social', unskilled: '-1'},
  {name: 'physical', unskilled: '-1' }]

class DemonSkills extends React.PureComponent {
  render() {
    const style = {textAlign: 'center'};
    return (
      <Container>
        <Row><Col style={style}>Skills</Col></Row>
        {skills_types.map(t => this.renderCategory(t))}
      </Container>
    );
  }

  renderCategory(type) {
    const style = {textAlign: 'center'};
    return (
      <Container key={'skills' + type.name}>
        <Row><Col style={style}>{toTitleCase(type.name)}</Col></Row>
        <Row><Col style={style}>({type.unskilled} unskilled)</Col></Row>
        {
          skills
            .filter(s => { return s.type === type.name; })
            .map(s => { return this.renderOneSkill(s.name); })
        }
      </Container>
    );
  }

  renderOneSkill(name) {
    const value = !this.props.skills[name]
      ?  0
      : this.props.skills[name].value;
    const styleLeft = {textAlign: 'left'};
    const styleRight = {textAlign: 'right'};
    return (
      <Row key={'skill' + name}>
        <Col style={styleLeft}>{toTitleCase(name)}</Col>
        <Col style={styleRight}>
          <DotBar length={5} value={value}
                  resetTo0={true} onClick={(val) => { this.props.onChange(name, val); } }/>
        </Col>
      </Row>
    );
  }
}

export default DemonSkills;
