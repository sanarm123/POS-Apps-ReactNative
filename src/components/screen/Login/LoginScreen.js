import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { View, Text, Button, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail } from 'native-base';
import Logo from '../../../assets/images/logo.png'
import Pos from '../../../assets/images/pos.png'

// import console = require('console');
class LoginScreen extends Component{
    state={
        email: '',
        password: ''
    }
    onChangeEmail = (event) => {
        // console.log(e)
        this.setState({
            email: event
        })
    }
    onChangePassword = (event) => {
        // console.log(e)
        this.setState({
            password: event
        })
    }
    componentDidMount(){
        if(AsyncStorage.getItem('token')){
            this.props.navigation.navigate('/Home');
        }
    }
    // onSubmit = (event) => {
    //     // console.log('haha', this.state);
    //     axios
    //         .post("http://192.168.1.17:8001/user/login", this.state)
    //         .then(res => {
    //             // console.log(res.data);
    //             AsyncStorage.setItem('token', res.data.result.token);
    //             AsyncStorage.setItem('user-id', res.data.result.id);
    //             AsyncStorage.setItem('status', res.data.result.status);
    //             AsyncStorage.setItem('isAuth', true);
    //             this.props.navigation.navigate('Home')
    //             this.componentDidMount()
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }

    static navigationOptions = {
        title: "Login",
        headerStyle: {
            backgroundColor: '#0000FF',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    };

    render(){
        // console.log(e)
        return(
            // <Fragment>
                <Container style={{backgroundColor: "#87cefa"}}>
                <Content>
                <Form style={{ marginTop:60 }}>
                    <View style={{ marginHorizontal:30, alignItems: 'center'}}>
                    <Image source={Pos} style={{width: 200, height: 40, marginBottom:10, borderRadius:20 }} />
                    <Image source={Logo} style={{width: 130, height: 90 }} />

                    <Item floatingLabel>
                    <Label>Email</Label>
                    <Input style={{ marginBottom:10}} onChangeText={this.onChangeEmail}/>
                    </Item>
                    <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input style={{ marginBottom:10}} secureTextEntry={true} onChangeText={this.onChangePassword} />
                    </Item>
                    </View>
                    <View style={{ marginTop:30, alignItems: 'center', justifyContent: 'center' }}>

                        {/* <TouchableOpacity
                                style={{ backgroundColor: '#0000FF', padding: 8, justifyContent: 'center', alignItems: 'center', width: 200, marginTop: 20, borderRadius:23, height:50}}
                                onPress={this.onSubmit}>
                                    <Text style={{  color: "#fff" }}>Login</Text>
                        </TouchableOpacity> */}

                        <TouchableOpacity
                            style={{ backgroundColor: '#00008B', padding: 8, justifyContent: 'center', alignItems: 'center', width: 210, marginTop: 60, borderRadius:20, height:45}}
                            onPress={() => this.props.navigation.navigate('Home')}>
                                <Text style={{  color: "#fff" }}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: '#1C3F94', padding: 8, justifyContent: 'center', alignItems: 'center', width: 200, marginTop: 20, borderRadius:23, height:50}}>
                                <Text style={{  color: "#fff" }}>Register</Text>
                    </TouchableOpacity>
                    </View>
                </Form>
                </Content>
                </Container>
            // </Fragment>
        )
    }
}

export default LoginScreen;