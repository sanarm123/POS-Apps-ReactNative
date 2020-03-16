import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Provider } from 'react-redux'

import store from './src/components/redux/store'
import HomeScreen from './src/components/screen/Home/HomeScreen'
import LoginScreen from './src/components/screen/Login/LoginScreen'
import DashboardScreen from './src/components/screen/Dashboard/Dashboard'
import ProductScreen from './src/components/screen/Product/ProductScreen'
import ProductAddScreen from './src/components/screen/Product/ProductAdd'
import ProductEditScreen from './src/components/screen/Product/ProductEdit'
// const tabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeScreen
//     // About: AboutScreen
//   }
// )
const homeNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    Dashboard: DashboardScreen,
    Product: ProductScreen,
    AddProduct: ProductAddScreen,
    EditProduct: ProductEditScreen,
    Cart: CartScreen
  }
  // initialRouteName: ''
)

const AppNavigator = createSwitchNavigator(
  {
    Home: homeNavigator
  }
)

const AppContainer = createAppContainer(AppNavigator)
console.disableYellowBox = true;
function App () {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App
