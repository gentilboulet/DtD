import * as React from 'react';
import Icon from 'react-fa';
import PropTypes from 'prop-types';

// circle, circle-o, square, square-o

class DotBar extends React.Component {
  constructor(props) {
    super(props);

    switch(props.shape) {
      case 'square': this.shape='square'; break;
      default: this.shape='circle';
    }

    if (this.props.length <= 0) { throw(new Error('DotBar length should be >0')); }
    if (this.props.length < this.props.value) { throw( new Error('DotBar length is < than its value')); }

    this.dynamic = (! this.props.onClick ) ? false : true ;

    this.renderOneDot=this.renderOneDot.bind(this);
  }

  render() {
    const range = (start, end) => Array.from({length: (end - start + 1)}, (v, k) => k + start);
    return <div>{range(1, this.props.length).map(n => this.renderOneDot(n<=this.props.value, n))}</div>;
  }

  renderOneDot(fill, id) {
    const name = fill ? this.shape : this.shape + '-o';
    if (! this.dynamic) {
      return <Icon name={name} key={id} />
    } else {
      const noop = () => {};
      const click = () => { this.props.onClick(id); };
      return <div onClick={(this.props.value === id) ? noop : click} ><Icon name={name} key={id} /></div>
    }
  }
}

DotBar.propTypes = {
  shape: PropTypes.oneOf(['circle','square']),
  length: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default DotBar;
