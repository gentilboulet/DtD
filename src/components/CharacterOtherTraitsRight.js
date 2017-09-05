import * as React from 'react';
import { Container, Row } from 'reactstrap';
import Column from 'components/Column';
import DotBar from 'components/DotBar';

class CharacterOtherTraitsRight extends React.Component {
  render() {
    return (
      <Container>
        {this.renderHealth()}
        {this.renderWillpower()}
        {this.renderCover()}
        {this.renderPrimum()}
        {this.renderAether()}
        {this.renderDerivatedValues()}
      </Container>
    );
  }

  renderHealth() {
    return (
      <Row><Column>
        <Row><Column>Health</Column></Row>
        <Row>
          <Column>
            <Row><Column><DotBar length={12} value={0} /></Column></Row>
            <Row><Column><DotBar length={12} value={0} shape="square"/></Column></Row>
          </Column>
        </Row>
      </Column></Row>
    );
  }

  renderWillpower() {
    return (
      <Row><Column>
        <Row><Column>Willpower</Column></Row>
        <Row>
          <Column>
            <Row><Column><DotBar length={10} value={0} /></Column></Row>
            <Row><Column><DotBar length={10} value={0} shape="square"/></Column></Row>
          </Column>
        </Row>
      </Column></Row>
    );
  }

  renderCover() {
    return (
      <Row><Column>
        <Row><Column>Cover</Column></Row>
        <Row><Column><DotBar length={10} value={0} /></Column></Row>
      </Column></Row>
    );
  }

  renderPrimum() {
    return (
      <Row><Column>
        <Row><Column>Primum</Column></Row>
        <Row><Column><DotBar length={10} value={0} /></Column></Row>
      </Column></Row>
    );
  }

  renderAether() {
    return (
      <Row><Column>
        <Row><Column>Aether</Column></Row>
        <Row><Column><DotBar length={10} value={0} shape="square"/></Column></Row>
        <Row><Column><DotBar length={10} value={0} shape="square"/></Column></Row>
      </Column></Row>
    )
  }

  renderDerivatedValues() {
    return (
      <Row><Column>
        <Row>
          <Column width={3}>Size</Column><Column width={3}>5</Column>
          <Column width={3}>Speed</Column><Column width={3}>7</Column>
        </Row>
        <Row>
          <Column width={3}>Defense</Column><Column width={3}>0</Column>
          <Column width={3}>Armor</Column><Column width={3}>0</Column>
        </Row>
        <Row>
          <Column width={6}>Initiative Mod.</Column><Column width={6}>3</Column>
        </Row>
        <Row>
          <Column width={6}>Beats</Column>
          <Column width={6}><DotBar length={5} value={0} shape="square" /></Column>
        </Row>
        <Row>
          <Column width={6}>Experiences</Column><Column width={6}>0</Column>
        </Row>
        <Row>
          <Column width={6}>Cover Beats</Column>
          <Column width={6}><DotBar length={5} value={0} shape="square" /></Column>
        </Row>
        <Row>
          <Column width={6}>Cover Experiences</Column><Column width={6}>0</Column>
        </Row>
      </Column></Row>
    );
  }
}

export default CharacterOtherTraitsRight;
