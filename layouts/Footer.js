import Link from "next/link";
import { useState } from "react";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    default:
      return <Footer4 />;
  }
};
export default Footer;

const Footer1 = () => {
  const [email, setEmail] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email,
      });

      console.log(raw)

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      await fetch("https://consumer-tasks.vercel.app//api/community", requestOptions);
      console.log("Successfully sent contact");
      setEmail("")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="tf__footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__unlock">
              <div className="row">
                <div className="col-xl-2 col-md-12 col-lg-3 m-auto">
                  <div className="tf__unlock_img">
                    <img
                      src="images/subscraib_img.png"
                      alt="unlock"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <div className="col-xl-5 col-sm-8 col-md-8 col-lg-5 mx-auto">
                  <div className="tf__unlock_text">
                    <div className="tf__common_heading tf__unlock_heading">
                      <h6>UNLOCK THE POWER</h6>
                      <h2>Stop wasting time &amp; money on content</h2>
                    </div>
                    <ul className="d-flex">
                      <li>No credit card required</li>
                      <li>2,000 free words per month</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-4 col-md-4 col-lg-4 m-auto d-flex justify-content-end">
                  <div className="tf__unlock_btn">
                    <Link legacyBehavior href="/signup">
                      <a className="tf__common_btn">
                        Sign up for free
                        <i className="fa-regular fa-arrow-right-long" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__footer_left">
              <Link legacyBehavior href="/">
                <a className="tf__footer_logo">
                  <img
                    src="images/Logo_1.png"
                    alt="Contisai"
                    className="img-fluid w-100"
                  />
                </a>
              </Link>
              <div className="tf__footer_icon d-flex flex-wrap align-items-center">
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-telegram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-github" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link">
              <h5>USE CASE</h5>
              <ul>
                <li>
                  <a href="#">Emails</a>
                </li>
                <li>
                  <a href="#">Social media Ads</a>
                </li>
                <li>
                  <a href="#">Text editing</a>
                </li>
                <li>
                  <a href="#">Copy writing</a>
                </li>
                <li>
                  <a href="#">Creative writing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link tf__quick_link_sm">
              <h5>solutions</h5>
              <ul>
                <li>
                  <a href="#">Ecommerce</a>
                </li>
                <li>
                  <a href="#">Blogger/Vlogger</a>
                </li>
                <li>
                  <a href="#">Small business</a>
                </li>
                <li>
                  <a href="#">All solutions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link tf__quick_link_sm">
              <h5>RESOURCES</h5>
              <ul>
                <li>
                  <a href="#">Knowledge base</a>
                </li>
                <li>
                  <a href="#">What’s new</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Affiliate program</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-12 mx-auto">
            <div className="tf__address tf__quick_link_sm tf__address_md">
              <h5>JOIN COMMUNITY</h5>
              <div className="tf__footer_singup">
                <form>
                  <input
                    type="text"
                    required
                    name="email"
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <button
                    className="tf__footer_singup_link bg-transparent"
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="form-check tf__signup_check_area">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I’m okay with getting emails and having that activity tracked
                  to improve my experience.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__copyright d-flex flex-wrap justify-content-between mt_50 mb_30">
              <p>© 2023 FISTA. All rights reserved.</p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Footer2 = () => {
  const [email, setEmail] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email,
      });

      console.log(raw)

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      await fetch("https://consumer-tasks.vercel.app//api/community", requestOptions);
      console.log("Successfully sent contact");
      setEmail("")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="tf__footer mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__footer_left">
              <Link legacyBehavior href="/">
                <a className="tf__footer_logo">
                  <img
                    src="images/Logo_1.png"
                    alt="Contisai"
                    className="img-fluid w-100"
                  />
                </a>
              </Link>
              <div className="tf__footer_icon d-flex flex-wrap align-items-center">
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-telegram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-github" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link">
              <h5>USE CASE</h5>
              <ul>
                <li>
                  <a href="#">Emails</a>
                </li>
                <li>
                  <a href="#">Social media Ads</a>
                </li>
                <li>
                  <a href="#">Text editing</a>
                </li>
                <li>
                  <a href="#">Copy writing</a>
                </li>
                <li>
                  <a href="#">Creative writing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link tf__quick_link_sm">
              <h5>solutions</h5>
              <ul>
                <li>
                  <a href="#">Ecommerce</a>
                </li>
                <li>
                  <a href="#">Blogger/Vlogger</a>
                </li>
                <li>
                  <a href="#">Small business</a>
                </li>
                <li>
                  <a href="#">All solutions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link tf__quick_link_sm">
              <h5>RESOURCES</h5>
              <ul>
                <li>
                  <a href="#">Knowledge base</a>
                </li>
                <li>
                  <a href="#">What’s new</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Affiliate program</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-12 mx-auto">
            <div className="tf__address tf__quick_link_sm tf__address_md">
              <h5>JOIN COMMUNITY</h5>
              <div className="tf__footer_singup">
                <form>
                <input
                  type="text"
                  required
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <button
                  className="tf__footer_singup_link bg-transparent"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
                </form>
              </div>
              <div className="form-check tf__signup_check_area">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I’m okay with getting emails and having that activity tracked
                  to improve my experience.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__copyright d-flex flex-wrap justify-content-between mt_50 mb_30">
              <p>© 2023 FISTA. All rights reserved.</p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer3 = () => {
  const [email, setEmail] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email,
      });

      console.log(raw)

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      await fetch("https://consumer-tasks.vercel.app//api/community", requestOptions);
      console.log("Successfully sent contact");
      setEmail("")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="tf__footer tf__features_footer pt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__footer_left">
              <Link legacyBehavior href="/">
                <a className="tf__footer_logo">
                  <img
                    src="images/Logo_1.png"
                    alt="Contisai"
                    className="img-fluid w-100"
                  />
                </a>
              </Link>
              <div className="tf__footer_icon d-flex flex-wrap align-items-center">
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-telegram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-github" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link">
              <h5>USE CASE</h5>
              <ul>
                <li>
                  <a href="#">Emails</a>
                </li>
                <li>
                  <a href="#">Social media Ads</a>
                </li>
                <li>
                  <a href="#">Text editing</a>
                </li>
                <li>
                  <a href="#">Copy writing</a>
                </li>
                <li>
                  <a href="#">Creative writing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link tf__quick_link_sm">
              <h5>solutions</h5>
              <ul>
                <li>
                  <a href="#">Ecommerce</a>
                </li>
                <li>
                  <a href="#">Blogger/Vlogger</a>
                </li>
                <li>
                  <a href="#">Small business</a>
                </li>
                <li>
                  <a href="#">All solutions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link tf__quick_link_sm">
              <h5>RESOURCES</h5>
              <ul>
                <li>
                  <a href="#">Knowledge base</a>
                </li>
                <li>
                  <a href="#">What’s new</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Affiliate program</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-12 mx-auto">
            <div className="tf__address tf__quick_link_sm tf__address_md">
              <h5>JOIN COMMUNITY</h5>
              <div className="tf__footer_singup">
                <form>
                <input
                  type="text"
                  required
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <button
                  className="tf__footer_singup_link bg-transparent"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
                </form>
              </div>
              <div className="form-check tf__signup_check_area">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I’m okay with getting emails and having that activity tracked
                  to improve my experience.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__copyright d-flex flex-wrap justify-content-between mt_50 mb_30">
              <p>© 2023 FISTA. All rights reserved.</p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Footer4 = () => {
  const [email, setEmail] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email,
      });

      console.log(raw)

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      await fetch("https://consumer-tasks.vercel.app//api/community", requestOptions);
      console.log("Successfully sent contact");
      setEmail("")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="tf__footer tf__features_footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__unlock">
              <div className="row">
                <div className="col-xl-2 col-md-12 col-lg-3 m-auto">
                  <div className="tf__unlock_img">
                    <img
                      src="images/subscraib_img.png"
                      alt="unlock"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <div className="col-xl-5 col-sm-8 col-md-8 col-lg-5 mx-auto">
                  <div className="tf__unlock_text">
                    <div className="tf__common_heading tf__unlock_heading">
                      <h6>UNLOCK THE POWER</h6>
                      <h2>Stop wasting time &amp; money on content</h2>
                    </div>
                    <ul className="d-flex">
                      <li>No credit card required</li>
                      <li>2,000 free words per month</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-4 col-md-4 col-lg-4 m-auto d-flex justify-content-end">
                  <div className="tf__unlock_btn">
                    <Link legacyBehavior href="/signup">
                      <a className="tf__common_btn">
                        Sign up for free
                        <i className="fa-regular fa-arrow-right-long" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__footer_left">
              <Link legacyBehavior href="/">
                <a className="tf__footer_logo">
                  <img
                    src="images/Logo_1.png"
                    alt="Contisai"
                    className="img-fluid w-100"
                  />
                </a>
              </Link>
              <div className="tf__footer_icon d-flex flex-wrap align-items-center">
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-telegram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-github" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link">
              <h5>USE CASE</h5>
              <ul>
                <li>
                  <a href="#">Emails</a>
                </li>
                <li>
                  <a href="#">Social media Ads</a>
                </li>
                <li>
                  <a href="#">Text editing</a>
                </li>
                <li>
                  <a href="#">Copy writing</a>
                </li>
                <li>
                  <a href="#">Creative writing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link tf__quick_link_sm">
              <h5>solutions</h5>
              <ul>
                <li>
                  <a href="#">Ecommerce</a>
                </li>
                <li>
                  <a href="#">Blogger/Vlogger</a>
                </li>
                <li>
                  <a href="#">Small business</a>
                </li>
                <li>
                  <a href="#">All solutions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-sm-6 col-md-3">
            <div className="tf__quick_link tf__quick_link_sm">
              <h5>RESOURCES</h5>
              <ul>
                <li>
                  <a href="#">Knowledge base</a>
                </li>
                <li>
                  <a href="#">What’s new</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Affiliate program</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-12 mx-auto">
            <div className="tf__address tf__quick_link_sm tf__address_md">
              <h5>JOIN COMMUNITY</h5>
              <div className="tf__footer_singup">
                <input
                  type="text"
                  required
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <button
                  className="tf__footer_singup_link bg-transparent"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
              <div className="form-check tf__signup_check_area">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I’m okay with getting emails and having that activity tracked
                  to improve my experience.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__copyright d-flex flex-wrap justify-content-between mt_50 mb_30">
              <p>© 2023 FISTA. All rights reserved.</p>
              <ul className="d-flex flex-wrap">
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
