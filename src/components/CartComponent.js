import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderProduct({product, isLoading, errMess}) {

    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>
    }
    return (
        <React.Fragment>
            <Card className="card-cart">
                <CardBody>
                    <div className="row align-items-center">
                        <div className="col-6">
                            <Link to={`/cart/${product.id}`}>
                                <CardImg className="card-product" width="100%" src={baseUrl + product.image} alt={product.name} />
                            </Link>
                        </div>
                        <div className="col-6">
                            <CardText>{product.name}</CardText>
                            <CardText>{product.price}</CardText>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

function Cart(props) {

    if (props.products.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.products.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.products.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    const cartitems = props.products.cartitems.map(product => {
        return (
            <div key={product.id} className="col-10 align-items-center">
                <RenderProduct 
                    product={product} 
                    isLoading={props.cartitemsLoading}
                    errMess={props.cartitemsErrMess}
                />
                <br></br>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {cartitems}
            </div>
        </div>
    );
}


export default Cart;