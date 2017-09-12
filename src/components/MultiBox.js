import * as React from 'react';
import { Typeahead, Token } from 'react-bootstrap-typeahead';
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import PropTypes from 'prop-types';

class MultiBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popoverOpen : false,
      popoverTitle: '',
      popoverContent : '',
      value: this.props.value,
    }

    this.toggle = this.toggle.bind(this);
    this.setPopopver = this.setPopopver.bind(this);
    this.closePopover = this.closePopover.bind(this);
    this._renderToken = this._renderToken.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(options) {
    this.setState({
      value: options.map(o => o.name),
    });
  }

  onChange() {
    this.props.onChange(this.state.value);
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  setPopopver (option) {
    this.setState({
      popoverOpen: true,
      popoverTitle: option.name,
      popoverContent: option.description
    })
  }

  closePopover () {
    this.setState({
      popoverOpen: false
    });
  }

  _renderMenuItemChildren(option, props, index) {
    return [
      <strong key="name">{option.name}</strong>,
      <div key="description">
        {option.description}
      </div>,
    ];
  }

  _renderToken(selectedItem, onRemove) {
    return (
      <Token onRemove={onRemove} key={'token_' + selectedItem.name}>
        <span
          onMouseOver={(e) => this.setPopopver(selectedItem)}
          onMouseOut={(e) => this.closePopover()}
        >
        {selectedItem.name}
        </span>
      </Token>
    );
  }

  _renderTypeahead() {
    if (this.props.multiple) {
      return (
        <Typeahead
          renderMenuItemChildren={this._renderMenuItemChildren}
          renderToken={this._renderToken}
          labelKey={option => option.name}
          placeholder={this.props.label}
          multiple={true}
          options={this.props.data}
          bsSize="small"
          value={this.props.value}
          onBlur={ () => {this.onChange();} }
          onKeyPress={ (e) => { if (e.key === "Enter") { this.onChange(); }} }
          onChange={(options) => this.onTextChange(options)}
        />);
    } else {
      return (
        <div
          onMouseOver={(e) => {
            const found = this.props.data.filter(d => {
              return this.state.value.filter(o => o === d.name).length > 0;
            });
            if (found.length === 1) {
              this.setPopopver(found[0]);
            }
          }}
          onMouseOut={(e) => this.closePopover()}
        >
          <Typeahead
            renderMenuItemChildren={this._renderMenuItemChildren}
            labelKey={option => option.name}
            placeholder={this.props.label}
            multiple={false}
            options={this.props.data}
            bsSize="small"
            value={this.props.value}
            onBlur={ () => {this.onChange();} }
            onKeyPress={ (e) => { if (e.key === "Enter") { this.onChange(); }} }
            onChange={(options) => this.onTextChange(options)}
          />
        </div>);
    }
  }

  render() {
      return (
        <div id={'popover1_' + this.props.label}>
          {this._renderTypeahead()}
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen}
            target={'popover1_' + this.props.label}
            toggle={this.toggle}
            >
            <PopoverTitle>{this.state.popoverTitle}</PopoverTitle>
            <PopoverContent>
              {this.state.popoverContent}
            </PopoverContent>
          </Popover>
        </div>
      );
  }
};

MultiBox.propTypes = {
  label: PropTypes.string.isRequired,
  value : PropTypes.arrayOf(PropTypes.string).isRequired,
  data : PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.any.isRequired
    })
  ).isRequired,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

MultiBox.defaultProps = {
  multiple: false,
};

export default MultiBox;
