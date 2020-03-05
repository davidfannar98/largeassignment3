import React from 'react';
import CartList from '../CartList';
import { getProducts } from '../../../../server/services/bubbleService'
import { Link } from 'react-router-dom';


class Cart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Products: [],
        };
    };

    componentDidMount() {
        this.setState({
        Products: getCart(JSON.parse(localStorage.getItem('cart')), getProducts())
        })
    }

    render() {
        return(
            <div>
                <h2>Your cart:</h2>
                <CartList products={ this.state.Products } />
                <button class="btn btn-light" onClick={function () {localStorage.setItem('cart', '[]');window.location.reload()}}>Erase cart</button>
                <Link to="/Checkout"><button class="btn btn-success" > Proceed to checkout </button></Link>
            </div>
        )
    }
}

function getCart(cart, products) {
    var cart_array = []
    console.log(products)
    
    for (var i = 0; i < cart.length; i++) {
        for (var k = 0; k < products.length; k++) {
            if (cart[i] == products[k].id) {
                cart_array.push(products[k])
            }
        }
      }
    return cart_array
}

export default Cart;
