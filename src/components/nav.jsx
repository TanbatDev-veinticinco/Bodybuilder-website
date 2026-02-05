import { useEffect, useState } from "react";
import navlogo from "../assets/logo-white.png";
import navlogo2 from "../assets/logo.png";

const Nav = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Show preloader for 5 seconds, then hide it
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader - shows for 5 seconds */}
      {showPreloader && (
        <div className="preloader">
          <div className="preloader-inner">
            <span className="loader"></span>
          </div>
        </div>
      )}

      {/* Popup Search Box */}
      <div className="popup-search-box">
        <button className="searchClose">
          <i className="fal fa-times"></i>
        </button>
        <form action="#">
          <input type="text" placeholder="Search Here.." />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>

      {/* Side Menu */}
      <div className="sidemenu-wrapper">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times"></i>
          </button>
          <div className="widget footer-widget">
            <div className="widget-about">
              <div className="footer-logo">
                <a href="index.html">
                  <img
                    src={navlogo}
                    alt="RJ Bodybuilder Training"
                  />
                </a>
              </div>
              <p className="about-text">
                A gym, also known as a fitness center or health club, is a
                facility dedicated to physical fitness and exercise gyms and
                typically offer a range
              </p>
              <div className="social-btn style2">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://pinterest.com/">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="https://instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="widget widget_nav_menu footer-widget">
            <h3 className="widget_title">Quick Links</h3>
            <ul className="menu">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Meet The Teams</a>
              </li>
              <li>
                <a href="#">Our Projects</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu-wrapper">
        <div className="mobile-menu-area text-center">
          <button className="menu-toggle">
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="index.html">
              <img
                src={navlogo}
                style={{ height: "66px" }}
                alt="RJ Bodybuilder Training"
              />
            </a>
          </div>
          <div className="mobile-menu">
            <ul>
              <li className="menu-item-has-children">
                <a href="#">Home</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Team Page</a>
                  </li>
                  <li>
                    <a href="#">Gallery Page</a>
                  </li>
                  <li>
                    <a href="#">Project Page</a>
                  </li>
                  <li>
                    <a href="#">Shop Page</a>
                  </li>
                  <li>
                    <a href="#">Pricing Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Project</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Projects</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Service</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Service Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header Area */}
      <header className="nav-header header-layout1">
        <div className="header-top d-lg-block d-none">
          <div className="container-fluid">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="far fa-envelope"></i>
                      <a href="mailto:info@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="far fa-clock"></i>Mon - Sat: 8.00 am-7.00 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links">
                  <ul>
                    <li>
                      <div className="social-links">
                        <span className="me-3">Visit our social pages</span>
                        <a href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.pinterest.com/">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-start justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="index.html">
                      <img
                        src={navlogo2}
                        alt="logo"
                        style={{ height: "66px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Service</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">Service</a>
                          </li>
                          <li>
                            <a href="#">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">Team Page</a>
                          </li>
                          <li>
                            <a href="#">Gallery Page</a>
                          </li>
                          <li>
                            <a href="#">Project Page</a>
                          </li>
                          <li>
                            <a href="#">Shop Page</a>
                          </li>
                          <li>
                            <a href="#">Pricing Page</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">Blog</a>
                          </li>
                          <li>
                            <a href="#">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button type="button" className="menu-toggle icon-btn">
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
                <div className="col-auto ms-auto d-lg-block d-none">
                  <div className="navbar-right-desc">
                    <i className="fas fa-phone-volume"></i>
                    <a href="tel:(313) 452-3269">(313) 452-3269</a>
                  </div>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <a href="#" className="btn d-xl-block d-none">
                      Get a Quote
                    </a>
                    <button type="button" className="btn btn-border sideMenuToggler">
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;