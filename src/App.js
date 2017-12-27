import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router, Route, Schema, Animations, Scene,TabBar} from 'react-native-router-flux'

import FirstScreen from './screens/FirstScreen/index';

const Routes = () => (

  <Router hideNavBar={true}>
    <Scene key = "root">
      <Scene key = "firstscreen" component = {FirstScreen} hideNavBar={true} {...this.props} initial/>
        
     
    </Scene>
 </Router>


);

export default Routes