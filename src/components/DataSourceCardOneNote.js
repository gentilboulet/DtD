import * as React from 'react';
import { Card, CardTitle, CardBlock, FormGroup, Label, Input, Button } from 'reactstrap'

class DataSourceCardOneNote extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onConnect = this.onConnect.bind(this);
  }

  onTextChange(id) {
    if (id === this.state.id) { return; }
    this.setState({
      id: id
    });
  }

  onConnect() {
    if (this.state.id.length === 0) { return; }
    this.props.onConnect(this.state.id);
  }

  render() {
    return (
      <Card>
        <CardBlock>
          <CardTitle>OneNote</CardTitle>
              <FormGroup>
                <Label for="url">Notebook URL</Label>
                <Input type="text" name="url" id="url" placeholder="Enter an id" onChange={(e) => this.onTextChange(e.target.value)} />
              </FormGroup>
              <Button onClick={this.onConnect}>Connect !</Button>
        </CardBlock>
      </Card>
    );
  }
}

export default DataSourceCardOneNote;
