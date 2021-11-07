import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class HomeScreen extends Component {

    
    render() {

        return (
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent: 'center',
            }}>
                <Text>Home screen</Text>
                <Button 
                title="Home Screen" 
                onPress={()=>{
                    this.props.navigation.navigate('user',{
                        userIdx:100,
                        userName:'sungho',
                        userLastName:'An'
                    })
                }}
                />
                <Button
                    title="Change the title"
                    onPress={()=>{
                        this.props.navigation.setOptions({
                            title:'changed!!',
                            headerStyle:{
                                color:'green',
                            backgroundColor:'pink',
                        },
                        headerTintColor:'red'
                    })
                    }}
                />
            </View>
        );
    }
}

export default HomeScreen;