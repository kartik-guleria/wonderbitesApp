import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Toast from 'react-native-toast-message';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import InputField from 'components/InputField';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {signInRequest, signInRequestFailure} from './actions';
import {useSelector} from 'react-redux';
import {FONTS, SIZES} from 'assets/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SuccessModel from 'components/SuccessModel';
import Modal from 'react-native-modal';
import {getUserRequest} from '../ProfileScreen/actions';
import Loader from 'components/Loader';

const SignInScreen = props => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const [paramData, setParamData] = useState({email: '', password: ''});

  const [errorMsg, setErrorMsg] = useState('');
  const loginData = useSelector(state => state.loginReducer.loginData);
  const loginError = useSelector(state => state.loginReducer.error);
  const userData = useSelector(state => state.getUserReducer.userData);
  const loading = useSelector(state => state.loginReducer.loading);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('accessToken', value);
    } catch (e) {}
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

  useEffect(() => {
    if (loginError) {
      setErrorMsg(loginError);
      toggleModal();
      dispatch(signInRequestFailure(null));
    } else if (loginData) {
      storeData(loginData.token);
      dispatch(getUserRequest());
    }
  }, [loginError, loginData]);

  const checkTextInput = () => {
    let errorMsg = '';
    if (!paramData.email.trim()) {
      errorMsg = 'Please enter your email';
    } else if (!validate(paramData.email)) {
      errorMsg = 'Please enter a valid email';
    } else if (!paramData.password.trim()) {
      errorMsg = 'Please enter Password';
    } else {
      dispatch(
        signInRequest({email: paramData.email, password: paramData.password}),
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

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <StatusBar barStyle="dark-content" />
      <NavigationHeader
        title={t('common:LogInSign')}
        displayLine={true}
        navigation={props.navigation}
      />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 10}}>
          <InputField
            placeholder={t('commmon:Email')}
            capitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            checkVal={value => setParamData({...paramData, email: value})}
          />
          <View style={MainStyle.SectionStyle}>
            <TextInput
              style={MainStyle.inputStyle}
              placeholder={t('common:Password')}
              placeholderTextColor="#2B2C2D"
              autoCapitalize="none"
              keyboardType="default"
              returnKeyType="done"
              underlineColorAndroid="#EFEFEF"
              secureTextEntry={true}
              blurOnSubmit={false}
              onChangeText={value =>
                setParamData({...paramData, password: value})
              }
            />
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('ResetPassword')}>
            <Text
              style={[
                MainStyle.registerTextStyleRed,
                {
                  alignSelf: 'flex-end',
                  margin: 2,
                  marginRight: SIZES.mlr1,
                  marginBottom: 10,
                  fontSize: SIZES.h,
                  fontFamily: FONTS.light,
                },
              ]}>
              {t('common:Forgot')}
            </Text>
          </TouchableOpacity>
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
            <MyButton title={t('common:LogInSign')} onSelect={checkTextInput} />
          )}
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={MainStyle.registerTextStyle}>
              {t('common:DontHave')}
              <Text style={MainStyle.registerTextStyleRed}>
                {t('common:SignUp')}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <Modal isVisible={isModalVisible}>
          <SuccessModel
            successTitle={errorMsg}
            onSelect={toggleModal}
            type="Error"
          />
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
