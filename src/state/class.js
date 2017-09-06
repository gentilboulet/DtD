import * as Immutable from 'immutable';

const _default = {
  character: Immutable.Map({
    type: 'CHAR_TYPE_DEMON',
    name: '',
    player: '',
    chronicle: '',
    concept: '',
    virtue: '',
    vice: '',
    incarnation: '',
    agenda: '',
    catalyst: '',
    attributes: Immutable.Map({
      strength: 1,
      intelligence: 1,
      charisma: 1,
      dexterity: 1,
      wits: 1,
      manipulation: 1,
      stamina: 1,
      resolve: 1,
      composure: 1,
    }),
    skills: Immutable.Map({}),
    merits: Immutable.Map({}),
    aspirations: Immutable.Map({}),
    cipher: Immutable.Map({ interlocks : Immutable.Map({}), truth : '' })
  })
};

export class state extends Immutable.Record(_default) {
  constructor() {
    super(_default);
  }
};
