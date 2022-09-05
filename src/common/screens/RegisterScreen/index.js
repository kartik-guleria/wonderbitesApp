import React, { useState } from 'react';
import {View, Text, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import InputField from 'components/InputField';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import {SIZES} from 'assets/index';

const RegisterScreen = props => {
  const {t, i18n} = useTranslation();
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
        <StatusBar barStyle="dark-content" />
        <NavigationHeader
          title={t('common:PersonalDetails')}
          navigation={props.navigation}
        />
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={[
              MainStyle.headingDescTwo,
              {
                marginLeft: SIZES.mlr1,
                marginRight: SIZES.mlr1,
                marginTop: 30,
                marginBottom: 10,
                textAlign: 'left',
              },
            ]}>
            {t('common:tellUs')}
          </Text>
          <InputField
            placeholder={t('common:FirstName')}
            capitalize="none"
            keyboardType="default"
            returnKeyType="next"
            secureText="false"
            checkVal={value => setFirstName({firstName: value})}
          />

          <InputField
            placeholder={t('common:LastName')}
            capitalize="none"
            keyboardType="default"
            returnKeyType="next"
            secureText="false"
            checkVal={value => setLastName({lastName : value})}
          />
          <InputField
            placeholder={t('common:Email')}
            capitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            secureText="false"
            checkVal={value => setEmail({email: value})}
          />
          <View style={{marginTop: 20}}>
            <MyButton 
              title={t('common:Register')}
              onSelect={() => { 
                // if(firstName === '' && lastName === '' && email === '')
                // { null }
                // else
                // {
                  props.navigation.navigate('BottomTabs');
                // }
              }}
            />
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
