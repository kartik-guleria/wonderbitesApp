import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SearchBar from 'delivery/screens/AddAddressScreen/SearchBar/index';
import {COLORS, DelIcons} from 'assets/index';
import CheckBox from 'components/CheckBox';
import {useSelector} from 'react-redux';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';
const CuisinesBottomSheet = props => {
  const {t, i18n} = useTranslation();
  const renderItem = itemData => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={[styles.sectionHeader1, {marginTop: 24}]}>
          {itemData.item.name}
        </Text>
        <CheckBox style={{marginTop: 24}} />
      </View>
    );
  };
  const cuisineData = useSelector(
    state => state.FetchCuisineReducer.cuisineData,
  );
  const Header = () => {
    return (
      <View style={{justifyContent: 'flex-start'}}>
        <View style={{alignItems: 'center'}}>{DelIcons.flatIndicatorGrey}</View>
        <View style={{}}>
          <Text style={styles.title}>{t('delivery:cuisines')}</Text>
          <View style={{marginTop: 10}}>
            <SearchBar placeholder={t('delivery:searchCuisine')} />
          </View>
          <View
            style={{
              marginTop: -25,
              height: 1,
              backgroundColor: COLORS.grey,
            }}></View>
        </View>
      </View>
    );
  };
  const Footer = () => {
    return (
      <View>
        <View style={{height: 1, backgroundColor: COLORS.grey}}></View>

        <View style={styles.bottomSection}>
          <View style={styles.clearView}>
            <TouchableOpacity>
              <Text style={styles.clearButton} onPress={props.onPressClearAll}>
                {t('delivery:clearAll')}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.applyView}>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyText}>{t('delivery:apply')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{height: '100%', marginRight: 16, marginLeft: 16}}>
      <FlatList
        bounces={false}
        // keyExtractor={(item, index) => item.id}
        data={cuisineData}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
        renderItem={renderItem}
      />
    </View>
  );
};
export default CuisinesBottomSheet;
const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 18,
    fontFamily: 'gotham',
    color: '#2B2C2D',
  },
  searchBar: {
    marginTop: 9,
    borderRadius: 12,
    borderColor: '#DDDDDD',
  },
  line1: {
    marginTop: 16,
    marginRight: 23,
    marginLeft: 17,
    height: 1,
    backgroundColor: '#F4F2F2',
  },
  sectionHeader1: {
    marginTop: 24,
    fontSize: 18,
    fontFamily: 'gotham',
    fontWeight: '500',
    color: '#2B2C2D',
  },
  blankItems1: {
    fontFamily: '',
    fontWeight: '400',
    fontSize: 18,
    marginTop: -30,
  },
  cuisinesData: {
    fontFamily: 'gotham',
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 15,
  },
  sectionHeader2: {
    marginTop: 24,
    fontSize: 18,
    fontFamily: 'gotham',
    fontWeight: '500',
    color: '#2B2C2D',
  },
  blankItems2: {
    fontFamily: 'gotham',
    fontWeight: '400',
    fontSize: 18,
    marginTop: -30,
  },
  everythingData: {
    fontFamily: 'gotham',
    fontWeight: '400',
    fontSize: 18,
    marginBottom: 15,
  },
  line2: {
    marginTop: 16,
    marginRight: 23,
    marginLeft: 17,
    height: 1,
    backgroundColor: '#F4F2F2',
  },
  clearButton: {
    fontSize: 18,
    fontFamily: 'gotham',
    fontWeight: '400',
    color: '#2B2C2D',
  },
  applyButton: {
    marginLeft: 77,
    width: 148,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#E1251B',
  },
  applyText: {
    alignSelf: 'center',
    marginTop: 11,
    fontSize: 18,
    fontFamily: 'gotham',
    fontWeight: '600',
    color: '#FFFFFF',
  },
  applyView: {
    marginTop: 31,
    marginBottom: 10,
  },
  clearView: {
    marginTop: 43,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section2: {
    marginTop: 24,
    flexDirection: 'row',
  },
  section1: {
    marginTop: 22,
    flexDirection: 'row',
  },
  middleSection: {
    marginTop: -10,
    marginLeft: 17,
    marginRight: 19,
  },
});
