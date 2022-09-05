import { MealPlanIcons,COLORS } from '../../../assets/index';
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
// import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { useNavigation } from '@react-navigation/native';
import {MealPlanOption} from 'data/mealPlanData';
import MealSubsComp from 'components/MealPlanComp/MealSubsComp';




const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'Week 1',
    content: BACON_IPSUM,
  },
  {
    title: 'Week 2',
    content: BACON_IPSUM,
  },
  {
    title: 'Week 3',
    content: BACON_IPSUM,
  },
  {
    title: 'Week 4',
    content: BACON_IPSUM,
  },
  {
    title: 'Week 5',
    content: BACON_IPSUM,
  },
];

export default class DropDownMenu extends Component {

  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
        <View style = {{marginRight:10}}>
           {isActive? MealPlanIcons.blackArrowUp : MealPlanIcons.blackArrowDown }
        </View>
      </Animatable.View>
    );
  };
  

  renderContent(section, _, isActive) {
    const renderProductGridItem = (itemData) => {

      return (
        <MealSubsComp
          title={itemData.item.name}
          shortDesc={itemData.item.description}
          longDesc={itemData.item.description}
          rating={itemData.item.rating}
          price={itemData.item.price}
          image={itemData.item.thumbnail}
          kcal={itemData.item.calories}
          // onSelect={() => this.props.navigation.navigate('MealDetails')}
        />
      );
    };
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: COLORS.white}}
          numColumns={1}
          data={MealPlanOption}
          renderItem={renderProductGridItem}
          keyExtractor={(item, index) => item.id}
        />
        </Animatable.Text>
      </Animatable.View>
    );
  }
 
  render() {
    const { multipleSelect, activeSections } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ }}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={1}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F7F7F7',
    flexDirection:'row',
    justifyContent: 'space-between',
    height:29,
    marginRight:16,
    marginLeft:16,
    alignItems:'center',
    marginBottom:16,
    borderRadius:5
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginLeft:17,
  },
  content: {
    marginRight:16,
    marginLeft:16,
    backgroundColor: 'white',
  },
  active: {
    backgroundColor:'#F7F7F7'
  },
  inactive: {
    backgroundColor: '#F7F7F7',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: 'white',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
