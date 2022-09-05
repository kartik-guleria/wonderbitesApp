import React, { useRef, useState } from 'react';
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Mainstyles from 'styleSheet/MainStyle';
import MyButton from 'components/MyButton';
import NavigationHeader from 'components/NavigationHeader';
import { t } from 'i18next';
import { COLORS, FONTS, SIZES, ComIcons } from 'assets/index';

const EmailVerificationCodeScreen = ({
  route: {
    params: { phoneNumber },
  }, navigation }) => {
  const firstInput = useRef()
  const secondInput = useRef()
  const thirdInput = useRef()
  const fourthInput = useRef()
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' })
  const [counter, setCounter] = React.useState(60);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const displayResendBtn = props => {
    return (
      <View style={{}}>
        <Text style={{ fontSize: SIZES.h2, fontFamily: FONTS.normal, lineHeight: SIZES.l3 }}>I didn’t receive a code!</Text>
        <TouchableOpacity style={{ alignSelf: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: SIZES.h3, fontFamily: FONTS.normal, lineHeight: SIZES.l4, color: COLORS.red, fontWeight: SIZES.w5, marginTop: 8 }}>Resend</Text>
        </TouchableOpacity>
      </View>
    )
  };

  return (
    <SafeAreaView style={Mainstyles.safeAreaContainerLight}>
      <View>
        <NavigationHeader
          title={t('common:VerificationCode')}
          navigation={navigation}
        />
        <View style={{}}>
          <KeyboardAvoidingView enabled>
            <View>
              <Text
                style={[
                  Mainstyles.headingDescTwo,
                  {
                    marginLeft: 70,
                    marginRight: 70,
                    marginTop: 70,
                    marginBottom: 30,
                  },
                ]}>
                {t('common:WeSentCode')}
              </Text>

              <Text style={Mainstyles.descText}>
                {t('common:SentTo')} person's Email
              </Text>
            </View>
            <View
              style={[
                Mainstyles.ChooseType,
                { marginTop: 30, marginBottom: 20 },
              ]}>
              <View style={{ height: 70 }}>
                <TextInput
                  style={[Mainstyles.otpTextBox, { fontSize: SIZES.h5 }]}
                  placeholderTextColor="#000000"
                  keyboardType="number-pad"
                  returnKeyType="next"
                  blurOnSubmit={false}
                  maxLength={1}
                  ref={firstInput}
                  onChangeText={text => {
                    setOtp({ ...otp, 1: text })
                    text && secondInput.current.focus()
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={[Mainstyles.otpTextBox, { fontSize: SIZES.h5 }]}
                  placeholderTextColor="#000000"
                  keyboardType="number-pad"
                  returnKeyType="next"
                  blurOnSubmit={false}
                  maxLength={1}
                  ref={secondInput}
                  onChangeText={text => {
                    setOtp({ ...otp, 2: text })
                    text ? thirdInput.current.focus() : firstInput.current.focus()
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={[Mainstyles.otpTextBox, { fontSize: SIZES.h5 }]}
                  placeholderTextColor="#000000"
                  keyboardType="number-pad"
                  returnKeyType="next"
                  underlineColorAndroid="#EFEFEF"
                  blurOnSubmit={false}
                  maxLength={1}
                  ref={thirdInput}
                  onChangeText={text => {
                    setOtp({ ...otp, 3: text })
                    text ? fourthInput.current.focus() : secondInput.current.focus()
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={[Mainstyles.otpTextBox, { fontSize: SIZES.h5 }]}
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  returnKeyType="next"
                  blurOnSubmit={false}
                  maxLength={1}
                  ref={fourthInput}
                  onChangeText={text => {
                    setOtp({ ...otp, 4: text })
                    !text && thirdInput.current.focus()
                  }}
                />
              </View>
            </View>
            <View style={{ alignSelf: 'center', marginTop: 10 }}>
              {counter == 0 ? displayResendBtn() : null}
            </View>

            {/* <Text
              style={[
                Mainstyles.descText,
                {fontWeight: SIZES.w5, color: COLORS.background2, paddingTop: 10},
              ]}>
              {t('common:IfInvalid')}
            </Text> */}

            {/* <Text style={[Mainstyles.headingDescTwo, {paddingTop: 220}]}>
            {t('common:TryAgain')}
          </Text>*/}
          </KeyboardAvoidingView>

          <View style={{ width: '100%', backgroundColor: '#dddddd' }}>
            <View
              style={[Mainstyles.addressButtonView, { justifyContent: 'center' }]}>

              <View
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 200
                }}>
                <View
                  style={{
                    width: 80,
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginBottom: 30,
                    marginTop: 10,
                    flexDirection: 'row',
                  }}>
                  {ComIcons.clock}
                  <Text
                    style={[
                      Mainstyles.descText,
                      { lineHeight: SIZES.l3, fontWeight: SIZES.w5 },
                    ]}>
                    00:{counter}
                  </Text>
                </View>
                <MyButton
                  title={t('common:Submit')}
                  onSelect={() => {
                    // console.log(otp)
                    navigation.navigate('Register');
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>

  );
};

export default EmailVerificationCodeScreen;
