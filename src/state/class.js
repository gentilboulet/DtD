import * as Immutable from 'immutable';

const _default = {
  character: Immutable.Map({
    type: 'CHARACTER_TYPE_DEMON',
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
      strength: Immutable.Map({value: 1}),
      intelligence: Immutable.Map({value: 1}),
      charisma: Immutable.Map({value: 1}),
      dexterity: Immutable.Map({value: 1}),
      wits: Immutable.Map({value: 1}),
      manipulation: Immutable.Map({value: 1}),
      stamina: Immutable.Map({value: 1}),
      resolve: Immutable.Map({value: 1}),
      composure: Immutable.Map({value: 1})
    }),
    skills: Immutable.Map({}),
    merits: Immutable.Map({}),
    aspirations: Immutable.Map({}),
    cipher: Immutable.Map({ interlocks : Immutable.Map({}), truth : '' })
  }),
  layout: Immutable.Map({
    page: '/'
  }),
  data: Immutable.Map({
    virtues: Immutable.List([
      {name: 'happy', description: 'placeholder'},
      {name: 'smart', description: 'placeholder'}
    ]),
    vice: Immutable.List([
      {name: 'greedy', description: 'placeholder'},
      {name: 'cheeky', description: 'placeholder'}
    ])
  })
};

export class state extends Immutable.Record(_default) {
  constructor() {
    super(_default);
  }
};
