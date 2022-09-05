import React ,{useState}from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import styles from './style';
import {COLORS, SIZES, DelIcons} from '/assets/index';
import { ComIcons } from 'assets/';

const AddNewCardScreen = props => {
  const [checked, setChecked] = useState(false);
  const onCheck = () => {
    if (checked === false){
      setChecked(true)
    }
    else if (checked === true){
    setChecked(false);
  }
  };
  const {t, i18n} = useTranslation();
  return (
      <SafeAreaView style= {MainStyle.safeAreaContainerLight}>
        <NavigationHeader
          title={t('delivery:addNewCard')}
          displayLine={true}
          navigation={props.navigation}
        />
        <ScrollView bounces={false} style={{width: '100%'}}>
          <View style={{width: '92%', alignSelf: 'center'}}>
            <View
              style={[
                MainStyle.BoxShadow,
                {
                  marginTop: 5,
                  padding: 10,
                  borderRadius: SIZES.r1,
                  backgroundColor: '#F2F3F0',
                },
              ]}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={MainStyle.buttonText2}>John Doe </Text>
                <Image
                  style={{}}
                  source={require('../../../images/mastercard.png')}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{marginTop: 20}}>
                  <Text style={MainStyle.buttonText2}>
                    {t('delivery:cardNumber')}
                  </Text>
                  <Text style={styles.classification}>**** **** **** ****</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{marginTop: 20}}>
                  <Text style={MainStyle.buttonText2}>
                    {t('delivery:monthYear')}
                  </Text>
                  <Text style={styles.classification}>xx/xx</Text>
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={MainStyle.buttonText2}>{t('delivery:cvv')}</Text>
                  <Text style={styles.classification}>xxx</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: 15,
                paddsing: 10,
                borderRadius: SIZES.r,
              }}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '100%'}}>
                  <Text
                    style={[
                      MainStyle.inputPhone,
                      {
                        fontSize: SIZES.h,
                        marginLeft: 0,
                        marginTop: 20,
                      },
                    ]}>
                    {t('delivery:cardHolderName')}
                  </Text>
                  <TextInput
                    style={[
                      styles.deliveryTime,
                      {
                        marginTop: 12,
                        marginBottom: 8,
                        borderBottomColor: '#dddddd',
                        borderBottomWidth: 1,
                        fontSize: SIZES.h,
                        color: COLORS.black,
                        paddingBottom: 5,
                      },
                    ]}
                    placeholder={"John Doe"}
                    placeholderTextColor={COLORS.darkGrey}/>
                    
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    borderBottomColor: COLORS.red,
                    borderBottomWidth: 1,
                    width: '100%',
                    paddingRight: 10,
                    paddingLeft: 0,
                    paddingBottom: 5,
                  }}>
                  <Text
                    style={[
                      MainStyle.registerTextStyle,
                      {
                        alignSelf: 'flex-start',
                        padding: 0,
                        marginTop: 20,
                        color: COLORS.red,
                      },
                    ]}>
                    {t('delivery:cardNumber')}
                  </Text>
                  <View
                    style={{
                      flex: 2,
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <View
                      style={[
                        styles.image,
                        {width: 16, height: 12, marginRight: 10},
                      ]}>
                      {DelIcons.paymentMethodRed}
                    </View>

                    <TextInput
                      style={[
                        styles.classification,
                        {marginTop: 0, lineHeight: SIZES.l4},
                      ]}
                      placeholder={"xxx xxx xxx xxx"}
                    placeholderTextColor={COLORS.darkGrey}/>
                      
                  
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  marginBottom: 10,
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '50%'}}>
                  <Text
                    style={[
                      MainStyle.registerTextStyle,
                      {
                        paddingLeft: 0,
                        textAlign: 'left',
                        alignSelf: 'flex-start',
                      },
                    ]}>
                    {t('delivery:expDate')}
                  </Text>
                  <TextInput
                    style={[
                      MainStyle.deliveryTime,
                      {
                        textAlign: 'left',
                        alignSelf: 'flex-start',
                        marginTop: 8,
                      },
                    ]}
                    placeholder={"DD.MM.YYYY"}
                    placeholderTextColor={COLORS.darkGrey}/>
                </View>
                <View style={{width: '50%'}}>
                  <Text
                    style={[
                      MainStyle.registerTextStyle,
                      {
                        paddingLeft: 0,
                        textAlign: 'left',
                        alignSelf: 'flex-start',
                      },
                    ]}>
                    {t('delivery:cvvCode')}
                  </Text>
                  <TextInput
                    style={[
                      MainStyle.deliveryTime,
                      {
                        textAlign: 'left',
                        alignSelf: 'flex-start',
                        marginTop: 8,
                        
                      },
                     
                    ]}
                    placeholder={"xxx"}
                    placeholderTextColor={COLORS.darkGrey}/>
                </View>
              </View>
              <View>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    marginTop: 20,

                    justifyConent: 'center',
                  }}>
                    <TouchableOpacity onPress={()=> onCheck()}>
                  { checked === true ? ComIcons.redTickBox : ComIcons.redEmptyBox  }
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.textInput,
                      {height: 30, marginLeft:15,justifyContent: 'center'},
                    ]}>
                    {t('delivery:setAs')}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <MyButton
            title={t('delivery:add')}
            onSelect={() => {
              props.navigation.navigate('CheckoutComplete');
            }}
          />
        </ScrollView>
        <View style={{width: '95%', marginBottom: 30}}></View>
      </SafeAreaView>
    
  );
};

export default AddNewCardScreen;
