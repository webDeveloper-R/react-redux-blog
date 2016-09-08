import React from 'react';
import { Component } from 'react';
import AppContainer from '../containers/AppContainer';
import LeftPanel from '../containers/PanelContainer';

export default class App extends Component {
  render() {
    return (
    	<AppContainer>
          <div className="row row1">
            <div className="col-md-3 left-panel">
              <h1 className="left-panel-title">ADMIN DASHBOARD</h1>
              <LeftPanel />
            </div>
            <div className="col-md-9 right-board">
    	      {this.props.children}
            </div>
          </div>
    	</AppContainer>
    );
  }
}