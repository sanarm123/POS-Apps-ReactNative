import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Content, Form, Item, Input, Button, Text} from 'native-base'
// Picker, Icon,
import {createProduct} from '../../redux/actions/products'
// import console = require('console');
// import Spinner from '../Spinner/Spinner'

class ProductAdd extends Component {
   state = {
      name: '',
      description: '',
      id_category: '',
      price: '',
      stock: ''
      // selected: undefined
   };

   onSubmit = async () => {
      // console.log(this.state)
      await this.props.dispatch(createProduct(this.state));

      if (!this.props.products.isLoading) {
         this.props.navigation.navigate('Product');
      }
   };

   render() {
      return (
         <Container>
            {/* <Spinner isLoading={this.props.products.isLoading} /> */}
            <Content>
               <Form>
                  <Item>
                     <Input
                        placeholder='name'
                        onChangeText={text => this.setState({name: text})}
                     />
                  </Item>
                  <Item>
                  <Input
                     placeholder="description"
                     onChangeText={text => this.setState({description: text})}
                  />
                  </Item>
                  {/* <Item>
                  <Input
                     placeholder="image"
                     onChangeText={text => this.setState({image: text})}
                  />
                  </Item> */}
                  <Item>
                  <Input
                     placeholder="category"
                     onChangeText={text => this.setState({id_category: text})}
                  />

                  {/* <Form> */}
                     {/* <Picker
                     mode="dropdown"
                     iosIcon={<Icon name="arrow-down" />}
                     placeholder="Select your SIM"
                     placeholderStyle={{ color: "#bfc6ea" }}
                     placeholderIconColor="#007aff"
                     style={{ width: undefined }}
                     selectedValue={this.state.selected}
                     onValueChange={this.onValueChange.bind(this)}
                     >
                     <Picker.Item label="Makanan" value='1' />
                     <Picker.Item label="Minuman" value='2' />
                     </Picker> */}
                  {/* </Form> */}
                  </Item>
                  <Item>
                  <Input
                     placeholder="price"
                     onChangeText={text => this.setState({price: text})}
                  />
                  </Item>
                  <Item>
                  <Input
                     placeholder="stock"
                     onChangeText={text => this.setState({stock: text})}
                  />
                  </Item>
               </Form>
               <Button primary style={{margin: 10}} onPress={this.onSubmit}>
                  <Text>Save</Text>
               </Button>
            </Content>
         </Container>
      )
   }
}

const mapStateToProps = state => {
   return {
      products: state.products
   }
}

export default connect(mapStateToProps)(ProductAdd)