import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealSubscription from '../mealPlan/screens/MealSubscription';
import WeeklyMealPlan from '../mealPlan/screens/WeeklyMealPlan';
import WelcomeMealPlan from '../mealPlan/screens/WelcomeMealPlan';
import HomeScreen from 'common/screens/HomeScreen';
import MainScreen from 'delivery/screens/MainScreen';
import CartScreen from 'delivery/screens/CartScreen';
import CategoryScreen from 'delivery/screens/CategoryScreen';
import { NavIcons } from 'assets/svg/navigationSVG';
import { COLORS } from 'assets/index';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

export default function DeliveryTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          if (route.name === 'Meal Plan') {
            icon = focused
              ? <Image source={require('../images/mealPlanTab.png')} />
              : NavIcons.mealPlanInActive;
          } else if (route.name === 'Services') {
            icon = focused ? NavIcons.serviceActive : NavIcons.serviceInActive;
          } else if (route.name === 'Bag') {
            icon = focused ? NavIcons.bagActive : NavIcons.bagInactive;
          }
          return <View>{icon}</View>;
        },
        tabBarActiveTintColor: COLORS.red,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        gestureEnabled: false,
      })}>
      <Tab.Screen name="Meal Plan" component={MealPlanStack} />
      <Tab.Screen name="Services" component={ServiceStack} />
      <Tab.Screen name="Bag" component={CartScreen} />
    </Tab.Navigator>
  );
}
function MealPlanStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="WelcomeMealPlan" component={WelcomeMealPlan} />
      <Stack.Screen name="WeeklyMealPlan" component={WeeklyMealPlan} />
      <Stack.Screen name="MealSubscription" component={MealSubscription} />
    </Stack.Navigator>
  );
}

function ServiceStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
}
