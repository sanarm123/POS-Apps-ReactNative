import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Form, Item, Input, Button, Text, Picker, Icon } from 'native-base';

import { updateProduct } from '../../redux/actions/products';
// import console = require('console');
// import products from '../../redux/reducers/products';
// import Spinner from '../Spinner/Spinner';

class ProductEdit extends Component{
    static navigationOptions = {
        title: "Edit Product",
        headerStyle: {
            backgroundColor: 'rgb(245, 149, 84)',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    };

    state = {
        name: '',
        description: '',
        id_category: '',
        price: '',
        stock: ''
    };

    componentDidMount(){
        const product = this.props.navigation.getParam('product');

        this.setState({
            name: product.name,
            description: product.description,
            id_category: product.id_category,
            price: product.price,
            stock: product.stock
            // image: product.image
        });
    }

    onSubmit = async() => {
        // console.log(this.state)
        const product = this.props.navigation.getParam('product');
        await this.props.dispatch(updateProduct(this.state, product.id));

        if(!this.props.products.products.isLoading){
            this.props.navigation.navigate('Product');
        }  
    }
    onChangeCategory(event){
        this.setState({
            id_category: event
        })
    }

    render(){
        // console.log(this.state);
        return(
            <Container>
                {/* <Spinner isLoading={this.props.products.isLoading} /> */}
                <Content>
                    <Form style={{ marginRight: 10 }}>
                        <Item>
                            <Input placeholder="name Product" onChangeText={(text) => this.setState({ name: text })} value={`${this.state.name}`} />
                        </Item>
                        <Item>
                            <Input placeholder="description" onChangeText={(text) => this.setState({ description: text })} value={`${this.state.description}`} />
                        </Item>
                        {/* <Item>
                            <Input placeholder="category" onChangeText={(text) => this.setState({ id_category: text })} /> */}
                            {/* // console.log('halo', action.payload.data.result) */}
                        {/* </Item> */}
                        <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholder="Select..."
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            style={{ width: undefined }}
                            selectedValue={this.state.id_category}
                            onValueChange={this.onChangeCategory.bind(this)}
                            >
                            <Picker.Item label="Food" value="1" />
                            <Picker.Item label="Drink" value="2" />
                        </Picker>
                        </Item>

                        <Item>
                            <Input placeholder="price" onChangeText={(text) => this.setState({ price: text })} value={`${this.state.price}`} />
                        </Item>
                        <Item>
                            <Input placeholder="stock" onChangeText={(text) => this.setState({ stock: text })} value={`${this.state.stock}`} />
                        </Item>
                    </Form>
                    <Button primary style={{ margin: 10 }} onPress={this.onSubmit}>
                        <Text>Save</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductEdit);