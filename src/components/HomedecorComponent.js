import React from 'react';
import { Card, CardImg, CardBody, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderProduct({product}) {
    return (
        <React.Fragment>
            <Card>
                <Link to={`/homedecor/${product.id}`}>
                    <CardImg width="100%" src={product.image} alt={product.name} />
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

function Homedecor(props) {
    const homedecor = props.products.map(product => {
        return (
            <div key={product.id} className="col-sm-6 col-md-4">
                <RenderProduct product={product} />
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