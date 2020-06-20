import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div class="col-12 text-center">
                        <h6>Join today and receive personalized tips for shopping and selling on melomato</h6> 
                    </div>
                    <div class="col-8 input-group mt-2" >
                        <input class="form-control form-custom" type="email" placeholder="Email" aria-label="submit" />
                        <div class="input-group-append">
                            <a href="#" class="btn btn-custom" role="button" id="subscribeEmail">Subscribe</a>
                        </div>
                    </div>
                </div>
                <div className="row">    
                    <div className="col-md-4 text-center">
                        <h7>Sell</h7>
                        <ul className="list-unstyled">
                            <li><a href="#">Sell on melomato</a></li>
                            <li><a href="#">Teams</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center">
                        <h7>About</h7>
                        <ul className="list-unstyled">
                            <li><a href="#">melomato, Inc.</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Investors</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center">
                        <h7>Help</h7>
                        <ul className="list-unstyled">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Privacy Setting</a></li>
                            <li><a href="#">Contact Us</a></li>
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