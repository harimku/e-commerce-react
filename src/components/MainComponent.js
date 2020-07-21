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
import { addItem, fetchHomepages, fetchHomedecors, fetchAutomotives, fetchElectronics, fetchFashions, fetchOutdoors, fetchPets } from '../redux/ActionCreators';

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
    fetchHomepages: () => (fetchHomepages()),
    fetchHomedecors: () => (fetchHomedecors()),
    fetchAutomotives: () => (fetchAutomotives()),
    fetchElectronics: () => (fetchElectronics()),
    fetchFashions: () => (fetchFashions()),
    fetchOutdoors: () => (fetchOutdoors()),
    fetchPets: () => (fetchPets()),
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchHomepages();
        this.props.fetchHomedecors();
        this.props.fetchAutomotives();
        this.props.fetchElectronics();
        this.props.fetchFashions();
        this.props.fetchOutdoors();
        this.props.fetchPets();
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
                                                                        decorsLoading={this.props.homedecors.isLoading}
                                                                        decorsErrMess={this.props.homedecors.errMess}  
                                                                        addItem={this.props.addItem} 
                                                                    />} />
                        <Route exact path='/automotive' render={() => <Automotive 
                                                                            products={this.props.automotives} 
                                                                            automotivesLoading={this.props.automotives.isLoading}
                                                                            automotivesErrMess={this.props.automotives.errMess}  
                                                                        />} 
                                                                        />
                        <Route exact path='/electronics' render={() => <Electronics 
                                                                            products={this.props.electronics} 
                                                                            electronicsLoading={this.props.electronics.isLoading}
                                                                            electronicsErrMess={this.props.electronics.errMess}
                                                                        />} />
                        <Route exact path='/fashion' render={() => <Fashion 
                                                                        products={this.props.fashions} 
                                                                        fashionsLoading={this.props.fashions.isLoading}
                                                                        fashionsErrMess={this.props.fashions.errMess}
                                                                    />} />
                        <Route exact path='/outdoors' render={() => <Outdoor 
                                                                        products={this.props.outdoors}
                                                                        outdoorsLoading={this.props.outdoors.isLoading}
                                                                        outdoorsErrMess={this.props.outdoors.errMess}
                                                                    />} />
                        <Route exact path='/pet' render={() => <Pet 
                                                                    products={this.props.pets} 
                                                                    petsLoading={this.props.pets.isLoading}
                                                                    petsErrMess={this.props.pets.errMess}
                                                                />} />
                        <Route exact path='/cart' render={() => <Cart products={this.props.cartitems} />} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));;
