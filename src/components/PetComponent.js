import React from 'react';
import { Card, CardImg, CardBody, CardText, Button } from 'reactstrap';
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
            <Card>
                <Link to={`/pet/${product.id}`}>
                    <CardImg width="100%" src={baseUrl + product.image} alt={product.name} />
                </Link>
                <CardBody className="card-stuff">
                    <CardText>{product.name}</CardText>
                    <CardText>{product.price}</CardText>
                </CardBody>
                <Button className="btn-custom" color="link" type="submit" value="submit">+ Add to Cart</Button>
            </Card>
        </React.Fragment>
    );
}

function Pet(props) {

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

    const pets = props.products.pets.map(product => {
        return (
            <div key={product.id} className="col-sm-6 col-md-4">
                <RenderProduct 
                    product={product}
                    isLoading={props.petsLoading}
                    errMess={props.petsErrMess}
                />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {pets}
            </div>
        </div>
    );
}


export default Pet;