import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import Pos from '../../../assets/images/pos.png'
import Logo from '../../../assets/images/logo.png'
import { Thumbnail } from 'native-base';

class HomeScreen extends Component{
    static navigationOptions = {
        title: "Home",
        headerStyle: {
            backgroundColor: '#0000FF',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    };

    // componentDidMount(){
    //     if (!AsyncStorage.getItem('token')) {
    //         this.props.history.push('/Login')
    //     }
    //     this.getProduct();
    // }

    onLogout = () => {
        AsyncStorage.removeItem('user-id')
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('isAuth')
        AsyncStorage.removeItem('status')
        this.props.navigation.navigate('Login')
        // localStorage.removeItem('status')
    }

    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#87cefa" }}>
                <Image source={Pos} style={{width: 200, height: 40, marginBottom:10, borderRadius:20 }} />
                <Image source={Logo} style={{width: 130, height: 90 }} />
                <TouchableOpacity
                    style={{ backgroundColor: '#00008B', padding: 8, justifyContent: 'center', alignItems: 'center', width: 210, marginTop: 60, borderRadius:20, height:45}}
                    onPress={() => this.props.navigation.navigate('Dashboard')}>
                        <Text style={{  color: "#fff" }}>Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: '#0000FF', padding: 8, justifyContent: 'center', alignItems: 'center', width: 250, marginTop: 22, borderRadius:20, height:45}}
                    onPress={() => this.props.navigation.navigate('Product')}>
                        <Text style={{  color: "#fff" }}>Management Product</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: '#0000FF', padding: 8, justifyContent: 'center', alignItems: 'center', width: 250, marginTop: 22, borderRadius:20, height:45}}
                    onPress={() => this.props.navigation.navigate('Product')}>
                        <Text style={{  color: "#fff" }}>Management Category</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onLogout.bind(this)}
                    style={{ backgroundColor: '#1C3F94', padding: 8, justifyContent: 'center', alignItems: 'center', width: 210, marginTop: 22, borderRadius:20, height:45}}>
                        <Text style={{ color: "#fff" }}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScreen;