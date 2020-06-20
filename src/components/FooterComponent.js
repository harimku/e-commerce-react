import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function Footer(props) {
    return (
        <footer className="site-footer mt-5">
            <div className="container">
                <div className="row">             
                    <div class="col-12 text-center">
                        <h6>Join today and receive personalized tips for shopping and selling on melomato</h6> 
                    </div>
                </div>
                <div className="row center"> 
                    <div class="col-6 input-group mt-2 align-self-center" >
                        <input class="form-control form-custom" type="email" placeholder="Email" aria-label="submit" />
                        <div class="input-group-append">
                            <Button outline className="btn-custom" type="submit" value="submit">Subscribe</Button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">    
                    <div className="col-md-4 text-center">
                        <h7>Sell</h7>
                        <ul className="list-unstyled">
                            <li><Link to='/'>Sell on melomato</Link></li>
                            <li><Link to='/'>Teams</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center">
                        <h7>About</h7>
                        <ul className="list-unstyled">
                            <li><Link to='/'>melomato, Inc.</Link></li>
                            <li><Link to='/'>Policies</Link></li>
                            <li><Link to='/'>Investors</Link></li>
                            <li><Link to='/'>Press</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center">
                        <h7>Help</h7>
                        <ul className="list-unstyled">
                            <li><Link to='/'>Help Center</Link></li>
                            <li><Link to='/'>Privacy Setting</Link></li>
                            <li><Link to='/'>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row">        
                    <div className="col-12 text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                </div>
                <div class="row justify-content-end">
                    <p><small>2020 melomato, Inc.  </small></p>
                </div>
            </div>
        </footer>
    )
}






export default Footer;