import * as React from 'react';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainStyles from 'styleSheet/MainStyle';
import MyButton from 'components/MyButton';
import {useTranslation} from 'react-i18next';
// import {
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
//   LoginManager,
// } from 'react-native-fbsdk';
// import {GoogleSignin, statusCodes} from 'react-native-google-signin';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import NavigationHeaderCross from 'components/NavigationHeaderCross';
import {useDispatch} from 'react-redux';
import {setUserEmail} from '../../actions';
import {COLORS, FONTS, SIZES, ComIcons} from 'assets/index';
import CountryPicker from 'react-native-country-picker-modal';
const SignInToJoin = props => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState('');
  const [withCountryCode, setWithCountryCode] = useState(true);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(false);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(true);
  const onSelect = country => {
    setWithCallingCode(country.callingCode[0]);
    setCountryCode(country.cca2);
    setCountry(country);
  };
  const [signJoinParams, setSignJoinParams] = useState({});
  const checkTextInput = () => {
    if (!phoneNumber.trim()) {
      alert('Enter phone number');
    } else if (!(phoneNumber.match('[0-9]{10}'))) {
      alert('Please enter a valid phone number');
    } else {
      // dispatch(signJoinRequest({phoneNumber}));
      // setSignJoinParams({
      //   phoneNumber:phoneNumber,
      // });
      props.navigation.navigate('VerificationCode', { phoneNumber, withCallingCode });
      return;
    }
  };



  const [userInfo, setUserInfo] = useState({});
  dispatch(setUserEmail('a@g.com'));
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('Username', value);
    } catch (e) {
      // saving error
    }
  };
  // alert(country.withCallingCode);
  // Facebook Login
  // const logoutWithFacebook = () => {
  //   LoginManager.logOut();
  //   setUserInfo({userInfo: {}});
  // };

  const getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id, name, first_name, last_name',
      },
    };

    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
        } else {
          setUserInfo({ userInfo: result });
          dispatch(setUserEmail(result.id));
          storeData(result.name);
          props.navigation.navigate('BottomTabs');
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  const loginWithFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      login => {
        if (login.isCancelled) {
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            getInfoFromToken(accessToken);
          });
        }
      },
      error => {
        console.log('login fail with error: ' + console.error());
      },
    );
  };

  const isLogin = userInfo === {};
  const buttonText = isLogin ? 'Logout with facebook' : t('common:facebook');
  const onPressButton = isLogin ? logoutWithFacebook : loginWithFacebook;

  // Google Login Start /////////

  // GoogleSignin.configure({
  //   webClientId:
  //     '888755464341-dcnh2vvh7ou1jc7ma8vikhrc49c181ui.apps.googleusercontent.com',
  //   offlineAccess: true,
  // });

  const [loggedIn, setloggedIn] = useState(false);
  const [gmailInfo, setGmailInfo] = useState([]);
  // const gmailSignIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const {accessToken, idToken} = await GoogleSignin.signIn();
  //     getCurrentUser();
  //     setloggedIn(true);
  //     props.navigation.navigate('BottomTabs');
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       alert('Cancel');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       alert('Signin in progress');
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       alert('PLAY_SERVICES_NOT_AVAILABLE');
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };
  // const googleSignOut = async () => {
  //   try {
  //     await GoogleSignin.signOut();
  //     this.setState({user: null}); // Remember to remove the user from your app's state as well
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const isSignedIn = async () => {
  //   const isSignedIn = await GoogleSignin.isSignedIn();
  //   setloggedIn({isLoginScreenPresented: !isSignedIn});
  // };

  // const getCurrentUser = async () => {
  //   const currentUser = await GoogleSignin.getCurrentUser();
  //   setGmailInfo({currentUser});
  //   alert(currentUser.user.name);
  // };

  // Google Login End /////////
  return (
    <SafeAreaView style={MainStyles.safeAreaContainerLight}>
      <NavigationHeaderCross
        navigation={props.navigation}
        displayLineSkip={true}
        btnName={t('common:skip')}
        btnBorderDisplay={1}
        onSelect={() => props.navigation.navigate('BottomTabs')}
      />
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={[MainStyles.mainBody, {marginBottom: 40}]}>
          <View
            style={{
              height: 52,
              marginTop: 30,
              marginLeft: 15,
            }}>
            <Text
              style={{
                fontFamily: FONTS.normal,
                fontSize: SIZES.h5,
                fontWeight: SIZES.w5,
              }}>
              {t('common:Choose')}
            </Text>
            <Text
              style={{
                fontFamily: FONTS.normal,
                fontSize: SIZES.h5,
                fontWeight: SIZES.w5,
              }}>
              {t('common:logIn')}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignself: 'center',
              height: SIZES.btnHeight,
              borderColor: COLORS.grey,
              borderWidth: 1,
              borderRadius: SIZES.r1,
              marginLeft: SIZES.mlr1,
              marginRight: SIZES.mlr1,
              marginTop: 36,
              alignItems: 'center',
            }}>
            <View style={{marginLeft: 12, flexDirection: 'row'}}>
              <CountryPicker
                {...{
                  countryCode,
                  withFilter,
                  withFlag,
                  withCountryNameButton,
                  withAlphaFilter,
                  withCallingCode: true,
                  withEmoji,
                  onSelect,
                  withCallingCodeButton: true,
                }}
              />
              <View
                style={{
                  marginLeft: 8,
                  marginTop: 17,
                  resizeMode: 'contain',
                }}>
                {ComIcons.arrowDownBlack}
              </View>
            </View>

            <TextInput
              style={[
                MainStyles.inputPhone,
                {marginRight: 10, flex: 1, fontSize: 15, marginTop: 5},
              ]}
              keyboardType="number-pad"
              maxLength={16}
              selectionColor={'red'}
              onChangeText={text => setPhoneNumber(text)}
            />
          </View>
          <View style={{marginTop: 10}}>
            <MyButton onSelect={checkTextInput} title={t('common:SendOtp')} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginLeft: SIZES.mlr1,
              marginRight: SIZES.mlr1,
            }}>
            <View
              style={{
                backgroundColor: COLORS.lineColor,
                width: '42%',
                marginRight: 4,
                height: 1,
              }}></View>
            <Text
              style={{
                width: '8%',
                height: 17,
                marginLeft: 15,
                marginRight: 4,
                marginTop: -5,
                color: COLORS.black,
                fontSize: SIZES.h2,
                fontFamily: FONTS.light,
              }}>
              {t('common:Or')}
            </Text>
            <View
              style={{
                backgroundColor: COLORS.lineColor,
                marginLeft: 12,
                width: '42%',
                height: 1,
                // marginTop: 10,
              }}></View>
          </View>
          <View>
            <View>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('SignIn')}>
                <View
                  style={[
                    MainStyles.shadowForView,
                    {
                      flexDirection: 'row',
                      // justifyContent: 'center',
                      alignItems: 'center',
                      height: SIZES.btnHeight,
                      borderColor: COLORS.lineColor,
                      borderWidth: 1,
                      borderRadius: SIZES.r1,
                      marginLeft: 20,
                      marginRight: 20,
                      marginTop: 18,
                    },
                  ]}>
                  <View
                    style={{
                      height: 16,
                      alignItems: 'flex-start',
                      resizeMode: 'contain',
                      marginLeft: 20,
                      width: '8%',
                    }}>
                    {ComIcons.email}
                  </View>
                  <Text
                    style={{
                      fontSize: SIZES.h2,
                      fontFamily: FONTS.light,
                      width: '92%',
                      color: COLORS.black,
                      marginLeft: -30,
                      textAlign: 'center',
                    }}>
                    {t('common:ContinueWithEmail')}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 20,
              marginTop: 20,
              marginRight: 20,
            }}>
            <View
              style={[
                MainStyles.shadowForView,
                {
                  width: '45%',
                  height: SIZES.btnHeight,
                },
              ]}>
              <TouchableOpacity
                onPress={onPressButton}
                style={{
                  height: SIZES.btnHeight,
                  borderWidth: 1,
                  borderRadius: SIZES.r1,
                  alignItems: 'center',
                  borderColor: COLORS.lineColor,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={{marginLeft: 12, width: 25, height: 25}}>
                    {ComIcons.facebookColor}
                  </View>

                  <Text
                    style={{
                      margin: 5,
                      fontSize: SIZES.h2,
                      fontFamily: FONTS.light,
                      color: COLORS.black,
                    }}>
                    {buttonText}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={[
                MainStyles.shadowForView,
                {
                  width: '45%',
                  height: SIZES.btnHeight,
                },
              ]}>
              <TouchableOpacity
                style={{
                  borderColor: COLORS.lineColor,
                  borderWidth: 1,
                  height: SIZES.btnHeight,
                  borderRadius: SIZES.r1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={gmailSignIn}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignself: 'center',
                    justifyContent: 'center',
                  }}>
                  <View style={{width: 24, height: 24}}>{ComIcons.google}</View>
                  <View style={{marginLeft: 17, marginTop: 5}}>
                    <Text
                      style={{
                        fontSize: SIZES.h2,
                        fontFamily: FONTS.light,
                        color: COLORS.black,
                      }}>
                      {t('common:google')}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInToJoin;
