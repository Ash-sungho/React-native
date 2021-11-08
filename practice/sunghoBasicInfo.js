import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';

class SunghoBasicInfo extends Component {



    render() {
        return (
            <View style={styles.container}>
                <Text>이름 : </Text>
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }

})

export default SunghoBasicInfo;