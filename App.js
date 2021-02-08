import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Icon from './app/components/Icon';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import Screen from './app/components/Screen';
import ListItems from './app/components/ListItems';
import AccountScreen from './app/components/AccountScreen';
import ListingScreens from './app/screens/ListingScreens';
import { TextInput } from 'react-native-gesture-handler';
import AppTextInput from './app/components/AppTextInput';
import colors from './app/config/colors';
import AppPicker from './app/components/AppPicker';


const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {

  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  )




};


