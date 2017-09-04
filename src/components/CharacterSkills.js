import * as React from 'react';
import skills from 'data/skills.json';
import { Container, Row, Col } from 'reactstrap';
import DotBar from 'components/DotBar';

const skills_types = [
  {name: 'mental', unskilled: '-3'},
  {name: 'social', unskilled: '-1'},
  {name: 'physical', unskilled: '-1' }]

class CharacterSkills extends React.Component {
  render() {
    return (
      <Container>
        <Row><Col>Skills</Col></Row>
        {skills_types.map(t => this.renderCategory(t))}
      </Container>
    );
  }

  renderCategory(type) {
    return (
      <Container key={'skills' + type.name}>
        <Row><Col>{type.name}</Col></Row>
        <Row><Col>({type.unskilled} unskilled)</Col></Row>
        {
          skills
            .filter(s => { return s.type === type.name; })
            .map(s => {
              return (
                <Row key={'skill' + s.name}>
                  <Col>{s.name}</Col><Col><DotBar length={5} value={2}/></Col>
                </Row>
              );
            })
        }
      </Container>
    );
  }
}

export default CharacterSkills;
