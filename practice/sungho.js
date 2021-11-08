import {StyleSheet, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {Text} from '~/theme';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '~/utils/colors';
import globalStyle from '~/theme/globalStyle';
import {TransitionPresets} from '@react-navigation/stack';
import {NavigationHeader} from '~/routes/components/NavigationHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Divider from '~/components/Divider';
const Sungho = ({navigation}) => {
  useLayoutEffect(() => {
      navigation.setOptions({
           animationEnabled: false,
           animationEnabled: true,
           gestureEnabled: true,
           headerShown: false,
           headerMode: '',
           ...TransitionPresets.SlideFromRightIOS,
           headerBackTitleVisible: false,
           headerTitleContainerStyle: {
               left: 0,
           },
           headerStyle: {
               elevation: 0,       //remove shadow on Android
               shadowOpacity: 0,   //remove shadow on iOS
           },
      })
  }, [])
  console.log('gdgdg');
  return (
    <SafeAreaView style={styles.container}
    >
      <NavigationHeader 
        Left={() => (
            <Icon
                name="arrow-left"
                size={29}
                onPress={() => navigation.pop()} />
        )}
        />
      <ScrollView style={{backgroundColor: 'white',flex:1,paddingHorizontal:28,paddingTop:24} }>
          <View style={{marginBottom:40}}>
              <Text style={{fontSize:28, color:colors.TITCONT, ...globalStyle.medium}}>대출상환</Text>
          </View>
            <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1,paddingHorizontal:14,paddingVertical:16,}}><Text style={{fontSize:18,...globalStyle.medium,color:colors.TITCONT}}>이번 회차</Text></View>
                <View style={{flex:1,paddingHorizontal:14,paddingVertical:16,}}><Text style={{fontSize:18,...globalStyle.medium,color:colors.DISCONT}}>일부 상환</Text></View>
                <View style={{flex:1,paddingHorizontal:14,paddingVertical:16, }}><Text style={{fontSize:18,...globalStyle.medium,color:colors.DISCONT}}>전액 상환</Text></View>
            </View>
            <View style={{borderWidth:1}}>
            <View style={{justifyContent:'space-between',flexDirection:'row',paddingHorizontal:12,paddingVertical:16}}>
                <View><Text style={{flex:1}}>계좌명</Text></View>
                <View><Text style={{flex:2}}>123-01-12-1234567</Text></View>
            </View>
                <Divider/>
            <View style={{justifyContent:'space-between',flexDirection:'row',paddingHorizontal:12,paddingVertical:16}}>
                <View><Text style={{flex:1}}>잔액</Text></View>
                <View><Text style={{flex:2}}>200,000 원</Text></View>
            </View>
            </View>
            {/* 상환금액 */}
            <View style={{justifyContent:'space-between',alignItems:'center',backgroundColor:colors.BGLINE_04,marginTop:24,marginBottom:16,paddingVertical:7}}>
                <View style={{flex:1}}><Text style={{fontSize:18,color:colors.TITCONT,...globalStyle.regular}}>총 상환금액</Text></View>
                <View style={{flex:1}}><Text style={{fontSize:24,color:colors.TITCONT,...globalStyle.bold}}>123,456 원</Text></View>
            </View>
            <View>
                <View style={{flexDirection:'row',width:'100%'}}>
                    <View style={{flex:1.5,marginBottom:8}}><Text style={styles.loan_font}>상환 기한</Text></View>
                    <View style={{flex:2}}><Text style={{textAlign: 'right'}}>2021.01.01 ~ 2022.01.01</Text></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.5,marginBottom:8}}><Text style={styles.loan_font}>최종 납입일</Text></View>
                    <View style={{flex:2}}><Text style={{textAlign: 'right'}}>2021.01.01</Text></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.5,marginBottom:8}}><Text style={styles.loan_font}>다음 납입일</Text></View>
                    <View style={{flex:2}}><Text style={{textAlign: 'right'}}>2021.01.01</Text></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.5,marginBottom:8}}><Text style={styles.loan_font}>대출 원금</Text></View>
                    <View style={{flex:2}}><Text style={{textAlign: 'right'}}>120,000 원</Text></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.5,marginBottom:8}}><Text style={styles.loan_font}>대출 이자</Text></View>
                    <View style={{flex:2}}><Text style={{textAlign: 'right'}}>1,234 원</Text></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.5,marginBottom:8}}><Text style={styles.loan_font}>중도상환수수료</Text></View>
                    <View style={{flex:2}}><Text style={{textAlign: 'right'}}>0 원</Text></View>
                </View>
            </View>
            <Divider/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
      flex:1,
  },loan_font:{
    fontSize:17,
    color:colors.SUBCONT,
    ...globalStyle.regular
  }
   
});

export default Sungho;
