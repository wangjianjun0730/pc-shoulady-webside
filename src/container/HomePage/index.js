import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {homePageRequestApi} from '../../utils/api';
import homeAction from './action';
import './style.less';
import homePageReducer from "./reducer";

class SLHomePage extends Component {

  requestHandler = () => {
    const {Actions} = this.props;
    Actions.homeAction('GET', homePageRequestApi, {});
  };

  render() {
    return (
      <div className="Home-container">
        <div className="Home-"></div>
        {/*<header className="Home-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo"/>*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        {/*</header>*/}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.homePageReducer;

const mapActionToProps = (dispatch) => ({
  Actions: bindActionCreators({homeAction}, dispatch)
});

export default connect(mapStateToProps, mapActionToProps)(SLHomePage);
