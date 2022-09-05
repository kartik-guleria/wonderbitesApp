import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import InputField from 'components/InputField';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import {ComIcons} from 'assets/index';
import {signUpRequest} from './actions';
import {useDispatch} from 'react-redux';
import SuccessModel from 'components/SuccessModel';
import {useSelector} from 'react-redux';
import {replace} from 'navigation/RootNaviagtion';
import Loader from 'components/Loader';
import API from 'constants/api';

const SignUpScreen = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [apiErrorMsg, setApiErrorMsg] = useState({});
  const signupData = useSelector(state => state.signUpReducer.signUpData);
  const loading = useSelector(state => state.signUpReducer.loading);
  const signupError = useSelector(state => state.signUpReducer.error);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const showToast = errorMsg => {
    Toast.show({
      type: 'error',
      text1: 'Error:   ' + errorMsg,
      text1Style: {
        fontSize: 20,
        fontWeight: '400',
      },
    });
  };
  useEffect(() => {
    if (signupError) {
      setApiErrorMsg(signupError);
      toggleModal();
    } else if (signupData) {
      toggleModal();
      replace('SignIn');
    }
  }, [signupData, signupError]);

  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const [paramData, setParamData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    password: '',
    password_confirmation: '',
    isChecked: false,
  });

  const onCheckboxPress = () => {
    if (paramData.isChecked === true) {
      setParamData({...paramData, isChecked: false});
    } else {
      setParamData({...paramData, isChecked: true});
    }
  };
  const selectedBox = props => {
    return (
      <View>
        {paramData.isChecked ? ComIcons.redTickBox : ComIcons.redEmptyBox}
      </View>
    );
  };

  const checkTextInput = () => {
    // Object.keys(paramData).map(
    //   (keyName, i) =>
    //     paramData[keyName] == '' ? alert('Enter your ' + keyName) : null,

    //   // alert(keyName + ':' + i + 'Name:' + paramData[keyName]),
    // );

    // Check for the Name TextInput
    let error = '';
    if (!paramData.first_name.trim()) {
      error = 'Please enter your name';
    } else if (!paramData.last_name.trim()) {
      error = 'Please enter your last name';
    } else if (!paramData.email.trim()) {
      error = 'Please enter your email';
    } else if (!emailValidate(paramData.email)) {
      error = 'Please enter a valid email';
    } else if (!paramData.mobile.trim()) {
      error = 'Please enter your phone number';
    } else if (!mobileValidate(paramData.mobile)) {
      error = 'Please enter a valid phone number';
    } else if (!paramData.password.trim()) {
      error = 'Please enter password';
    } else if (!passwordValidate(paramData.password)) {
      error = 'Please enter a valid password';
    } else if (!paramData.password_confirmation.trim()) {
      error = 'Please enter confirm password';
    } else if (!confirmPassValidate(paramData.password_confirmation)) {
      error = 'Confirm password does not match';
    } else if (!paramData.isChecked) {
      error = 'Please agree to terms and condtions';
    } else {
      setErrorMsg('Success');
      dispatch(
        signUpRequest({
          first_name: paramData.first_name,
          last_name: paramData.last_name,
          email: paramData.email,
          mobile: paramData.mobile,
          password: paramData.password,
          password_confirmation: paramData.password_confirmation,
        }),
      );
      return;
    }

    showToast(error);
  };
  const emailValidate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text) === true;
  };
  const mobileValidate = text => {
    const reg = /^[0-9\b]+$/;
    return reg.test(text) === true;
  };
  const passwordValidate = text => {
    const reg = /^(?=.*?[a-z A-Z]).{8,}$/;
    return reg.test(text) === true;
  };
  const confirmPassValidate = text => {
    return paramData.password === paramData.password_confirmation;
  };

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
        <StatusBar barStyle="dark-content" />
        <NavigationHeader
          title={t('common:SignUp')}
          displayLine={true}
          navigation={props.navigation}
        />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 10}}>
            <InputField
              placeholder={t('common:FirstName')}
              capitalize="words"
              keyboardType="default"
              returnKeyType="next"
            secureText="false"
              checkVal={value =>
                setParamData({...paramData, first_name: value})
              }
            />
            <InputField
              placeholder={t('common:LastName')}
              capitalize="words"
              keyboardType="default"
              returnKeyType="next"
              secureText="false"
              // errorMsg={!paramData.last_name.trim()}
              checkVal={value => setParamData({...paramData, last_name: value})}
            />
            <InputField
              placeholder={t('common:Email')}
              capitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              secureText="false"
              checkVal={value => setParamData({...paramData, email: value})}
            />
            <InputField
              placeholder={t('common:ContactNumber')}
              capitalize="none"
              keyboardType="number-pad"
              returnKeyType="next"
              secureText="false"
              checkVal={value => setParamData({...paramData, mobile: value})}
            />
            <View style={MainStyle.SectionStyle}>
              <TextInput
                style={MainStyle.inputStyle}
                placeholder={t('common:Password')}
                placeholderTextColor="#2B2C2D"
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                underlineColorAndroid="#EFEFEF"
                secureTextEntry={true}
                onChangeText={value =>
                  setParamData({...paramData, password: value})
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={MainStyle.SectionStyle}>
              <TextInput
                style={MainStyle.inputStyle}
                placeholder={t('common:ConfirmPassword')}
                placeholderTextColor="#2B2C2D"
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                underlineColorAndroid="#EFEFEF"
                secureTextEntry={true}
                onChangeText={value =>
                  setParamData({...paramData, password_confirmation: value})
                }
                blurOnSubmit={false}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginBottom: 30,
              }}>
              <TouchableOpacity
                style={{
                  marginLeft: 12,
                  marginRight: 6,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  resizeMode: 'contain',
                }}
                onPress={onCheckboxPress}>
                {selectedBox()}
              </TouchableOpacity>
              <View style={{alignContent: 'center'}}>
                <Text style={MainStyle.registerTextStyle}>
                  {t('common:IAgree')}
                  <TouchableOpacity
                    style={{
                      marginBottom: -8,
                    }}
                    onPress={() =>
                      props.navigation.navigate({
                        name: 'AboutUs',
                        params: {
                          paramKey: t('common:TermsAndConditions'),
                          pageUrl: API.TERMS_AND_CONDITIONS,
                        },
                      })
                    }>
                    <Text style={MainStyle.registerTextStyleRed}>
                      {t('common:Terms')}
                    </Text>
                  </TouchableOpacity>
                  {t('common:And')}
                  <TouchableOpacity
                    style={{
                      marginBottom: -8,
                    }}
                    onPress={() => {
                      // Pass and merge params back to home screen
                      props.navigation.navigate({
                        name: 'AboutUs',
                        params: {
                          paramKey: t('common:TermsAndConditions'),
                          pageUrl: API.TERMS_AND_CONDITIONS,
                        },
                      });
                    }}>
                    <Text
                      style={[MainStyle.registerTextStyleRed, {marginLeft: 4}]}>
                      {t('common:Conditions')}
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
            {loading ? (
              <Loader
                style={{
                  position: 'relative',
                  height: 100,
                  width: 100,
                  alignSelf: 'center',
                }}
              />
            ) : (
              <MyButton
                title={t('common:Register')}
                onSelect={checkTextInput}
                // onSelect={() => {
                //   props.navigation.navigate('SignIn');
                // }}
              />
            )}
            <TouchableOpacity
              style={{marginTop: -15,marginBottom:20}}
              activeOpacity={0.5}
              onSelect={() => {
                props.navigation.navigate('SignIn');
              }}>
              <Text
                style={MainStyle.registerTextStyle}
                onPress={() => props.navigation.navigate('SignIn')}>
                {t('common:AlreadyHave')}
                <Text style={MainStyle.registerTextStyleRed}>
                  {t('common:Login')}
                </Text>
              </Text>
            </TouchableOpacity>
            {/* </KeyboardAvoidingView> */}
          </View>
          {/* </View> */}
        <Modal isVisible={isModalVisible}>
          <SuccessModel
            successTitle={apiErrorMsg}
            onSelect={toggleModal}
            type="Error"
          />
        </Modal>
  </ScrollView>
    </SafeAreaView>
  );
};
export default SignUpScreen;
