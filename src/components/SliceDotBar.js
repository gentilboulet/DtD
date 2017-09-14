import * as React from 'react';
import Icon from 'react-fa';
import PropTypes from 'prop-types';

// circle, circle-o, square, square-o

class SliceDotBar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { hover: -1 };

    if (this.props.length <= 0) { throw(new Error('SliceDotBar length should be >0')); }
    if (this.props.length < this.props.value) { throw( new Error('SliceDotBar length is < than its value')); }
    this.props.options.forEach(o => {
      if (o>this.props.length) { throw( new Error('SliceDotBar option incompatible with current length')); }
    });

    this.dynamic = (! this.props.onClick ) ? false : true ;

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
        {
          range(1, this.props.length).map(n => {
            const opt = this.props.options.find(o => (n > 0 && n <=o));
            const id = (!opt) ? n : opt;
            return this.renderOneDot(n<=this.props.value && n > 0, id, n);
        })
      }
      </div>
    );
  }

  renderLeftestDot() {
    if (! this.dynamic) { return; }
    if (this.state.hover === 0) {
      const name = 'times-circle-o';
      return <Icon key={0} name={name}
        onClick={ () => this.props.onClick(0) } onMouseOut={ () => this.resetHover() } />;
    } else {
      return <span onMouseOver={ () => this.setHover(0) }
              onMouseOut={ () => this.resetHover() } key={0} >&nbsp;&nbsp;&nbsp;</span>;
    }
  }

  renderOneDot(fill, id, num) {
    const opt = this.props.options.find(o => (num > 0 && num <=o));
    if (! this.dynamic || !opt) {
      const name = fill ? 'circle' : 'circle-o';
      return <Icon name={name} key={num} />
    } else if (id > 0) {
      var name = fill ? 'circle' : 'circle-o';
      if (this.state.hover >= 0) {
        if (fill) {
          if (this.state.hover < id) { name = 'minus-circle'; }
        } else {
          if (this.state.hover >= id) { name = 'plus-circle'; }
        }
      }
      return <Icon name={name} onClick={ () => this.props.onClick(id) }
                   onMouseOver={ () => this.setHover(id) }
                   onMouseOut={ () => this.resetHover() } key={num} />
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

SliceDotBar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  length: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default SliceDotBar;
