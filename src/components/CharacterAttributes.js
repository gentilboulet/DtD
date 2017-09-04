import * as React from 'react';
import attributes from 'data/attributes.json';
import { Container, Row, Col } from 'reactstrap';
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
          <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
          >Attributes</Col>
        </Row>
        {attributes_types.map(t => this.renderRow(t))}
      </Container>
    );
  }

  renderRow(type) {
    let i = 0;
    return (
      <Row key={'attribute' + type.name}>
      <Col
          xs={3}
          sm={3}
          md={3}
          lg={3}
          xl={3}
      >{type.name}</Col>
        {
          attributes
            .filter(a => (a.type === type.type))
            .map(a => {
              return (
                <Col
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    key={'attribute' + a.name}
                >
                  <Row>
                    <Col
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                    >{a.name}</Col>
                    <Col
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                        xl={6}
                    ><DotBar length={4} value={++i} /></Col>
                  </Row>
                </Col>
                )
            })
        }
      </Row>);
  }
}

export default CharacterAtributes;
