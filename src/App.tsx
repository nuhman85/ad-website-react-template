import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="spinner-wrapper">
        <div className="centercenter">
          <div className="spinner-grow2 logocolor" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>

      <p className="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please{" "}
        <a href="https://browsehappy.com/">upgrade your browser</a> to improve
        your experience and security.
      </p>

      <header className="background-header">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="icon-top text-center text-sm-center text-md-left text-lg-left text-xl-left">
                      <div className="icons">
                        <a href="#">
                          {" "}
                          <i className="fa fa-facebook"></i>{" "}
                        </a>
                      </div>
                      <div className="icons">
                        <a href="#">
                          {" "}
                          <i className="fa fa-twitter"></i>{" "}
                        </a>
                      </div>
                      <div className="icons">
                        <a href="#">
                          {" "}
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </div>
                      <div className="icons">
                        <a href="#">
                          {" "}
                          <i className=" fa fa-pinterest"></i>
                        </a>
                      </div>
                      <div className="icons">
                        <a href="#">
                          {" "}
                          <i className=" fa fa-instagram"></i>
                        </a>
                      </div>
                      <div className="icons">
                        <a href="#">
                          {" "}
                          <i className=" fa fa-whatsapp"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="text-center text-sm-center text-md-right text-lg-right text-xl-right">
                      <div className="toplocation text-white">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span className="locaitonfont">Location</span>

                        <select id="openonarrow">
                          <option>United States of America</option>
                          <option>United Arab Emirates</option>
                          <option>United Kingdom</option>
                          <option>Australia</option>
                          <option>Japan</option>
                          <option>India</option>
                          <option>Pakistan</option>
                          <option>Oman</option>
                        </select>

                        <span className="arrowdonwing">
                          <i className="fa fa-angle-down"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="navigation">
            <nav className="navbar navbar-expand-lg   justify-content-between nav-color zeropadd">
              <div className="navbar-header ">
                <a className="navbar-brand zeropadd" href="index.html">
                  <img
                    src="img/logo_200x200.png"
                    alt="logo"
                    className="max-width-60px"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="category.html">
                      Advance Search
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-link dropdown-toggle"
                    >
                      Categories <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu border-0 shadow">
                      <li>
                        <a href="category.html" className="dropdown-item">
                          Jobs{" "}
                        </a>
                      </li>
                      <li>
                        <a href="category.html" className="dropdown-item">
                          Properties
                        </a>
                      </li>

                      <li className="dropdown-submenu">
                        <a
                          href="category.html"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="dropdown-item dropdown-toggle"
                        >
                          Phones
                        </a>
                        <ul className="dropdown-menu border-0 shadow">
                          <li>
                            <a
                              tabIndex={-1}
                              href="category.html"
                              className="dropdown-item"
                            >
                              Apple
                            </a>
                          </li>
                          <li>
                            <a href="category.html" className="dropdown-item">
                              Samsung
                            </a>
                          </li>
                          <li>
                            <a href="category.html" className="dropdown-item">
                              LG
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a
                          href="category.html"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="dropdown-item dropdown-toggle"
                        >
                          Cars
                        </a>
                        <ul className="dropdown-menu border-0 shadow">
                          <li>
                            <a
                              tabIndex={-1}
                              href="category.html"
                              className="dropdown-item"
                            >
                              Toyota
                            </a>
                          </li>
                          <li>
                            <a href="category.html" className="dropdown-item">
                              Suzuki
                            </a>
                          </li>
                          <li>
                            <a href="category.html" className="dropdown-item">
                              Honda
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="category.html" className="dropdown-item">
                          Rent
                        </a>
                      </li>
                      <li>
                        <a href="category.html" className="dropdown-item">
                          Serviecs
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      className="nav-link dropdown-toggle"
                    >
                      Pages <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu border-0 shadow">
                      <li>
                        <a href="aboutus.html" className="dropdown-item">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="blog.html" className="dropdown-item">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="contactus.html" className="dropdown-item">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="faq.html" className="dropdown-item">
                          Faq
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="contactus.html">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="loginRegister.html">
                      <i className="fa fa-user" aria-hidden="true"></i>Login /
                      Register
                    </a>
                  </li>
                  <li className="nav-item  bordering">
                    <a className="nav-link" href="postad.html">
                      Post Free Ad
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="hero-homepage">
          <div className="container wrapping-content">
            <div className="row">
              <div className="col-12 text-center">
                <div className="tagline">
                  <h1>Find Local Ads Near You</h1>
                  <h2>Over 1 million+ Ads posted by our users.</h2>
                </div>
                <div className="search_form">
                  <form className="row">
                    <div className="form-group col-lg-4 col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="What are you looking for?"
                      />
                    </div>
                    <div className="form-group col-lg-4 col-sm-12">
                      <select className="form-control">
                        <option>All Categories</option>
                        <option>Cars</option>
                        <option>Properties</option>
                        <option>Jobs</option>
                        <option>Animals</option>
                        <option>Phone</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-4 col-sm-12">
                      <button type="submit" className="custom-button">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <div className="popular_searches">
                  Popular Searches:
                  <a href="#">business</a>,<a href="#">Cars</a>,
                  <a href="#">money</a>,<a href="#">food</a>,<a href="#">Job</a>
                  ,<a href="#">New car</a>,<a href="#">dog</a>,
                  <a href="#">Iphone</a>,<a href="#">Laptop</a>,
                  <a href="#">lawyer</a>,<a href="#">computer</a>,
                  <a href="#">Furniture</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="category-container">
          <div className="container">
            <h2 className="text-center styleh2 karma">
              <a className="greens" href="#">
                Categories
              </a>
            </h2>
            <div className="cat-icons">
              <a href="#">
                <div className="mainicon icon maida-laptop">
                  <span className="text-icon">Laptop</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-briefcase">
                  <span className="text-icon">Job</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-t-shirt">
                  <span className="text-icon">Garments</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-car-1">
                  <span className="text-icon">Cars</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-calculator">
                  <span className="text-icon">Auditors</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-zoo">
                  <span className="text-icon">Animals</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-town-hall">
                  <span className="text-icon">Finance</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-art-gallery">
                  <span className="text-icon">Art</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-fast-food">
                  <span className="text-icon">Food</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-bar">
                  <span className="text-icon">Club</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-delivery-transport-2">
                  <span className="text-icon">Logistics</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-display">
                  <span className="text-icon">Electronics</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-cup">
                  <span className="text-icon">Cafe</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-case-medic">
                  <span className="text-icon">Doctors</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon">
                  <i className="fa fa-film" aria-hidden="true"></i>
                  <span className="text-icon">Entertainment</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-soccer">
                  <span className="text-icon">Games</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon maida-phone">
                  <span className="text-icon">Phones</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon icon" data-icon="F">
                  <span className="text-icon">Support</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon">
                  <i className="fa fa-book" aria-hidden="true"></i>
                  <span className="text-icon">Books</span>
                </div>
              </a>
              <a href="#">
                <div className="mainicon">
                  <i className="fa fa-child" aria-hidden="true"></i>
                  <span className="text-icon">Child Care</span>
                </div>
              </a>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

        <div className="post-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="styleh2 karma text-center">Latest Ads</h2>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="#">
                      <img src="img/sport-3365503_640.jpg" alt="iphone" />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">Iphone 64GB 6s Plus</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> Phones
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i> London
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>1600
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="product.html">
                      <img src="img/books-1617327_640.jpg" alt="books" />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">Books for rent</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> Books
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i> Berlin
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>5000
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="product.html">
                      <img src="img/football-3471371_640.jpg" alt="Footbal" />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">Football New fifa</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> Games
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i> Lahore
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>10.0 M
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="product.html">
                      <img src="img/bicycle-1209682_640.jpg" alt="bicycle" />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">Bicyle</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> vehicle
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i> New York
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>500.0 k
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="#">
                      <img
                        src="img/vegetables-1584999_640.jpg"
                        alt="vegetable"
                      />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">Fresh Food And ....</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> Food
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i> Norway
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>150.0 k
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="#">
                      <img src="img/bmw-1313343_640.jpg" alt="Car" />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">New BMW For...</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> Car
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i>Australia
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>10.0 m
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="#">
                      <img src="img/job-2860035_640.jpg" alt="Footbal" />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">we are hiring</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> Jobs
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i> Pakistan
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>...
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="#">
                      <img src="img/home-office-336374_640.jpg" alt="laptop" />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">Apple Mac 16gb..</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> Laptop
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i> Auckland
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>500.0 k
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="#">
                      <img src="img/monitor-1276949_640.jpg" alt="Montior" />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">32" Lcd Tv</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> LCD
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i> Paris
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>2800
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="#">
                      <img src="img/pug-801826_640.jpg" alt="dog" />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">Dog for adoption</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> Animal
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i> Japan
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>Free
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="#">
                      <img src="img/rottweiler-1785760_640.jpg" alt="pupies" />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">2 Pupies Inocent</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> Dogs
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i> Turkey
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>5.0 M
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 margin_10px">
                <div className="post-box">
                  <div className="thumbnail-holder">
                    <a href="#">
                      <img src="img/medical-563427_640.jpg" alt="doc" />
                    </a>
                  </div>
                  <div className="post-box-content">
                    <h3>
                      <a href="product.html">Child Care Center</a>
                    </h3>

                    <div className="post-category">
                      <a href="#">
                        {" "}
                        <i className="fa fa-list-alt"></i> Child Care
                      </a>
                    </div>
                    <div className="post-location">
                      <a href="#">
                        {" "}
                        <i className="fa fa-location-arrow"></i> Atlanta
                      </a>
                    </div>
                    <div className="post-meta">
                      <i className="fa fa-dollar"></i>50.0 k
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 margin_10px">
                <div className="text-center">
                  <a href="#" className="custom-button">
                    Show All
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <h2>Newsletter</h2>
              </div>
              <div className="col-lg-4 col-md-12">
                <p>Sign up to receive email updates on new recipes.</p>
              </div>
              <div className="col-lg-5 col-md-12">
                <form>
                  <div className="col-sm-12">
                    <div className="row zeromargin zeromargin_form_group">
                      <div className="form-group col-lg-8 col-sm-12">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your email address here..."
                        />
                      </div>
                      <div className="form-group col-lg-4 col-sm-12">
                        <button
                          type="submit"
                          className="whitehover custom-button"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="background-header footer_padding">
          <div className="container">
            <div className="navigation_footer">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="about-us-info">
                    <p>
                      <img
                        src="img/logo_200x200.png"
                        className="max-width-100px"
                        alt="logo"
                      />
                    </p>
                    <p>
                      <i className="fa fa-phone"></i> 123-456-987
                    </p>
                    <p>
                      <i className="fa fa-map-marker"></i> 123 Street Infront of
                      Macdonald, <br />
                      Kingsman, United States
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <h3>Popular Categories</h3>
                  <ul>
                    <li>
                      <a href="category.html">Properties</a>
                    </li>
                    <li>
                      <a href="category.html">Jobs</a>
                    </li>
                    <li>
                      <a href="category.html">Phones</a>
                    </li>
                    <li>
                      <a href="category.html">Cars</a>
                    </li>
                    <li>
                      <a href="category.html">Rent</a>
                    </li>
                    <li>
                      <a href="category.html">Electronics</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <h3>Location</h3>
                  <ul>
                    <li>
                      <a href="#">London</a>
                    </li>
                    <li>
                      <a href="#">Barcelona</a>
                    </li>
                    <li>
                      <a href="#">New York</a>
                    </li>
                    <li>
                      <a href="#">France</a>
                    </li>
                    <li>
                      <a href="#">Lahore</a>
                    </li>
                    <li>
                      <a href="#">Mumbai</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <h3>Important Links</h3>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="aboutus.html">About</a>
                    </li>
                    <li>
                      <a href="contactus.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="faq.html">Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 zeropadd">
                      <p>
                        2019 Maida Themes. copyright @ 2016 - 2019 Powered By{" "}
                        <i className="fa fa-heart"></i>
                        <a href="#" className="greens">
                          Maida
                        </a>
                      </p>
                    </div>
                    <div className="col-md-6 zeropaddon768">
                      <ul className="pages-links zeropadd">
                        <li>
                          <a href="#">Terms &amp; Condition</a>
                        </li>
                        <li>
                          <a href="dashboard.html">Dashboard</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy </a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
