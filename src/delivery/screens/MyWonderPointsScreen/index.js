// order history past detail screen code

import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {WONDERPOINTS} from 'data/dummy-data';
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import WonderPointTab from 'components/wonderPointTab';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { wonderPointsCountRequest, wonderPointsListRequest } from './actions';
import styles from './style';
import {
  COLORS,
  SIZES,
  DelIcons,
  FONTS,
} from 'assets/index';

const MyWonderPointsScreen = props => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [wpType, setwpType] = useState('');
  const [wpTypeId, setwpTypeId] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [wonderPointsData, setWonderPointsData] = useState([]);
  const onSelectSwitch = index => {
    switch (index) {
      case 2:
        setwpTypeId(2);
        setwpType("earned");
        setCurrentPage(1);
        break;
      case 3:
        setwpTypeId(3);
        setwpType("redeemed");
        setCurrentPage(1);
        break;
      default:
        setwpTypeId(1);
        setwpType("");
        setCurrentPage(1);

    }

  };

  useEffect(() => {
    dispatch(wonderPointsCountRequest());
    dispatch(wonderPointsListRequest({ page: currentPage, filter: wpType }));
    currentPage != 1 ? setWonderPointsData((value) => [...value, ...wpListData?.data]) : setWonderPointsData([wpListData?.data]);
    // setWonderPointsData((value) => [...value, ...newData])

  }, [wpType, currentPage]);

  const wpCount = useSelector(state => state.WonderPointsListReducer.wonderPointsCount);
  const wpListData = useSelector(state => state.WonderPointsListReducer.wonderPointsData);
  const wpMetaData = wpListData?.meta;

  const renderGridItem = itemData => {
    return (
      <View
        style={{
          marginLeft: SIZES.mlr1,
          marginRight: SIZES.mlr1,
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: SIZES.r,
            }}>
            <View style={styles.image}>{DelIcons.activeWonderpoints}</View>
          </View>
          <View
            style={{
              marginLeft: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
            }}>
            <View>
              <Text style={styles.orderTitle}> {itemData.item.event}</Text>

              <Text
                style={[
                  MainStyle.descHistoryText,
                  {
                    fontWeight: SIZES.w5,
                    fontSize: SIZES.h,
                    color: '#898989',
                    marginTop: 4,
                  },
                ]}>
                Point reward from daily check-in
              </Text>

              <Text
                style={[
                  MainStyle.descHistoryText,
                  {fontWeight: SIZES.w5, color: '#898989', marginTop: 4},
                ]}>
                {moment(itemData.item.created_at).format('DD-MM-yyyy HH:mm')} 
              </Text>
            </View>
            <View>
              <Text style={itemData.item.action === "earn" ? styles.price : styles.priceGray}> {itemData.item.action === "earn" ? "+" : "-"}{itemData.item.points} </Text>
            </View>
          </View>
        </View>
        <UnderlineView />
      </View>
    );
  };
  const getHeader = () => {
    return (
      <View style={{marginLeft: SIZES.mlr1, marginRight: SIZES.mlr1}}>
        <View style={{marginTop: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{width:'60%'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    styles.subNdelivText,
                    {fontSize: SIZES.h7, color: COLORS.red, fontWeight: 'bold'},
                  ]}>
                  {wpCount?.wonderpoints} 
                </Text>
                <Text
                  style={[
                    styles.subNdelivText,
                    {color: COLORS.titleBlack, textAlignVertical: 'bottom'},
                  ]}>
                  {' '}{t('delivery:wonderpoints')}
                </Text>
              </View>
              <Text
                style={
                  {fontSize: SIZES.h, color: '#898989',fontFamily: FONTS.normal,
                  fontWeight: SIZES.w5,
                  lineHeight: 26}}>
                254 {t('delivery:coinsExpiring')} 12-10-2021
              </Text>
            </View>
            <View style={{alignSelf: 'flex-end'}}>
              <TouchableOpacity
                style={[styles.buttonStyle, {marginBottom: 5}]}
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('BottomTabs')}>
                <Text style={MainStyle.buttonTextStyle}>
                  {t('delivery:earnMore')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <UnderlineView />
          <WonderPointTab
            selectionMode={wpTypeId}
            option1={t('delivery:allHistory')}
            option2={t('delivery:earnings')}
            option3={t('delivery:spendings')}
            onSelectSwitch={onSelectSwitch}
            selectionColor={COLORS.background2}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('delivery:myWonderPoints')}
        navigation={props.navigation}
        displayLine={true}
      />
      <View
        style={{
          marginBottom: SIZES.mlr4,
        }}>
        {wonderPointsData.length > 1 ?
          <FlatList
            bounces={false}
            keyExtractor={(item, index) => item?.id}
            data={wonderPointsData}
            onEndReached={() => setCurrentPage(wpMetaData?.last_page <= currentPage + 1 ? currentPage + 1 : currentPage)}
            onEndReachedThreshold={0.5}
            renderItem={renderGridItem}
            ListHeaderComponent={getHeader}
            numColumns={1}
            directionalLockEnabled={true}
          />
          :
          <View style={{ alignItems: 'center', fontWeight: 'bold' }}>
            <Text>Shop to get wonderpoints</Text>
          </View>
        }
      </View>
    </SafeAreaView>
  );
};

export default MyWonderPointsScreen;
