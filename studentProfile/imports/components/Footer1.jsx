import React, { Component } from 'react';

export default class Footer extends Component{

  render(){
    return(
      <footer>
          <div className="centered clearfix">
              <div className="footer-logo">
                  <div className="social">
                      <a href="https://www.facebook.com/" className="facebook">
                          <i className="fa fa-facebook fa-3x"></i>
                      </a>
                      <a href="https://twitter.com/" className="twitter">
                          <i className="fa fa-twitter fa-3x"></i>
                      </a>
                      <a href="https://www.linkedin.com/" className="linkedin">
                          <i className="fa fa-linkedin fa-3x"></i>
                      </a>
                  </div>
              </div>

              <div className="footer-contact">
                  <h3>Contact</h3>
                  <p><a href="mailto:">np@np.com</a></p>
                  <p><a href="tel:">(+65) 1234 5678</a></p>
                  <p><a href="">123 Ngee Ann Polytechnic<br />Singapore 544119</a></p>
              </div>

              <div className="footer-navigation">
                  <div className="footer-links-holder">
                      <h3><a href="">Section 1</a></h3>
                      <ul className="footer-links">
                          <li><a href="">Page Title 1</a></li>
                          <li><a href="">Page Title 2</a></li>
                          <li><a href="">Page Title 3</a></li>
                          <li><a href="">Page Title 4</a></li>
                      </ul>
                  </div>

                  <div className="footer-links-holder">
                      <h3><a href="">Section 2</a></h3>
                      <ul className="footer-links">
                          <li><a href="">Page Title 1</a></li>
                          <li><a href="">Page Title 2</a></li>
                          <li><a href="">Page Title 3</a></li>
                          <li><a href="">Page Title 4</a></li>
                      </ul>
                  </div>

                  <div className="footer-links-holder">
                      <h3><a href="">Section 3</a></h3>
                      <ul className="footer-links">
                          <li><a href="">Page Title 1</a></li>
                          <li><a href="">Page Title 2</a></li>
                          <li><a href="">Page Title 3</a></li>
                          <li><a href="">Page Title 4</a></li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="bottom-bar">
              All Rights Reserved © 2017 | <a href="">Privacy Policy</a> | <a href="">Terms of Service</a>
          </div>
      </footer>
            );
  }
}
