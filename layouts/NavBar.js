"use client";
import { contisUtilit } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { Accordion } from "react-bootstrap";

const NavBar = () => {
  useEffect(() => {
    contisUtilit.menuFix();
  }, []);

  return (
    <Accordion>
      <nav className="navbar navbar-expand-lg tf__main_menu">
        <div className="container-fluid">
          <Link legacyBehavior href="/">
            <a className="navbar-brand">
              <img
                src="images/Logo_1.png"
                alt="logo"
                className="img-fluid w-100"
              />
            </a>
          </Link>
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggler"
            eventKey="collapseOne"
          >
            <i className="far fa-stream menu_icon_bar" />
            <i className="far fa-times close_icon_close" />
          </Accordion.Toggle>
          <Accordion.Collapse
            eventKey="collapseOne"
            className="navbar-collapse"
            id="navbarSupportedContent"
          >
            <Fragment>
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link legacyBehavior href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link legacyBehavior href="features">
                    <a className="nav-link">Features</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link legacyBehavior href="pricing">
                    <a className="nav-link">pricing</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link legacyBehavior href="use_case">
                    <a className="nav-link">use case</a>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pages <i className="far fa-plus" />
                  </a>
                  <ul className="tf__dropdown">
                    <li>
                      <Link legacyBehavior href="pricing">
                        <a>pricing</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="about">
                        <a>about</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog_details">
                        <a>Blog details</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="use_case">
                        <a>use case</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="use-cases-details">
                        <a>Case details</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="login">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="signup">
                        <a>Signup</a>
                      </Link>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blogs <i className="far fa-plus" />
                  </a>
                  <ul className="tf__dropdown">
                    <li>
                      <Link legacyBehavior href="blog">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="blog_details">
                        <a>Blog details</a>
                      </Link>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <Link legacyBehavior href="contact">
                    <a className="nav-link"> contact</a>
                  </Link>
                </li>
              </ul>
              <ul className="tf__menu_btn d-flex flex-wrap align-items-center">
                <li>
                  <Link legacyBehavior href="login">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="signup">
                    <a className="tf__menu_2nd_btn"> Sign up</a>
                  </Link>
                </li>
              </ul>
            </Fragment>
          </Accordion.Collapse>
        </div>
      </nav>
    </Accordion>
  );
};
export default NavBar;
