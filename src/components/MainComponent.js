import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Homedecor from './HomedecorComponent';
import Automotive from './AutomotiveComponent';
import Electronics from './ElectronicsComponent';
import Fashion from './FashionComponent';
import Outdoor from './OutdoorComponent';
import Pet from './PetComponent';
import Cart from './CartComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addItem, fetchHomepages } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        homepages: state.homepages,
        homedecors: state.homedecors,
        automotives: state.automotives,
        electronics: state.electronics,
        fashions: state.fashions,
        outdoors: state.outdoors,
        pets: state.pets,
        cartitems: state.cartitems
    };
};

const mapDispatchToProps = {
    addItem: (product) => (addItem(product)),
    fetchHomepages: () => (fetchHomepages())
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchHomepages();
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    homepages={this.props.homepages}
                    homepagesLoading={this.props.homepages.isLoading}
                    homepagesErrMess={this.props.homepages.errMess}
                />
            );
        };

        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/homedecor' render={() => <Homedecor 
                                                                        products={this.props.homedecors}  
                                                                        addItem={this.props.addItem} 
                                                                    />} />
                        <Route exact path='/automotive' render={() => <Automotive products={this.props.automotives} />} />
                        <Route exact path='/electronics' render={() => <Electronics products={this.props.electronics} />} />
                        <Route exact path='/fashion' render={() => <Fashion products={this.props.fashions} />} />
                        <Route exact path='/outdoors' render={() => <Outdoor products={this.props.outdoors} />} />
                        <Route exact path='/pet' render={() => <Pet products={this.props.pets} />} />
                        <Route exact path='/cart' render={() => <Cart products={this.props.cartitems} />} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));;
