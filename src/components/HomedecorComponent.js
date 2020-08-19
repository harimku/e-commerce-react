import React from 'react';
import { Card, CardImg, CardBody, CardText, Button } from 'reactstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderProduct({product, isLoading, errMess, postItem}) {

    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>
    }
    return (
        <React.Fragment>
            <Card>
                <CardBody className="card-stuff">
                    <Link to={`/homedecor/${product.id}`}>
                        <CardImg className="card-product" src={baseUrl + product.image} alt={product.name} />
                    </Link>
                    <ul className="social">
                        <Button ><i class="fa fa-search"></i></Button>
                        <Button ><i class="fa fa-heart"></i></Button>
                        <Button onClick={() => postItem(product.name, product.image, product.price, 1)} ><i class="fa fa-shopping-cart"></i></Button>
                    </ul>
                    <CardText>{product.name}</CardText>
                    <CardText>{product.price} </CardText>
                </CardBody>
                <ReactStars
                    count={5}
                    value={product.rating}
                    size={14}
                    isHalf={true}
                    emptyIcon={<i className="far fa-heart"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-heart"></i>}
                    activeColor="#f5c71a"
                />
                <Button onClick={() => postItem(product.name, product.image, product.price, 1)} className="btn-custom" color="link" type="submit" value="submit">+ Add to Cart</Button>
            </Card>
        </React.Fragment>
    );
}

function Homedecor(props) {

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

    const homedecor = props.products.homedecors.map(product => {
        return (
            <div key={product.id} className="col-sm-6 col-md-4">
                <RenderProduct 
                    product={product} 
                    isLoading={props.decorsLoading}
                    errMess={props.decorsErrMess}
                    postItem={props.postItem}
                />
            </div>
        );
    });


    return (
        <div className="container">
            <div className="row">
                {homedecor}
            </div>
        </div>
    );
}

export default Homedecor;