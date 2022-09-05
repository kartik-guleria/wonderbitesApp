import React, {useRef, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Mainstyles from 'styleSheet/MainStyle';
import MyButton from 'components/MyButton';
import NavigationHeader from 'components/NavigationHeader';
import {t} from 'i18next';
import {COLORS, FONTS, SIZES, ComIcons} from 'assets/index';

const VerificationCodeScreen = ({
  route: {
    params: { phoneNumber, withCallingCode },
  }, navigation }) => {
  const firstInput = useRef()
  const secondInput = useRef()
  const thirdInput = useRef()
  const fourthInput = useRef()
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' })
  const [counter, setCounter] = React.useState(60);
  const [errorMsg, setErrorMsg] = useState('');
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const displayResendBtn = props => {
    return (
      <View style={{}}>
        <Text
          style={{
            fontSize: SIZES.h2,
            fontFamily: FONTS.normal,
            lineHeight: SIZES.l3,
          }}>
          {t('common:didNotReceive')}
        </Text>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: SIZES.h3,
              fontFamily: FONTS.normal,
              lineHeight: SIZES.l4,
              color: COLORS.red,
              fontWeight: SIZES.w5,
              marginTop: 8,
            }}>
            {t('common:Resend')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={Mainstyles.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:VerificationCode')}
        displayLine={true}
        navigation={navigation}
      />

      <ScrollView contentContainerStyle={{
        flex: 1,
        justifyContent: 'space-between',
      }} bounces={false}>

        <View>
            <View>
              <Text
                style={[
                  Mainstyles.headingDescTwo,
                  {
                    marginLeft: 60,
                    marginRight: 60,
                    marginTop: 20,
                    marinBottom: 30,
                  },
                ]}>
                {t('common:WeSentCode')}
              </Text>

            <Text style={[Mainstyles.descText, { marginTop: 10 }]}>
            {t('common:SentTo')} ( +{withCallingCode} {phoneNumber} )
              </Text>
            </View>
            
            <View
              style={[
                Mainstyles.ChooseType,
                {marginTop: 30, marginBottom: 20},
              ]}>
              <View style={{height: 70}}>
                <TextInput
                  style={[Mainstyles.otpTextBox, {fontSize: SIZES.h5}]}
                  placeholderTextColor="#000000"
                  keyboardType="number-pad"
                  returnKeyType="next"
                  blurOnSubmit={false}
                  maxLength={1}
                  ref={firstInput}
                  onChangeText={text => {
                    setOtp({...otp, 1: text});
                    text && secondInput.current.focus();
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={[Mainstyles.otpTextBox, {fontSize: SIZES.h5}]}
                  placeholderTextColor="#000000"
                  keyboardType="number-pad"
                  returnKeyType="next"
                  blurOnSubmit={false}
                  maxLength={1}
                  ref={secondInput}
                  onChangeText={text => {
                    setOtp({...otp, 2: text});
                    text
                      ? thirdInput.current.focus()
                      : firstInput.current.focus();
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={[Mainstyles.otpTextBox, {fontSize: SIZES.h5}]}
                  placeholderTextColor="#000000"
                  keyboardType="number-pad"
                  returnKeyType="next"
                  underlineColorAndroid="#EFEFEF"
                  blurOnSubmit={false}
                  maxLength={1}
                  ref={thirdInput}
                  onChangeText={text => {
                    setOtp({...otp, 3: text});
                    text
                      ? fourthInput.current.focus()
                      : secondInput.current.focus();
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={[Mainstyles.otpTextBox, {fontSize: SIZES.h5}]}
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  returnKeyType="next"
                  blurOnSubmit={false}
                  maxLength={1}
                  ref={fourthInput}
                  onChangeText={text => {
                    setOtp({...otp, 4: text});
                    !text && thirdInput.current.focus();
                  }}
                />
              </View>
            </View>
            <View style={{alignSelf: 'center', marginTop: 10}}>
              {counter == 0 ? displayResendBtn() : null}
            </View>
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

          {/* </KeyboardAvoidingView> */}

        <View>
          <View>

                <View
                  style={{
                    width: 80,
                    flexDirection: 'row',
                    alignSelf: 'center',
              marginBottom: 40,
                    marginTop: 10,

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
              if (otp["1"] == '' || otp["2"] == '' || otp["3"] == '' || otp["4"] == '') {
                alert("Enter your 4 digit OTP")
              } else {
                navigation.navigate('Register');
              }
            }

            }
          />
        </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationCodeScreen;
