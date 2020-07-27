import React from 'react';
import { Card, CardImg, CardBody, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
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
                    <Link to={`/automotive/${product.id}`}>
                        <CardImg className="card-product" src={baseUrl + product.image} alt={product.name} />
                    </Link>
                    <CardText>{product.name}</CardText>
                    <CardText>{product.price}</CardText>
                </CardBody>
                <Button onClick={() => postItem(product.name, product.image, product.price)} className="btn-custom" color="link" type="submit" value="submit">+ Add to Cart</Button>
            </Card>
        </React.Fragment>
    );
}

function Automotive(props) {

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

    const automotive = props.products.automotives.map(product => {
        return (
            <div key={product.id} className="col-sm-6 col-md-4">
                <RenderProduct 
                    product={product} 
                    isLoading={props.automotivesLoading}
                    errMess={props.automotivesErrMess}
                    postItem={props.postItem}
                />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {automotive}
            </div>
        </div>
    );
}


export default Automotive;