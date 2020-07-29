import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function ItemInfo(props) {

    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="row align-items-center">
                        <div className="col-4 justify-content-center">
                            <CardImg src={baseUrl + props.product.image} alt={props.product.name} />
                        </div>
                        <div className="col-8">
                            <CardText>{props.product.name}</CardText>
                            <CardText>{props.product.price}</CardText>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );

}

export default ItemInfo;