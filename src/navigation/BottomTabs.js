import * as React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'common/screens/HomeScreen';
import MainScreen from 'delivery/screens/MainScreen';
import CartScreen from 'delivery/screens/CartScreen';
import CategoryScreen from 'delivery/screens/CategoryScreen';
import {NavIcons} from 'assets/svg/navigationSVG';
import {COLORS} from 'assets/index';
import {useTranslation} from 'react-i18next';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

export default function DeliveryTabs() {
  const {t, i18n} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;
          if (route.name === t('navigate:delivery')) {
            icon = focused
              ? NavIcons.deliveryActive
              : NavIcons.deliveryInActive;
          } else if (route.name === t('navigate:services')) {
            icon = focused ? NavIcons.serviceActive : NavIcons.serviceInActive;
          } else if (route.name === t('navigate:bag')) {
            icon = focused ? NavIcons.bagActive : NavIcons.bagInactive;
          }
          return <View>{icon}</View>;
        },
        tabBarActiveTintColor: COLORS.red,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        gestureEnabled: false,
      })}>
      <Tab.Screen name= {t('navigate:delivery')} component={DeliveryStack} />
      <Tab.Screen name= {t('navigate:services')} component={ServiceStack} />
      <Tab.Screen name= {t('navigate:bag')} component={CartScreen} />
    </Tab.Navigator>
  );
}
function DeliveryStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
}

function ServiceStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />

    </Stack.Navigator>
  );
}
