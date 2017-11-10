import * as React from 'react';
import { Card, CardTitle, CardBlock, Button } from 'reactstrap'
import hello from 'hellojs/dist/hello.all.js';
import { MsGraph } from 'config';

class DataSourceCardOneNote extends React.PureComponent {
  constructor(props) {
    super(props);

    this.doLogin = this.doLogin.bind(this);
  }

  doLogin() {
    console.log('doLoging()');
    const msft = hello('msft');
    /*msft.login({ scope: MsGraph.scope })
    .then(
      () => this.props.history.push('/') ,
      err => console.error(err.error.message)
    );*/
    this.props.onConnect({token: 'abcd'});
  }

  render() {
    return (
      <Card>
        <CardBlock>
          <CardTitle>OneNote</CardTitle>
          <Button onClick={this.doLogin}>Connect to your account!</Button>
        </CardBlock>
      </Card>
    );
  }
}

export default DataSourceCardOneNote;
