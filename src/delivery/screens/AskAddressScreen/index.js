import React, {useState, useEffect, createRef} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Marker} from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';
import MapView from 'components/MapView';
import {useTranslation} from 'react-i18next';
import Style from './style';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import MyGrayButton from 'components/MyGrayButton';
import {LATITUDE, LONGITUDE, MARKER_DELTA} from 'utils/constants';
import SearchBar from 'delivery/screens/AddAddressScreen/SearchBar';
import { fetchPlaces, clearPlacesList, fetchRevGeoPlaces } from './actions';
import NavigationHeader from 'components/NavigationHeader';
import {SIZES, DelIcons} from 'assets/index';
import Geolocation from '@react-native-community/geolocation';
const AskAddressScreen = props => {
  const {t, i18n} = useTranslation();
  const searchBarRef = createRef();
  const [locationInfo, setLocationInfo] = useState({});
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude: latitude, longitude: longitude } = position.coords;
        setLocationInfo({
          location: '',
          name: '',
          latitude: latitude,
          longitude: longitude,
        });
        dispatch(fetchRevGeoPlaces(
          latlng = `${latitude},${longitude}`
        ))
        changeMarker({ latitude, longitude, ...MARKER_DELTA });

      },
      error => {
        // this.setState({locationEnabled: false});
        // alert('Location Failed');
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  const [marker, changeMarker] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    ...MARKER_DELTA,
  });
  const dispatch = useDispatch();
  const placesData = useSelector(state => state.FetchPlacesReducer.placesData);
  const isLoading = useSelector(state => state.FetchPlacesReducer.isLoading);
  const errorMsg = useSelector(state => state.FetchPlacesReducer.errorMsg);
  const userData = useSelector(state => state.getUserReducer.userData);
  const onChangeInputValue = input => {
    dispatch(fetchPlaces(input));
  };
  const onSelectedPlace = item => {
    const {lat: latitude, lng: longitude} = item.geometry.location;
    dispatch(clearPlacesList());
    searchBarRef.current.clear();
    changeMarker({latitude, longitude, ...MARKER_DELTA});

    setLocationInfo({
      location: item.formatted_address,
      name: item.name,
      latitude: '' + item.geometry.location.lat,
      longitude: '' + item.geometry.location.lng,
    });
  };
  return (
    <View style={{}}>
      <StatusBar barstyle="dark-content" />
      <View style={Style.map}>
        <MapView region={marker}>
          <Marker coordinate={marker} />
        </MapView>
        <View style={{marginTop: 50}}>
          <NavigationHeader
            title={t('delivery:chooseLocation')}
            displayLine={false}
            navigation={props.navigation}
          />
        </View>
        <SearchBar
          ref={searchBarRef}
          onChangeText={onChangeInputValue}
          listData={placesData}
          loading={isLoading}
          onPressListItem={onSelectedPlace}
        />
        <Text style={Style.errText}>{errorMsg}</Text>
      </View>
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
            shadowOffset: {width: 0, height: 0},
            shadowRadius: 2,
            elevation: 1,
          },
        ]}>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 12,
            marginBottom: 10,
          }}>
          {DelIcons.flatIndicator}
        </View>
        <MyGrayButton
          title={t('delivery:enterAddressDetails')}
          onSelect={() => {
            // props.navigation.navigate();
          }}
        />

        <View
          style={{
            marginBottom: 10,
            marginTop: -20,
          }}>
          <MyButton
            title={t('delivery:addAddress')}
            onSelect={() => {
              alert(JSON.stringify(locationInfo));
              props.navigation.navigate('AddAddress', {
                addressId: '',
                first_name: userData?.first_name,
                last_name: userData?.last_name,
                phone: userData?.mobile,
                street: locationInfo.location,
                city: locationInfo.name,
                type: 'Home',
                location: { lat: '' + locationInfo.latitude, lng: '' + locationInfo.longitude },
                default_set: false,
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AskAddressScreen;
