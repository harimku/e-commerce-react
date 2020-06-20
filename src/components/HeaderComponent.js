import React, { Component }  from 'react';
import { Jumbotron } from 'reactstrap';
import ReactSearchBox from 'react-search-box';


class Header extends Component {

    render() {
        return (
            <React.Fragment> 
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 col-sm-2 align-self-center">
                                <a href="/"><img src="/assets/images/logo.png" height="100" width="100" alt="Melomato marketplace logo" /></a> 
                            </div>
                            <div className="col col-sm-7 flexsearch align-self-center pl-0">
                                <ReactSearchBox
                                    searchAsYouType={true}
                                    placeholder="Search.."
                                />
                            </div>
                        </div>
                    </div>
                </Jumbotron>


                    

            </React.Fragment>
        );
    }
}

export default Header;