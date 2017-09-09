import * as React from 'react';
import Icon from 'react-fa';
import PropTypes from 'prop-types';

// circle, circle-o, square, square-o

class DotBar extends React.PureComponent {
  constructor(props) {
    super(props);

    switch(props.shape) {
      case 'square': this.shape='square'; break;
      default: this.shape='circle';
    }

    this.state = { hover: -1 };

    if (this.props.length <= 0) { throw(new Error('DotBar length should be >0')); }
    if (this.props.length < this.props.value) { throw( new Error('DotBar length is < than its value')); }

    this.dynamic = (! this.props.onClick ) ? false : true ;
    this.resetTo0 = (! this.props.resetTo0) ? false : true;

    this.renderLeftestDot = this.renderLeftestDot.bind(this);
    this.renderOneDot = this.renderOneDot.bind(this);
    this.setHover = this.setHover.bind(this);
    this.resetHover = this.resetHover.bind(this);
  }

  render() {
    const range = (start, end) => Array.from({length: (end - start + 1)}, (v, k) => k + start);
    const style = {textAlign: 'right'};
    return (
      <div style={style} >
        {this.renderLeftestDot()}
        {range(0, this.props.length).map(n => this.renderOneDot(n<=this.props.value && n > 0, n))}
      </div>
    );
  }

  renderLeftestDot() {
    if (! this.dynamic) { return; }
    if (this.state.hover === 0) {
      const name = this.shape === 'circle' ? 'times-circle-o' : 'times-rectangle-o'
      return <Icon key={0} name={name}
        onClick={ () => this.props.onClick(0) } onMouseOut={ () => this.resetHover() } />;
    } else if(this.resetTo0) {
      return <span onMouseOver={ () => this.setHover(0) }
              onMouseOut={ () => this.resetHover() } key={0} >&nbsp;&nbsp;&nbsp;</span>;
    }
  }

  renderOneDot(fill, id) {
    if (! this.dynamic) {
      const name = fill ? this.shape : this.shape  + '-o';
      return <Icon name={name} key={id} />
    } else if (id > 0) {
      var name = fill ? this.shape : this.shape + '-o';
      if (this.state.hover >= 0) {
        if (fill) {
          if (this.state.hover < id) { name = 'minus-' + this.shape + '-o'; }
        } else {
          if (this.state.hover >= id) { name = 'plus-' + this.shape; }
        }
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

  resetHover() { this.setState({ hover: -1 }); }
}

DotBar.propTypes = {
  shape: PropTypes.oneOf(['circle','square']),
  length: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default DotBar;
