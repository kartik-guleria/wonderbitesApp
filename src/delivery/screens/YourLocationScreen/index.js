import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';

import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from './style';
import { SIZES, DelIcons } from 'assets/index';



const YourLocationScreen = props => {
  Geolocation.getCurrentPosition(data => console.warn(data));
  console.warn('Geolocation');
  const { t, i18n } = useTranslation();
  return (<>
    <StatusBar barStyle="dark-content" />
    <View style={[MainStyle.MainContainerLight, { paddingTop: 45, backgroundColor: 'FFFFFF' }]}>

      <NavigationHeader title={t('delivery:yourLocation')} displayLine={false} navigation={props.navigation} />
      <MapView
        width="100%"
        height="100%"
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapView.Marker
          minDelta={0.5}
          maxDelta={2}
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
          <Image
            style={{ height: 100, width: 100 }}
            source={require('../../../images/animationlocation.gif')} />
        </MapView.Marker>
      </MapView>
      <View
        style={[
          MainStyle.addressButtonView,
          {
            marginTop: 20,
            bottom: 0,
            position: 'absolute',
            backgroundColor: '#fff',
            borderRadius: SIZES.r1,
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 0 },
            shadowRadius: 2,
            elevation: 1,
          },
        ]}>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 12,
            marginBottom: 15,
          }}>
          {DelIcons.flatIndicator}
        </View>
        <Text style={MainStyle.bottomText}>
          Tirane, Blloku, Albania
        </Text>

        <View
          style={{
            marginBottom: 10,
            marginTop: 20,
          }}>
          <MyButton
            title={t('delivery:continue')}
            onSelect={() => {
              props.navigation.navigate('AddAddress');
            }} />
        </View>
      </View>
    </View>
  </>
  );
};
export default YourLocationScreen;

