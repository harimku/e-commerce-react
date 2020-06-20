import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderCard({item}) {
    return (
        <Card>
            <CardImg className="img-square-wrapper" src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    const content = props.homepages.map(homepage => {
        return (
            <div key={homepage.id} className="col-md-5 mt-4">
                <RenderCard item={homepage} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {content}
            </div>
        </div>
    );
}


export default Home;