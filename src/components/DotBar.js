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

    this.state = {
      hover: this.props.value,
    }

    if (this.props.length <= 0) { throw(new Error('DotBar length should be >0')); }
    if (this.props.length < this.props.value) { throw( new Error('DotBar length is < than its value')); }

    this.dynamic = (! this.props.onClick ) ? false : true ;

    this.renderOneDot=this.renderOneDot.bind(this);
    this.setHover = this.setHover.bind(this);
    this.resetHover = this.resetHover.bind(this);
  }

  render() {
    const range = (start, end) => Array.from({length: (end - start + 1)}, (v, k) => k + start);
    return <div>{range(1, this.props.length).map(n => this.renderOneDot(n<=this.props.value, n))}</div>;
  }

  renderOneDot(fill, id) {
    if (! this.dynamic) {
      const name = fill ? this.shape : this.shape + '-o';
      return <Icon name={name} key={id} />
    } else {
      var name = fill ? this.shape : this.shape + '-o';
      if (fill) {
        if (this.state.hover < id) { name = 'minus-' + this.shape; }
      } else {
        if (this.state.hover >= id) { name = 'plus-' + this.shape; }
      }

      return <Icon name={name} onClick={ () => this.props.onClick(id) }
                   onMouseOver={ () => this.setHover(id) }
                   onMouseOut={ () => this.resetHover() } key={id} />
    }
  }

  setHover(id) {
    if (id >= 0 && id <= this.props.length) {
      this.setState({
        hover : id,
      });
    }
  }

  resetHover() { this.setState({ hover: this.props.value }); }
}

DotBar.propTypes = {
  shape: PropTypes.oneOf(['circle','square']),
  length: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default DotBar;
