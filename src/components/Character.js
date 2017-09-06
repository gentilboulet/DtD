import * as React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Demon from 'components/Demon';

const Character = character => {
  switch(character.type) {
    case 'CHAR_TYPE_DEMON': return <Demon character={character} />
    default: return <Container color="danger">Error : character type not set</Container>
  }
};

Character.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Character;
