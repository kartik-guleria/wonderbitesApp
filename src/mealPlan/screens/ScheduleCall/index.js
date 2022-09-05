import React from "react";
import MyButton from "components/MyButton";
import NavigationHeader from "components/NavigationHeader";
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { FONTS, COLORS, SIZES } from "assets/";
import RadioButton from "components/RadioButton";
import MainStyle from "styleSheet/MainStyle";
import InputField from 'components/InputField';
import { useTranslation } from "react-i18next";
const ScheduleCall = props => {
    const { t, i18n } = useTranslation();
return(
    <SafeAreaView style = {MainStyle.safeAreaContainerLight}>
        <NavigationHeader title="Schedule a call" navigation={props.navigation}/>
        <View style ={{flex:1,justifyContent:'space-between'}}>
            <View>
                <InputField
                    placeholder={'Name*'}
                    capitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    secureText={false}
                    checkVal={null}
                    txtValue={null}
                  />
                <InputField
                    placeholder={'Email*'}
                    capitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    secureText={false}
                    checkVal={null}
                    txtValue={null}
                  />
                <InputField
                    placeholder={'Contact number*'}
                    capitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    secureText={false}
                    checkVal={null}
                    txtValue={null}
                  />

            <Text style ={{marginLeft:16,marginRight:16,marginTop:40,fontFamily:FONTS.normal, fontSize:SIZES.h2,fontWeight:SIZES.w5,lineHeight:SIZES.l3}}>
            Prefered mode of Communication
            </Text>
            <View style={{flexDirection:'row',marginTop:20,marginLeft:3}}>
                <View style={{flexDirection:'row'}}>
                <RadioButton/> 
                <Text style ={{alignSelf:'center',marginLeft:16,marginRight:16,fontFamily:FONTS.normal, fontSize:SIZES.h2,fontWeight:SIZES.w3,lineHeight:SIZES.l3}}>
                Email
                </Text>
                </View>
                <View style = {{flexDirection:'row'}}>
                <RadioButton/>
                <Text style ={{alignSelf:'center',marginLeft:16,marginRight:16,fontFamily:FONTS.normal, fontSize:SIZES.h2,fontWeight:SIZES.w3,lineHeight:SIZES.l3}}>
                Phone
                </Text>
                </View>
            </View>
            </View>
            <MyButton title="Submit" onSelect={() => props.navigation.navigate('CallScheduled')} />
        </View>
    </SafeAreaView>
);
}
export default ScheduleCall;
