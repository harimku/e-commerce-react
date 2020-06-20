import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { HOMEPAGES } from '../shared/homepages';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homepages: HOMEPAGES
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
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main
