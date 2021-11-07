import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Profile from './src/profile';


class App extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <Profile 
            name='sungho' 
            phonenumber = '010-1234-5678'
            rsnumber = '950510-1234567'
            address = '경기도 용인시'
            email = 'andykr1234@naver.com'
            />
      </View>
    )
  }
}

const Styles = StyleSheet.create({

})

export default App;