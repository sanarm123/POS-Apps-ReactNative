import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, FlatList, TouchableOpacity, AsyncStorage, Picker } from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

// import Spinner from '../Spinner/Spinner';
import { getProducts, deleteProduct, searchProduct, filterProduct } from '../../redux/actions/products';

class Product extends Component{
    state={
        product: ''
    }

    static navigationOptions = ({ navigation }) => {
        return{
            title: "Product",
            headerStyle: {
                backgroundColor: '#0000FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerRight: () => (
            <Fragment>
                <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity 
                    style={{ backgroundColor: 'green', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20}}
                    onPress={() => navigation.navigate('AddProduct')}>
                        <Text style={{ color: "#fff" }}>Add Product</Text>
                </TouchableOpacity>
                </View>
            </Fragment>
            ),
        }
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

    renderRow = ({item}) => {
        return(
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 8, borderBottomWidth:1, borderBottomColor: "rgba(0,0,0,.1)" }}>
                <Image source={{uri: item.image}} style={{width: 150, height: 110, borderRadius:20}} />
                <View style={{ flex: 1, flexDirection: 'column' }}> 
                    <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 10 }}>{item.name}</Text>
                    <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 5 }}>Price: {item.price}</Text>
                    <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 10 }}>Stock {item.stock}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.props.navigation.navigate('EditProduct', {
                            product: item
                        })}>
                            <Text style={{ fontSize: 17, color: "orange" }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, color: "red" }} onPress={this.onSubmitDelete.bind(this, item.id)}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    render(){
        const {products} = this.props;

        return(
            <View>
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
                    <Picker.Item label="Food" value="Food" />
                    <Picker.Item label="Drink" value="Drink" />
                    </Picker>
                </View>
                {/* <Spinner isLoading={products.isLoading} /> */}
                <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
                    <FlatList 
                        data={products.products}
                        renderItem={this.renderRow}
                        // refreshing={products.isLoading}
                        // onRefresh={this.onRefreshing}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(Product);