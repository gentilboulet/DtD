import * as React from 'react';
import attributes from 'data/attributes.json';
import { Container, Row } from 'reactstrap';
import Column from 'components/Column';
import DotBar from 'components/DotBar';

const attributes_types = [
  {name: 'Power', type: 'power'},
  {name: 'Finesse', type:'finesse'},
  {name: 'Resistance', type: 'resistance' }]

class CharacterAtributes extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Column>Attributes</Column>
        </Row>
        {attributes_types.map(t => this.renderRow(t))}
      </Container>
    );
  }

  renderRow(type) {
    let i = 0;
    return (
      <Row key={'attribute' + type.name}>
      <Column width={3}>{type.name}</Column>
        {
          attributes
            .filter(a => (a.type === type.type))
            .map(a => {
              return (
                <Column width={3} key={'attribute' + a.name}>
                  <Row>
                    <Column width={6}>{a.name}</Column>
                    <Column width={6}><DotBar length={4} value={++i} /></Column>
                  </Row>
                </Column>
                )
            })
        }
      </Row>);
  }
}

export default CharacterAtributes;
