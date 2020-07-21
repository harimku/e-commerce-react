import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>
    }
    return (
        <Card>
            <CardImg className="card-img" src={baseUrl + item.image} alt={item.name} />
            <CardBody className="card-stuff">
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    if (props.homepages.isLoading) {
        return (
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.homepages.errMess) {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col">
                        <h4>{props.homepages.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } 

    const content = props.homepages.homepages.map(homepage => {
        return (
            <div key={homepage.id} className="col-md-8 mt-4 center">
                <RenderCard 
                    item={homepage} 
                    isLoading={props.homepagesLoading}
                    errMess={props.homepagesErrMess}
                />
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