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
import ItemInfo from './ItemInfoComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postItem, removeItem, fetchHomepages, fetchHomedecors, fetchAutomotives, fetchElectronics, fetchFashions, fetchOutdoors, fetchPets, fetchCartitems } from '../redux/ActionCreators';

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
    postItem: (productId, name, image, price) => (postItem(productId, name, image, price)),
    removeItem: (name) => (removeItem(name)),
    fetchHomepages: () => (fetchHomepages()),
    fetchHomedecors: () => (fetchHomedecors()),
    fetchAutomotives: () => (fetchAutomotives()),
    fetchElectronics: () => (fetchElectronics()),
    fetchFashions: () => (fetchFashions()),
    fetchOutdoors: () => (fetchOutdoors()),
    fetchPets: () => (fetchPets()),
    fetchCartitems: () => (fetchCartitems()),
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
        this.props.fetchCartitems();
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

        const ItemId = ({match}) => {
            return (
                <ItemInfo
                    product={this.props.homedecors.homedecors.filter(homedecor=> homedecor.id === +match.params.ID)[0]}
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
                                                                        postItem={this.props.postItem}
                                                                    />} />
                        <Route path='/homedecor/:ID' component={ItemId} />
                        <Route exact path='/automotive' render={() => <Automotive 
                                                                            products={this.props.automotives} 
                                                                            automotivesLoading={this.props.automotives.isLoading}
                                                                            automotivesErrMess={this.props.automotives.errMess}
                                                                            postItem={this.props.postItem}  
                                                                        />} 
                                                                        />
                        <Route exact path='/electronics' render={() => <Electronics 
                                                                            products={this.props.electronics} 
                                                                            electronicsLoading={this.props.electronics.isLoading}
                                                                            electronicsErrMess={this.props.electronics.errMess}
                                                                            postItem={this.props.postItem}
                                                                        />} />
                        <Route exact path='/fashion' render={() => <Fashion 
                                                                        products={this.props.fashions} 
                                                                        fashionsLoading={this.props.fashions.isLoading}
                                                                        fashionsErrMess={this.props.fashions.errMess}
                                                                        postItem={this.props.postItem}
                                                                    />} />
                        <Route exact path='/outdoors' render={() => <Outdoor 
                                                                        products={this.props.outdoors}
                                                                        outdoorsLoading={this.props.outdoors.isLoading}
                                                                        outdoorsErrMess={this.props.outdoors.errMess}
                                                                        postItem={this.props.postItem}
                                                                    />} />
                        <Route exact path='/pet' render={() => <Pet 
                                                                    products={this.props.pets} 
                                                                    petsLoading={this.props.pets.isLoading}
                                                                    petsErrMess={this.props.pets.errMess}
                                                                    postItem={this.props.postItem}
                                                                />} />
                        <Route exact path='/cart' render={() => <Cart 
                                                                    products={this.props.cartitems} 
                                                                    cartitemsLoading={this.props.cartitems.isLoading}
                                                                    cartitemsErrMess={this.props.cartitems.errMess}
                                                                    removeItem={this.props.removeItem}
                                                                />} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));;
