import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {someRestFulApi} from '../../utils/api';
import appAction from './action';
import logo from '../../logo.svg';
import './style.less';

class App extends Component {

  requestHandler = () => {
    const {Actions} = this.props;
    Actions.appAction('GET', someRestFulApi, {});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.appReducer;

const mapActionToProps = (dispatch) => ({
  Actions: bindActionCreators({appAction}, dispatch)
});

export default connect(mapStateToProps, mapActionToProps)(App);
