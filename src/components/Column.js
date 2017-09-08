import * as React from 'react';
import { Col } from 'reactstrap';

class Column extends React.PureComponent {
  constructor(props) {
    super(props);
    if ((this.props.width) && (this.props.width <= 0 || this.props.width >12)) {
      throw(new Error('Column : invalid width'));
    }
  }

  render() {
    const width = (!this.props.width) ? 12 : this.props.width;
      return (
        <Col
          xs={width}
          sm={width}
          md={width}
          lg={width}
          xl={width}
          >{this.props.children}
        </Col>);
  }
}

export default Column;
