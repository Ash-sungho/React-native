import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';

class UserScreen extends Component {

    headerStyle = () => {
        this.props.navigation.setOptions({
             title:'Customizing',
             headerStyle:{backgroundColor:'yellow'},
             headerTintColor:'green',
             headerTitleStyle:{
               fontWeight:'bold',
               color:'purple'
            }
        })
    }


    render() {
        //this.headerStyle();
        const {params} = this.props.route;
        const userIdx = params ? params.userIdx :null
        const userName = params ? params.userName :null
        const userLastName = params ? params.userLastName :null

        return (
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent: 'center',
            }}>
                <Text>UserScreen screen</Text>
                <Button 
                title="User Screen" 
                onPress={()=>{this.props.navigation.navigate("home")}}
                />

                <Text>userIdx: {JSON.stringify(userIdx)}</Text>
                <Text>userName: {JSON.stringify(userName)}</Text>
                <Text>userLastName: {JSON.stringify(userLastName)}</Text>
            </View>
        );
    }
}

export default UserScreen;