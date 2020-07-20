import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Homedecor from './HomedecorComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        homepages: state.homepages,
        homedecors: state.homedecors,
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
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));;
