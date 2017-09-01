import * as React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

class AppHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Demon : The Descent</h1>
        <nav className="link-list">
          <Link to="/">Homepage</Link>
          <Link to="/export">Export</Link>
        </nav>
      </div>
    );
  }
}

export default AppHeader;
