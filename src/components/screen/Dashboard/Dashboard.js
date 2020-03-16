import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, FlatList, TouchableOpacity, AsyncStorage, Picker } from 'react-native';
import { Container, Content, Header, Item, Input, Icon, Button, Footer, FooterTab } from 'native-base';
// import Spinner from '../Spinner/Spinner';
import { getProducts, deleteProduct, searchProduct, filterProduct } from '../../redux/actions/products';
// import console = require('console');

class Dashboard extends Component{
    static navigationOptions = {
        title: "Dashboard",
        headerStyle: {
            backgroundColor: '#0000FF',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerRight: () => (
            // <Fragment>
                <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity 
                    style={{ backgroundColor: 'green', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20}}
                    onPress={() => navigation.navigate('AddProduct')}>
                        <Text style={{ color: "#fff" }}>Cart</Text>
                </TouchableOpacity>
                </View>
            // </Fragment>
        ),
    };

    state={
        product: '',
        category: ''
    }

    componentDidMount(){
        if (!AsyncStorage.getItem('token')) {
            this.props.history.push('/Login')
        }
        this.getProduct();
    }

    async getProduct(){
        // const data = {}
        await this.props.dispatch(getProducts());
    }

    onRefreshing = () => {
        this.getProduct();
    }

    onSubmitDelete = async productId => {
        // console.log(productId)
        await this.props.dispatch(deleteProduct(productId));
    };

    onSearchProduct = (event) => {
        // console.log(e)
        this.setState({
            product: event
        })
        this.props.dispatch(searchProduct(event));
    }
    filterProduct = (event) => {
        console.log('haha',this.setState)
        this.setState({category: event});
        this.props.dispatch(filterProduct(event));
    }

    logout = () => {
        AsyncStorage.removeItem('user-id')
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('isAuth')
        this.props.navigation.navigate('Login')
        // localStorage.removeItem('status')
    }

    onLogout = () => {
        AsyncStorage.removeItem('user-id')
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('isAuth')
        AsyncStorage.removeItem('status')
        this.props.navigation.navigate('Login')
        // localStorage.removeItem('status')
    }

    async getAllProduct () {
        await this.props.dispatch(getAllProduct())
    }

    parseToRupiah(number)
    {
        var rupiah = ''
        var numberrev = number.toString().split('').reverse().join('')
        for(var i = 0; i < numberrev.length; i++) if(i%3 == 0) rupiah += numberrev.substr(i,3)+'.'
        return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
    }

    renderRow = ({item}) => {
        return(
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 8, borderBottomWidth:1, borderBottomColor: "rgba(0,0,0,.1)", margin:0 }}>
                <Image source={{uri: item.image}} style={{width: 130, height: 105, borderRadius:20}} />
                <View style={{ flex: 1, flexDirection: 'column' }}> 
                    <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 10 }}>{item.name}</Text>
                    <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 5 }}>{this.parseToRupiah(item.price)}</Text>
                    <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 8 }}>Stock {item.stock}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.props.navigation.navigate('EditProduct', {
                            product: item
                        })}>
                            <Text style={{ fontSize: 17, color: "orange" }}>Edit</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, color: "green" }}>Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    render(){
        const {products} = this.props;

        return(
            <Container>
                <View searchBar rounded style={{ backgroundColor: 'silver', borderRadius:7 }}>
                <Item style={{borderRadius:20}}>
                    <Input onChangeText={this.onSearchProduct} placeholder="Search Product" />
                </Item>
                </View>
                <View>
                    <Picker
                    selectedValue={this.state.category}
                    style={{height: 50, width: 100}}
                    onValueChange={this.filterProduct}>
                    <Picker.Item label="All" value="" />
                    {/* {categories.map((category, index) =>
                    <Picker.Item label={category.name} value={category.id} />
                    )} */}
                    <Picker.Item label="Food" value="Food" />
                    <Picker.Item label="Drink" value="Drink" />
                    </Picker>
                </View>
                <Content>
                    {/* <Spinner isLoading={products.isLoading} /> */}
                <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
                    <FlatList 
                        data={products}
                        renderItem={this.renderRow}
                        // refreshing={products.isLoading}
                        // onRefresh={this.onRefreshing}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                </Content>
                <Footer>
                <FooterTab>
                    <Button onPress={() => this.props.navigation('Home')}>
                    {/* <Icon name="apps" /> */}
                    <Text style={{ color: 'white' }}>Home</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('Product')}>
                    {/* <Icon name="camera" /> */}
                    <Text style={{ color: 'white' }}>Product</Text>
                    </Button>
                    <Button active>
                    {/* <Icon active name="navigate" /> */}
                    <Text style={{ color: 'white' }}>Category</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation('Cart')}>
                    {/* <Icon active name="navigate" /> */}
                    <Text style={{ color: 'white' }}>Cart</Text>
                    </Button>
                    <Button onPress={this.onLogout.bind(this)}>
                    {/* <Icon name="person" /> */}
                    <Text style={{ color: 'white' }}>Logout</Text>
                    </Button>
                </FooterTab>
                </Footer>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products.products
        // categories: state.category.categories
    }
}

export default connect(mapStateToProps)(Dashboard);