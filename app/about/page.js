import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonial";
import ContisLayout from "@/layouts/ContisLayout";
import Link from "next/link";
const about = () => {
  return (
    <ContisLayout>
      <section className="tf__about pt_200 pb_95">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tf__common_heading tf__common_heading2">
                <h6>home / ABOUT</h6>
                <h2 className="tf__common_heading_color">
                  Our mission is to make people happy and productive
                </h2>
                <p>
                  Give customers a structutal experience they'll and come back
                  enjoy better experience. Join #1 app to track your data.
                </p>
                <Link legacyBehavior href="/signup">
                  <a className="tf__common_btn">
                    Sign up for free{" "}
                    <i className="fa-regular fa-arrow-right-long" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tf__about_img">
                <img
                  src="images/about_img.jpg"
                  alt="about img"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="tf__brand pt_75">
            <div className="row">
              <div className="col-xl-12">
                <div className="tf__brand_heading tf__about_brand_heading">
                  <h6>
                    Trusted <span>120 companies</span> across the world
                  </h6>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-xl-2 col-md-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-1.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-md-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-2.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-md-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-3.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-md-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-4.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-md-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-5.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  ABOUT END
    ==============================*/}
      {/*============================
  BENEFITS START
    ==============================*/}
      <section className="tf__benefits">
        <div className="tf___main_benefits pt_100 pb_100">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 m-auto">
                <div className="tf__common_heading tf__common_heading2 tf__benefits_heading">
                  <h6>BENEFITS</h6>
                  <h2 className="tf__common_heading_color">
                    Met.ai content writing benefits
                  </h2>
                  <p>
                    Give customers a structutal experience they'll and come back
                    enjoy better experience. Join #1 app to track your data.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
                    className="tf__common_btn play_btn"
                  >
                    Sign up for free
                    <i
                      className="fa-sharp fa-regular fa-circle-play"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-6 m-auto tf__single_service_responsib">
                <div className="row">
                  <div className="col-xl-6 col-md-6">
                    <div className="tf__single_service tf__single_benifit mb-4">
                      <span>
                        <i className="ca-icon-slide-search" />
                      </span>
                      <Link legacyBehavior href="/use-cases-details">
                        <a>Website copy &amp; SEO</a>
                      </Link>
                      <p>
                        Write unique &amp; plagiarism- free content for blogs
                      </p>
                    </div>
                    <div className="tf__single_service tf__single_benifit">
                      <span>
                        <i className="ca-icon-edit-pen" aria-hidden="true" />
                      </span>
                      <Link legacyBehavior href="/use-cases-details">
                        <a>Article generation</a>
                      </Link>
                      <p>
                        Write unique &amp; plagiarism- free content for blogs
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="tf__single_service tf__single_benifit mt-4 mb-4">
                      <span>
                        <i className="ca-icon-bag" />
                      </span>
                      <Link legacyBehavior href="/use-cases-details">
                        <a>Ecommerce copy</a>
                      </Link>
                      <p>
                        Write unique &amp; plagiarism- free content for blogs
                      </p>
                    </div>
                    <div className="tf__single_service tf__single_benifit">
                      <span>
                        <i className="ca-icon-document" />
                      </span>
                      <Link legacyBehavior href="/use-cases-details">
                        <a>Sales copy</a>
                      </Link>
                      <p>
                        Write unique &amp; plagiarism- free content for blogs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  BENEFITS END
    ==============================*/}
      {/*============================
  TEAM START
    ==============================*/}
      <section className="tf__team pb_95">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 mx-auto">
              <div className="tf__team_img">
                <img
                  src="images/team_img.jpg"
                  alt="team img"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mx-auto">
              <div className="tf__common_heading tf__common_heading2">
                <h6>team member</h6>
                <h2 className="tf__common_heading_color">
                  A great story always starts with a great team Work
                </h2>
                <p>
                  We are a small, but growing team. Our expertise includes
                  growth marketing, design, software development, and product
                  management.
                </p>
                <a
                  href="#"
                  className="tf__common_btn tf__common_btn2 tf__team_btn"
                >
                  All members
                  <i
                    className="fa-regular fa-arrow-right-long"
                    aria-hidden="true"
                  />
                </a>
                <a href="#" className="tf__common_btn">
                  Join us
                  <i
                    className="fa-regular fa-arrow-right-long"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  TEAM END
    ==============================*/}
      {/*============================
  TESTIMONIAL START
    ==============================*/}
      <section className="tf__testimonial tf__about_testimonial">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="tf__common_heading">
                <h6>TESTIMONIAL</h6>
                <h2 className="tf__common_heading_color">
                  What our clients say
                </h2>
              </div>
            </div>
          </div>
          <div className="tf__single_testimonial tf__single_about_testimonial">
            <div className="row testi_slider">
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
      {/*============================
  TESTIMONIAL END
    ==============================*/}
      {/*============================
  FAQ START
    ==============================*/}
      <section className="tf__faq tf__about_faq pt_100 pb_240">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-8 m-auto">
              <div className="tf__common_heading tf__faq_common_heading">
                <h6>faq</h6>
                <h2 className="tf__common_heading_color">
                  Frequently asked question
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-md-8 col-lg-8 mx-auto">
              <Faq />
            </div>
          </div>
        </div>
      </section>
      {/*============================
  FAQ END
    ==============================*/}
    </ContisLayout>
  );
};
export default about;
