import React, { Component } from 'react';
import {
  AppRegistry,

} from 'react-native';

import App from './appContainerMR';

export default class magicMobile extends Component {
  render() {
    return (

      <App />

    );
  }
}



AppRegistry.registerComponent('magicMobile', () => magicMobile);
