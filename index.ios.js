import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TabBarIOS,NavigatorIOS } from 'react-native';
import MapTab from './components/Tab/MapTab';
import PinTab from './components/Tab/PinTab';
import AddTab from './components/Tab/AddTab';
import CategoryTab from './components/Tab/CategoryTab';
import ProfileTab from './components/Tab/ProfileTab';

// import SearchTab from './SearchTab.js';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PinzzApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Map'
    };
  }
  render() {
    return (
      <TabBarIOS
       tintColor="#E52727"
        barTintColor="#ffffff">
        <Icon.TabBarItemIOS
          title="Map"
          iconName="ios-map-outline"
          selectedIconName="ios-map"
          selected={this.state.selectedTab === 'Map'}
          onPress={() => { this.setState({ selectedTab: 'Map'});}}>
          <MapTab/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
         title="Pin"
         iconName="ios-pin-outline"
          selectedIconName="ios-pin"
        selected={this.state.selectedTab === 'Pin'}
        onPress={() => { this.setState({ selectedTab: 'Pin'});}}>
          <PinTab/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
         title="Add"
         iconName="ios-add-circle-outline"
         selectedIconName="ios-add-circle"
        selected={this.state.selectedTab === 'Add'}
        onPress={() => { this.setState({ selectedTab: 'Add'});}}>
          <AddTab/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
         title="Category"
         iconName="ios-list-outline"
          selectedIconName="ios-list"
        selected={this.state.selectedTab === 'Category'}
        onPress={() => { this.setState({ selectedTab: 'Category'});}}>
          <CategoryTab/>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
         title="Profile"
         iconName="ios-contact-outline"
          selectedIconName="ios-contact"
        selected={this.state.selectedTab === 'Profile'}
        onPress={() => { this.setState({ selectedTab: 'Profile'});}}>
          <ProfileTab/>
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    )
  }
}


AppRegistry.registerComponent('pinzz', () => PinzzApp);