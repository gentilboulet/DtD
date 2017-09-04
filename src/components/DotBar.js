import * as React from 'react';
import Icon from 'react-fa';

// circle, circle-o, square, square-o

class DotBar extends React.Component {
  constructor(props) {
    super(props);

    switch(props.shape) {
      case 'square': this.shape='square'; break;
      default: this.shape='circle';
    }

    this.renderOneDot=this.renderOneDot.bind(this);
    if (this.props.length <= 0) { throw(new Error('DotBar length should be >0')); }
    if (this.props.length < this.props.value) { throw( new Error('DotBar length is < than its value')); }
  }

  render() {
    const range = (start, end) => Array.from({length: (end - start + 1)}, (v, k) => k + start);
    return <div>{range(1, this.props.length).map(n => this.renderOneDot(n<=this.props.value, n))}</div>;
  }

  renderOneDot(fill, id) {
    const name = fill ? this.shape : this.shape + '-o';
    return <Icon name={name} key={id} />
  }
}

export default DotBar;
