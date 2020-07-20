import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderCard({item}) {
    return (
        <Card>
            <CardImg className="card-img" src={item.image} alt={item.name} />
            <CardBody className="card-stuff">
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    const content = props.homepages.map(homepage => {
        return (
            <div key={homepage.id} className="col-md-8 mt-4 center">
                <RenderCard item={homepage} />
                <br />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row center">
                {content}
            </div>
        </div>
    );
}


export default Home;