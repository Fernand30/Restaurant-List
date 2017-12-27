import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Actions } from 'react-native-router-flux';
import {Colors, Fonts, Images, Metrics, Constants } from '../../Themes';
import Styles from './styles.js'

export default class FirstScreen extends Component {
  
  constructor(props){
        super(props);
      }

  componentDidMount(){
    
  }

  render() {
    that = this;
    return (
            <View style = {Styles.container}>
                   <View style={{height:20,}}/>
                   <View style={Styles.headerView}>
                      <Image source={Images.menu_hamburger} style={Styles.hamburgerImage}/>
                      <View style={Styles.headerTextInputView}>
                          <Image source={Images.Search} style={Styles.searchImage}/>
                          <TextInput style={Styles.headerTextInput} placeholder='Search Restaurants & Cuisines Here'/>
                      </View>
                      <View style={Styles.headerRightView}>
                          <View style={Styles.notificationview}>
                              <Text style={Styles.notificationNumber}>1</Text>
                          </View>
                          <Image source={Images.recycle} style={Styles.recycleImage}/>
                      </View>    
                   </View>
                   <View style={Styles.TabView}>
                      <Image source={Images.Rectangle} style={Styles.rectangleImage}/>
                      <Text style={Styles.selecTabText}> Nearby</Text>
                      <Text style={Styles.tabText}> Best Reviews</Text>
                      <Text style={Styles.tabText}> Fast Delivery</Text>
                      <Text style={Styles.tabText}> Delivery</Text>
                   </View>
                   <View style={Styles.scrollView}>
                      <TouchableOpacity style={Styles.lookButton}>
                          <Image source={Images.ticket} style={Styles.ticketImage}/>
                          <Text style={Styles.buttonText}>Looking for Special Deals?</Text>
                      </TouchableOpacity>
                      <ScrollView >
                        <View style={Styles.itemView}>
                            <Image source={Images.list_food} style={Styles.foodImage}/>
                            <Image source={Images.top_left} style={Styles.topImage}/>
                            <Image source={Images.star_rating} style={Styles.starImage}/>
                            <Image source={Images.Like} style={Styles.likeTopImage}/>
                        </View>
                        <View style={Styles.itemView}>
                            <Image source={Images.list_food} style={Styles.foodImage}/>
                            <Image source={Images.star_rating} style={Styles.starImage}/>
                            <Image source={Images.Like} style={Styles.likeBottomImage}/>
                        </View>
                      </ScrollView>
                   </View>
            </View>
    );
  }
}

AppRegistry.registerComponent('FirstScreen', () => Layout_Text);
