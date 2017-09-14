import * as React from 'react';
import attributes from 'data/attributes.json';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import { toTitleCase } from 'string';
import Column from 'components/Column';
import DotBar from 'components/DotBar';

const attributes_types = [
  {name: 'Power', type: 'power'},
  {name: 'Finesse', type:'finesse'},
  {name: 'Resistance', type: 'resistance' }]


class Character9Attributes extends React.PureComponent {
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
    return (
      <Row key={'attribute' + type.name}>
      <Column width={3}>{toTitleCase(type.name)}</Column>
        {
          attributes
            .filter(a => (a.type === type.type))
            .map(a => {
              return (
                <Column width={3} key={'attribute' + a.name}>
                  <Row>
                    <Column width={6}>{toTitleCase(a.name)}</Column>
                    <Column width={6}>
                      <DotBar
                        length={4} value={this.props[a.name]}
                        onClick={ (val) => { this.props.onChange(a.name, val); } }
                      />
                    </Column>
                  </Row>
                </Column>
                )
            })
        }
      </Row>);
  }
}

Character9Attributes.propTypes = {
  strength: PropTypes.number.isRequired,
  dexterity: PropTypes.number.isRequired,
  stamina: PropTypes.number.isRequired,
  charisma: PropTypes.number.isRequired,
  manipulation: PropTypes.number.isRequired,
  composure: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired,
  wits: PropTypes.number.isRequired,
  resolve: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Character9Attributes;
