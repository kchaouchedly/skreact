import { Component } from "react";
import { Button,Row,Col ,Card} from 'react-bootstrap';



export default class Product extends Component{
 // constructor(props) {
    //     super(props);
    //     this.state = {
    //         likes: this.props.p.like
    //     };
    // }
    //
    // handleLike = () => {
    //     this.setState({
    //         likes: this.state.likes + 1
    //     });
    // };

    constructor(props) {
        super(props);
        this.state = { p: props.p};
    /*     this.addLikes = this.addLikes.bind(this);
        this.state = {likes: 0};
        this.byproduct = this.byproduct.bind(this); */
    
   
     
    }

    state = {
        showAlert: false
    };
    componentDidUpdate(){
        console.log("product update");

    }


    handlBuy = () => {
       
    }

    addLikes =(e) =>{
        this.setState((oldState) => ({
            p: {...oldState.p, like: oldState.p.like +1}

        }));
    }
   

    byproduct =(e) => {
        this.setState((olddState) => ({
            p: {...olddState.p, quantity: olddState.p.quantity -1}

        }));
        this.setState({showAlert: true});
        setTimeout(() => {
            this.setState({showAlert: false})

        }, 2000)
  }

   
    render() {
        const className = Product.like > 5 ? "text-center bestProduct" : "text-center"
      return (<Card style={{ width: "18rem" }} className="text-center" border="secondary">
        <Card.Header>
   <Card.Img
     variant="top"
     src={require("../assets/images/" + this.props.p.img)}
     alt="Product Img"
     height={200}
   />
   </Card.Header>
   <Card.Body>
     <Card.Title>{this.state.p.name}</Card.Title>
     <Card.Text>Price :  {this.state.p.price} DT</Card.Text>
     <Card.Text>Quantity : {this.state.p.quantity}</Card.Text>
 <Card.Text>Description : {this.state.p.description}</Card.Text>
     <Card.Text>Likes :{this.state.p.like}</Card.Text>
     <Row>
       <Col md={6}>
         {" "}
         <Button variant="primary" onClick={this.addLikes}>Like</Button>
       </Col>
       <Col md={6}>
               <div><Button disabled={this.props.p.quantity == 0} onClick={this.byproduct}
                            variant="btn btn-danger">Buy</Button>
                   {this.state.showAlert && (
                       <div className="alert alert-success mt-3" role="alert">
                           You bought an item

                       </div>
                   )}</div>
       </Col>
     </Row>
   </Card.Body>
 </Card>


        );
    }
    
}