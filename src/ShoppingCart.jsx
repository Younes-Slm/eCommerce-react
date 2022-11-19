import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        // { id: 1, productName: "iPhone", price: 8900, quantity: 0 },
        // { id: 2, productName: "Sony Camera", price: 4500, quantity: 0 },
        // { id: 3, productName: "iPad", price: 7745, quantity: 0 },
        // { id: 4, productName: "Dell", price: 12400, quantity: 0 },
        // { id: 5, productName: "Xbox", price: 7780, quantity: 0 },
        // { id: 6, productName: "Ps5", price: 800, quantity: 0 },
      ],
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <h4>ShoppingCart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    //fetch data from data source
    //console.log("componentDidMount-shopping card");

    var response =await fetch(" http://localhost:5000/products",{method:"GET"});

    var prods = await response.json();

    console.log(prods);
    this.setState({products:prods});
    // var response = promise.then((response) =>{
    //   console.log(response);

    //   var promise2 = response.json();
    //   promise2.then((prods) =>{
    //     console.log(prods);

    //     this.setState({products:prods});
    //   });
     
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate",
      prevProps,
      prevState,
      this.props,
      this.state
    );

    // if(prevProps.x != this.props.x){

    // }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount-shoppingCart");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch-shoppingCart");
    console.log(error, info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  handleIncrement = (product, maxValue) => {
    //console.log('handle',product);
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      //console.log(allProducts[index]);
      allProducts[index].quantity++;

      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    //console.log('innn',product);
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    //console.log(allProducts[index]);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete? ")) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}
