import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import MainStyles from 'styleSheet/MainStyle';
import MyButton from 'components/MyButton';
import UnderlineView from 'components/underlineView';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import styles from './style';
import {SIZES, DelIcons} from 'assets/index';

const FeedbackScreen = props => {
  const { t, i18n } = useTranslation();
  return (
    <View style={MainStyles.mainBody}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <NavigationHeader title={t('delivery:feedback')} navigation={props.navigation} />
        <ScrollView bounces = {false}>
          <View style={{ marginLeft: 20, marginRight: 27, marginTop: 10 }}>
            <Text style={[MainStyles.headerTitle, { fontSize: SIZES.h2 }]}>
              {t('delivery:sendFeedback')}
            </Text>
            <Text
              style={[
                MainStyles.descText,
                {
                  marginTop: 16,
                  marginBottom: 0,
                  marginLeft: 35,
                  marginRight: 35,
                  fontSize: SIZES.h,
                  textAlign: 'left',
                },
              ]}>
              {t('delivery:doYouHaveSuggestion')}
            </Text>
            <UnderlineView />
            <Text style={[MainStyles.headerTitle, { fontSize: SIZES.h2 }]}>
              {t('delivery:howExperience')}
            </Text>
            {/* <View style={MainStyles.ChooseType}> */}
            <View style={{ flexDirection: 'row' }}>
              <View style={[
                styles.image,
                {
                  marginRight: 20,
                  marginTop: 15,
                  marginBottom: 15,
                  marginLeft: 0,
                },
              ]}>
                {DelIcons.activeSmileFace}
              </View>
              <View style={[
                styles.image,
                {
                  marginRight: 20,
                  marginTop: 15,
                  marginBottom: 15,
                  marginLeft: 0,
                },
              ]}>
                {DelIcons.inActiveNeutralFace}
              </View>
              <View style={[
                styles.image,
                {
                  marginRight: 20,
                  marginTop: 15,
                  marginBottom: 15,
                  marginLeft: 0,
                },
              ]}>
                {DelIcons.inActiveSadFace}
              </View>
            </View>
            <View
              style={{
                shadowColor: 'black',
                shadowOpacity: 0.15,
                shadowOffset: { width: 0, height: 0 },
                shadowRadius: 2,
                elevation: 2,
              }}>
              <TextInput
                style={[
                  styles.input,
                  {
                    shadowColor: 'black',
                    shadowOpacity: 0.15,
                    shadowOffset: { width: 0, height: 0 },
                    shadowRadius: 12,
                    elevation: 2,
                  },
                ]}
                placeholder={t('delivery:enterFeedback')}
                placeholderTextColor="grey"
                //   value={this.state.value}
                //   onChangeText={text => this.setState({value: text})}
                multiline={true}
                numberOfLines={4}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            bottom: 0,
            position: 'absolute',
            width: '100%',
            marginBottom: 30,
          }}></View>
      </SafeAreaView>
      <View style={{ alignContent: 'flex-end' }}>
        <MyButton
          title={t('delivery:submit')}
          onSelect={() => {
            props.navigation.navigate('OrderComplete');
          }}
        />
      </View>
    </View>
  );
};

export default FeedbackScreen;

