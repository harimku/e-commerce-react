import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Homedecor from './HomedecorComponent';
import Automotive from './AutomotiveComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        homepages: state.homepages,
        homedecors: state.homedecors,
        automotives: state.automotives,
    };
};

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home
                    homepages={this.props.homepages}
                />
            );
        };

        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/homedecor' render={() => <Homedecor products={this.props.homedecors} />} />
                        <Route exact path='/automotive' render={() => <Automotive products={this.props.automotives} />} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));;
