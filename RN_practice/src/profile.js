
import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


class Profile extends Component {

    render() {

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.myinfotitle}>정보</Text>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>기본정보</Text>
                    </View>
                    <View style={styles.basicinfo}>
                        <View style={styles.elem}>
                            <View style={{
                                position:'absolute',
                                left:-20,
                                width:4,
                                height:25,
                                backgroundColor:'rgb(180,1,1)',
                                flex:0
                                }}/>
                            <Text style={styles.info}>이름</Text>
                            <Text style={styles.infoprofile}>{this.props.name}</Text>
                        </View>
                            <View style={styles.line}/>
                        <View style={styles.elem}>
                            <Text style={styles.info}>주민등록번호</Text>
                            <Text style={styles.infoprofile} >{this.props.rsnumber}</Text>
                        </View>
                        <View style={styles.elem}>
                            <Text style={styles.info}>휴대폰 번호</Text>
                            <Text style={styles.infoprofile}>{this.props.phonenumber}</Text>
                        </View>
                        <View style={styles.elem}>
                            <Text style={styles.info}>이메일</Text>
                            <Text style={styles.infoprofile}>{this.props.email}</Text>
                        </View>
                        <View style={styles.elem}>
                            <Text style={styles.info}>거주지</Text>
                            <Text style={styles.infoprofile}>{this.props.address}</Text>
                        </View>
                        <View style={styles.elem}>
                            <Text style={styles.info}>자택 전화번호</Text>
                            <Text style={styles.infoprofile}>051-154-1234</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>직장정보</Text>
                    </View>
                    <View style={styles.basicinfo}>
                        <View style={styles.elem}>
                            <Text style={styles.info}>직장명</Text>
                            <Text style={styles.infoprofile}>제일기업</Text>
                        </View>
                        <View style={styles.elem}>
                            <Text style={styles.info}>직장주소</Text>
                            <Text style={styles.infoprofile}>경기도 성남시 중원구 </Text>
                        </View>
                        <View style={styles.elem}>
                            <Text style={styles.info}>직장 전화번호</Text>
                            <Text style={styles.infoprofile}>010-1234-1234</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>수신동의설정</Text>
                    </View>
                    <View style={styles.basicinfo}>
                        <View style={styles.elem}>
                            <Text style={styles.info}>SMS</Text>
                            <Text style={styles.infoprofile}>수신</Text>
                        </View>
                        <View style={styles.elem}>
                            <Text style={styles.info}>우편물</Text>
                            <Text style={styles.infoprofile}>수신안함</Text>
                        </View>
                        <View style={styles.elem}>
                            <Text style={styles.info}>이메일</Text>
                            <Text style={styles.infoprofile}>수신안함</Text>
                        </View>
                        <View style={styles.elem}>
                            <Text style={styles.info}>개인(신용)정보{"\n"}제공동의</Text>
                            <Text style={styles.infoprofile}>문자/전화/이메일</Text>
                        </View>
                        <Text style={styles.info,{fontSize:13}}>(상품서비스안내등)</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.footer}>
                        <Text style={styles.infochange}>
                            정보변경
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 28,
    },
    myinfotitle: {
        marginTop:24,
        fontSize: 28,
        fontWeight:'bold',
        letterSpacing: 0.7,
        color: 'rgb(19,19,19)'
    },
    subtitle: {
        fontSize: 18,
        fontWeight:'600',
        letterSpacing: 0.45,
        lineHeight: 24,
        color: 'rgb(19,19,19)',
        marginTop: 40,
        paddingBottom:8
    },
    line:{
        borderWidth:1,
        borderColor:'rgb(243,243,243)'
    },
    basicinfo: {
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingBottom: 16,
        paddingTop: 16,
    },
    elem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    },
    info: {
        letterSpacing: 0.43,
        lineHeight: 24,
        fontSize: 17,
        color: 'rgb(85, 85, 85)',
    },
    infoprofile:{
        color:'rgb(19,19,19)',
        fontSize:17,
        letterSpacing: 0.43,

    },
    footer: {
        height: 89,
        backgroundColor: 'rgb(180,1,1)',
        marginTop: 80,
        justifyContent: 'center',
        alignItems:'center',
    },
    infochange:{
        fontSize:18,
        fontWeight:'600',
        color:'white',
        lineHeight:24,
        marginBottom:20
    }

})

export default Profile;