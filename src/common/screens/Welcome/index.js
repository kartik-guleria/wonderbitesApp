import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import MyGrayButton from 'components/MyGrayButton';
import MainStyle from 'styleSheet/MainStyle';
import {useTranslation} from 'react-i18next';
import styles from './style';
import {COLORS, SIZES, ComIcons} from 'assets/index';

const Welcome = props => {
  // Geolocation.getCurrentPosition(data => console.log(data));

  const {t, i18n} = useTranslation();
  const [orientation, setOrientation] = useState('potrait');
  useEffect(() => {
    getDim();
  }, []);
  
  
  const getDim = () => {
    dim = Dimensions.get('screen');
    if (dim.height >= dim.width) {
      setOrientation('potrait');
    } else setOrientation('landscape');
  };

  
  
  Dimensions.addEventListener('change', () => {
    if (dim.height >= dim.width) setOrientation('potrait');
    else setOrientation('landscape');
  });

  return (
    <SafeAreaView
      style={[MainStyle.safeAreaContainer, {backgroundColor: COLORS.red}]}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          backgroundColor: COLORS.red,
          height: '100%',
        }}>
        <ImageBackground
          source={orientation === 'potrait' ? require('images/Main.jpg') : null}
          resizeMode="cover"
          style={styles.image}>
          <View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SideMenu')}>
              <View style={{width: 23, height: 14, marginLeft: SIZES.mlr1}}>
                {ComIcons.sideMenu}
              </View>
            </TouchableOpacity>
            <View
              style={{
                alignSelf: 'center',
                resizeMode: 'contain',
                marginTop: 5,
              }}>
              {ComIcons.wonderbitesWhite}
            </View>
          </View>
          <View style={{width: '100%', height: '65%'}} />
          <TouchableOpacity
            style={[
              styles.buttonStyleRed,
              {
                borderColor: COLORS.white,
                borderWidth: 1,
                marginBottom: 10,
                marginTop: 5,
              },
            ]}
            onPress={() => props.navigation.navigate('SignJoin')}>
            <Text style={styles.text_color}> {t('common:signInJoin')}</Text>
          </TouchableOpacity>
          <MyGrayButton
            title={t('common:orderNow')}
            onSelect={() => {
              props.navigation.navigate('AskAddress');
            }}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
