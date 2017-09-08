import * as React from 'react';
import { Container, Row } from 'reactstrap';
import Column from 'components/Column';

import DemonAttributes from 'containers/DemonAttributes';
import DemonHeader from 'containers/DemonHeader';
import DemonSkills from 'containers/DemonSkills';
import DemonOtherTraits from 'components/DemonOtherTraits';

class Demon extends React.PureComponent {
  render() {
    return (
      <Container>
        <Row><Column><DemonHeader /></Column></Row>
        <Row><Column><DemonAttributes /></Column></Row>
        <Row>
          <Column width={4}><DemonSkills /></Column>
          <Column width={8}><DemonOtherTraits /></Column>
        </Row>
      </Container>);
  }
}

export default Demon;
