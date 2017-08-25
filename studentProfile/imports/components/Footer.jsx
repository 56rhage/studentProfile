import React, { Component } from 'react';

export default class Footer extends Component{

  render(){
    return(
        <footer className="footer-distributed">

			<div className="footer-left">

				<h3><img src="/img/ICT Logo.jpg" /></h3>

				<p className="footer-links">
					<a href="www.np.edu.sg">www.np.edu.sg</a>
				</p>

				<p className="footer-company-name">All Rights Reserved &copy; 2015</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p>535 Clementi Road<br />Singapore 599489</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>(+65) 1234 5678</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:np@np.com">np@np.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About Ngee Ann Polytechnic</span>
                    Inaugurated in 1963 as Ngee Ann College with only 116 students, Ngee Ann Polytechnic (NP) has grown from its humble beginnings to establish itself as one of Singapore's leading institutions of higher learning. Today, the polytechnic has a full-time enrolment of more than 14,800 students.
                    <br/>
                    There are 48 full-time courses and nine academic schools.
                    <br/>
                    Ngee Ann also supports Continuing Education and Training (CET) through its CET Academy which offers a wide range of part-time programmes.
                </p>

				<div class="footer-icons">

					<a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
					<a href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
					<a href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a>

				</div>

			</div>

        </footer>
            );
  }
}
