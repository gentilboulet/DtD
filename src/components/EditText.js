import * as React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

class EditText extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {text: this.props.value };
    this.onTextChange = this.onTextChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
        <Input type="text" placeholder={this.props.label} size="sm"
          onBlur={ () => {this.onChange();} }
          onKeyPress={ (e) => { if (e.key === "Enter") { this.onChange(); }} }
          onChange={ (e) => this.onTextChange(e.target.value) }
          >
          {this.state.value}
        </Input>
    );
  }

  onTextChange(value) {
    this.setState({text: value});
  }

  onChange() {
    if (this.props.value !== this.state.text) {
      this.props.onChange(this.state.text);
    }
  }

}

EditText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default EditText;
