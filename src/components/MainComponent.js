import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Homedecor from './HomedecorComponent';
import { HOMEPAGES } from '../shared/homepages';
import { HOMEDECORS } from '../shared/homedecors';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homepages: HOMEPAGES,
            homedecors: HOMEDECORS
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                    homepages={this.state.homepages}
                />
            );
        }
        
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/homedecor' render={() => <Homedecor products={this.state.homedecors} />} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;
