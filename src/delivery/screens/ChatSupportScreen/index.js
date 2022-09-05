// chat support screen
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import styles from './style';

import { COLORS } from 'assets/index';

const ChatSupportScreen = props => {
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <View style={{ backgroundColor: COLORS.white, height: '100%' }}>
        <NavigationHeader
          title={t('delivery:chatSupport')}
          displayLine={true}
          navigation={props.navigation}
        />
        <ScrollView>
          {/* <Text style={styles.date}>Today at 11:35 AM</Text>

        <View style={{marginTop: 23}}>
          <View style={[styles.leftView, {height: 58}]}>
            <Text style={styles.leftText}>
              Hello John, How can we help you.
            </Text>
          </View>
          <Text style={styles.leftTime}>8 mins ago</Text>
          <View style={styles.rightView}>
            <Text style={styles.rightText}>
              Hello, I need to cancel my recent order.I made it by mistake.
            </Text>
          </View>
          <Text style={styles.rightTime}>8 mins ago</Text>
          <View style={styles.leftView}>
            <Text style={styles.leftText}>
              Sure! Is it the order with 2 Burritos, that you made 5 mins ago?
            </Text>
          </View>
          <Text style={styles.leftTime}>8 mins ago</Text>
          <View style={styles.rightView}>
            <Text style={styles.rightText}>
              Yes!That’s the one. I would like to cancel it please.
            </Text>
          </View>
          <Text style={styles.rightTime}>8 mins ago</Text>
          <View style={styles.rightView}>
            <Text style={styles.rightText}>
              Can you cancel it? I dont want to receive it.
            </Text>
          </View>
          <Text style={styles.rightTime}>8 mins ago</Text>
          <View style={[styles.leftView, {marginRight: 264}]}>
            <Text style={styles.typing}>...</Text>
          </View>
        </View> */}
          <View style={styles.box}>
            <Text style={styles.text1}>{t('delivery:sorry')}</Text>
            <Text style={styles.text2}>
              {t('delivery:continueToWrite')}
              <Text style={{ color: COLORS.blue }}> +355 69 601 1010</Text>
            </Text>
            <Text style={styles.text3}>{t('delivery:week')}</Text>
            <Text style={styles.text4}>09:00 - 21:00</Text>
          </View>
        </ScrollView>
        <View style={styles.messageBox}>
          <TextInput
            style={styles.messageText}
            placeholder={t('delivery:writeMessage')}
            multiline={true}
          />
          <TouchableOpacity style={styles.buttonView}>
            <Text style={styles.buttonText}>{t('delivery:send')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatSupportScreen;
