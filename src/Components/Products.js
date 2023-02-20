
import React from "react";
import {Alert, Container, Row} from "react-bootstrap";
import Product from "./Product";
import productsList from "../products.json"
export default class Products extends React.Component {
    state= {

Greeting :false,
}
componentDidMount(){
    this.setState(()=>({

        Greeting: true ,
    }));
    setTimeout(()=> {

        this.setState({Greeting :false});
    } ,3000);
}
  render() {
    return (
        <Container>
           {this.state.Greeting && (<Alert variant="success">

                <Alert.Heading>HEY ,WELCOME TO OUR SHOP <strong>My store</strong></Alert.Heading>
                <p>thank you for choosing OUR SHOP</p>
            </Alert>)}
            <Row>
                {productsList.map((product, i) => {
                    return <Product key={i} p={product}/>
                })}
            </Row>
        </Container>
    )
}
}