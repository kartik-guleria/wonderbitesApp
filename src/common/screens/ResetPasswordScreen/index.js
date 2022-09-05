import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import MyButton from 'components/MyButton';
import InputField from 'components/InputField';
import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import { FONTS, SIZES } from 'assets/index';
import { resetPasswordRequest } from './actions';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
const ResetPasswordScreen = props => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const passwordData = useSelector(state => state.ResetPasswordReducer.passwordData);


  const checkTextInput = () => {
    let errorMsg = '';
    if (!email) {
      errorMsg = 'Please enter your email';
    } else if (!validate(email)) {
      errorMsg = 'Please enter a valid email';
    } else {
      dispatch(
        resetPasswordRequest({ email: email })
      );
      return;
    }
    showToast(errorMsg);
    return;
  };

  const validate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text) === true;
  };
  const showToast = errorMsg => {
    Toast.show({
      type: 'error',
      text1: '' + errorMsg,
      text1Style: {
        fontSize: 20,
        fontWeight: '400',
      },
    });
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <View style={MainStyle.mainBody}>
        <StatusBar barStyle="dark-content" />
        <NavigationHeader
          title={t('common:ResetPassword')}
          navigation={props.navigation}
        />

        <View
          style={[
            MainStyle.MainContainerLight,
            { marginLeft: 15, paddingTop: 10, marginRight: 15 },
          ]}>
          <Text
            style={[
              MainStyle.headingDesc,
              {
                textAlign: 'left',
                fontWeight: SIZES.w5,
                fontFamily: FONTS.normal,
                fontSize: SIZES.h6,
                marginBottom: 18,
              },
            ]}>
            {t('common:ResetPassword')}
          </Text>
          <Text style={[MainStyle.descText, { textAlign: 'left' }]}>
            {t('common:ResetPasswordDesc')}
          </Text>
          <View style={{ marginBottom: 25, marginRight: -15, marginLeft: -15 }}>
            <InputField
              placeholder={t('common:ResetPasswordEmail')}
              capitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              checkVal={value => setEmail(value)}
            />
          </View>
          <View style={{ marginLeft: -15, marginRight: -15 }}>
            <MyButton title={t('common:SendInstructions')} onSelect={checkTextInput}
            />
          </View>
          {/* </KeyboardAvoidingView> */}
        </View>
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
