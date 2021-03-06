import * as React from 'react';

import NavLink, { navlinks } from '../Header/Nav/Nav';
import { Link } from 'react-scroll';
import Newsletter from './Newsletter/Newsletter';
import './footer.scss';

export default ({ showScroller }) => (
  <footer className="s-footer footer" id="contact">
    <div className="row section-header align-center">
      <div className="col-full">
        <h1 className="display-1">Let's Stay In Touch.</h1>
        <p className="lead">Subscribe for updates, special offers, and other amazing stuff.</p>
      </div>
    </div>
    <div className="row footer__top">
      <div className="col-full footer__subscribe end">
        <Newsletter />
      </div>
    </div>
    <div className="row footer__bottom">
      <div className="col-five md-seven tab-full right end">
        <div className="row">
          <div className="footer__site-links col-five mob-full">
            <h4>Site links.</h4>
            <ul className="footer__site-links">
              {navlinks.map((link, i) => (
                <NavLink {...link} key={i} />
              ))}
            </ul>
          </div>
          <div className="footer__contact col-seven mob-full">
            <h4>Contact Us.</h4>
            <p>
              Phone: (+1) 800 ORCAS <br />
              Fax: (+1) 800 ORCAS
            </p>
            <p>
              Location <br />
              5540 W. 5th St. #142 Oxnard, CA 93035
            </p>
            <p>
              Need help or have a question? Contact us at: <br />
              <a href="mailto:#0" className="footer__mail-link">
                kittypatrol@roadrunner.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer__about col-five tab-full left">
        <h4>About ORCAS.</h4>
        <p className="footer-text">
          Oxnard Recreational Center for Adult and Seniors (ORCAS) is a newly established nonprofit organization based
          in Oxnard, California. ORCAS was formed out of concerns for the current state of the senior centers in the
          city. ORCAS seek to address the aging individuals within the community who are seeking access to a newer and
          safer community senior center.
        </p>
        <ul className="footer__social">
          <li>
            <a href="#0">
              <i className="fab fa-facebook-f" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fab fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fab fa-instagram" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-full ss-copyright">
        <span>&copy; Copyright ORCAS 2019</span>
      </div>
    </div>
    <div id="message" className="network-status" />
    <div test-id="footer-scroll" className={showScroller ? 'go-top link-is-visible' : 'go-top'}>
      <Link
        to="home"
        className="smoothscroll"
        title="Back to Top"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      />
    </div>
  </footer>
);
