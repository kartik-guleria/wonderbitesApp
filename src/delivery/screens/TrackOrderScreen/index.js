import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import MapView from 'components/MapView';
import { Marker } from 'react-native-maps'
// import { Marker, MapView, MapViewDirections, PROVIDER_GOOGLE } from 'react-native-maps';
import { useTranslation } from 'react-i18next';
import NavigationHeader from 'components/NavigationHeader';
import styles from './style';
import { COLORS, SIZES, DelIcons } from 'assets/index';
import { MARKER_DELTA } from 'utils/constants';

const TrackOrderScreen = props => {
  const { t, i18n } = useTranslation();
  const [marker, changeMarker] = useState({
    latitude: 30.7333,
    longitude: 76.7794,
    ...MARKER_DELTA
  });
  const [hideView, setHideView] = useState(true);
  const toggleModal = () => {
    setHideView(!hideView);
  };
  const [coordinates] = useState([
    {
      latitude: 30.7333,
      longitude: 76.7794,
    },
    {
      latitude: 30.7326,
      longitude: 76.6454,
    },
  ]);
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <StatusBar barStyle="dark-content" />
        <NavigationHeader title={t('delivery:editDetails')} navigation={props.navigation} />
        
    <View style={styles.screen}>
        <StatusBar barStyle="dark-content" />
        <MapView region={marker} style={styles.image}>
          <Marker coordinate={marker} /> 

          {/* <MapViewDirections
            origin={coordinates[0]}
            destination={coordinates[1]}
            apikey={GOOGLE_API_KEY} // insert your API Key here
            strokeWidth={4}
            strokeColor="#111111"
          /> */}
          {/* <Marker coordinate={coordinates[0]} />
          <Marker coordinate={coordinates[1]} /> */}
        </MapView>
      <View
          style={MainStyle.shadowForView, {
            bottom: 0,
          backgroundColor: COLORS.white,
          position: 'absolute',
          width: '100%',
          borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        }}>
        <View
          style={{
            margin: 10,
            padding: 10,
              borderRadius: SIZES.r,
          }}>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Text style={[styles.foodName, { fontSize: SIZES.h3 }]}>{t('delivery:deliveryTime')}</Text>
              <View style={{ width: 10, height: 10, marginRight: 8 }}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{ width: 10, height: 10, marginRight: 8 }}>
                  {DelIcons.crossRedGrey}
                </TouchableOpacity>
              </View>

          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 8,
            }}>
            <View style={{
              marginRight: 20,
              resizeMode: 'contain',
            }}>
              {DelIcons.time}
            </View>
            <Text style={{ fontSize: SIZES.h4, fontWeight: SIZES.w7 }}>22 Min</Text>
            </View>
            {hideView == true ?
              <View>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      marginRight: 20,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}>
                    {DelIcons.redTickCircle}
                  </View>
                  <View>
                    <Text style={styles.foodName}>{t('delivery:orderConfirmed')}</Text>
                    <Text style={styles.classification}>
                      {t('delivery:orderReceived')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    marginTop: 26,
                    marginBottom: 16,
                  }}>
                  <View
                    style={{
                      marginRight: 20,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}>
                    {DelIcons.redTickCircle}
                  </View>
                  <View>
                    <Text style={styles.foodName}>{t('delivery:orderPrepared')}</Text>
                    <Text style={styles.classification}>
                      {t('delivery:orderIsPrepared')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'row',
                    marginTop: 16,
                    marginBottom: 8,
                  }}>
                  <View
                    style={{
                      marginRight: 20,
                      resizeMode: 'contain',
                      alignSelf: 'center',
                    }}>
                    {DelIcons.redWhiteDot}
                  </View>
                  <View>
                    <Text style={styles.foodName}>{t('delivery:deliveryInProgress')}</Text>
                    <Text style={styles.classification}>
                      {t('delivery:foodOnTheWay')}
                    </Text>
                  </View>
                </View>
              </View>
              : null}
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};
export default TrackOrderScreen;
