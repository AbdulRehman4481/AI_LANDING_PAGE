import Counter from "@/components/Counter";
import { Faq2 } from "@/components/Faq";
import Testimonial from "@/components/Testimonial";
import ContisLayout from "@/layouts/ContisLayout";
import Link from "next/link";
const UseCasesDetails = () => {
  return (
    <ContisLayout>
      {/*============================
  ABOUT START
    ==============================*/}
      <section className="tf__about pt_245 pb_90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tf__common_heading tf__common_heading2">
                <h6>Get Your Free Today!</h6>
                <h2 className="tf__common_heading_color">
                  Free Ai writing tools for generating blog posts.
                </h2>
                <p>
                  AI writing assistant that helps you create high-quality
                  content, in just a few seconds, at a fraction of the cost!
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
              <div className="tf__about_img tf__free_iteam_img mx-auto">
                <img
                  src="images/free_iteam_img.png"
                  alt="about img"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
          <div className="tf__brand pt_65">
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
      <section className="tf__free_benefits pt_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 m-auto">
              <div className="tf__common_heading">
                <h6>LEARN ABOUT BENEFIT</h6>
                <h2 className="tf__common_heading_color">
                  Contis.ai help social media managers
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="fab fa-facebook-f" />
                </span>
                <h5>Facebook post</h5>
                <p>
                  You do not need to spend hours to write good content — let our
                  advance AI Writer to get it done.
                </p>
                <a href="#" className="tf__benefit_link">
                  Try for Free
                  <i className="fa-regular fa-arrow-right-long" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="fab fa-youtube" />
                </span>
                <h5>YouTube descriptions</h5>
                <p>
                  Write and saved once, use everywhere. Also rewrite content for
                  different porpose with minimal effort.
                </p>
                <a href="#" className="tf__benefit_link">
                  Try for Free
                  <i className="fa-regular fa-arrow-right-long" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="fab fa-pinterest-p" />
                </span>
                <h5>Pinterest descriptions</h5>
                <p>
                  You do not need to spend hours to write good content — let our
                  advance AI Writer to get it done.
                </p>
                <a href="#" className="tf__benefit_link">
                  Try for Free
                  <i className="fa-regular fa-arrow-right-long" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="fab fa-instagram" />
                </span>
                <h5>Instagram captions</h5>
                <p>
                  Write and saved once, use everywhere. Also rewrite content for
                  different porpose with minimal effort.
                </p>
                <a href="#" className="tf__benefit_link">
                  Try for Free
                  <i className="fa-regular fa-arrow-right-long" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="fab fa-linkedin-in" />
                </span>
                <h5>LinkedIn posts</h5>
                <p>
                  You do not need to spend hours to write good content — let our
                  advance AI Writer to get it done.
                </p>
                <a href="#" className="tf__benefit_link">
                  Try for Free
                  <i className="fa-regular fa-arrow-right-long" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="fab fa-tiktok" />
                </span>
                <h5>TikTok scripts</h5>
                <p>
                  Write and saved once, use everywhere. Also rewrite content for
                  different porpose with minimal effort.
                </p>
                <a href="#" className="tf__benefit_link">
                  Try for Free
                  <i className="fa-regular fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  BENEFITS END
    ==============================*/}
      {/*============================
  WORK PROCESS START
    ==============================*/}
      <section className="tf__work_process pt_70 pb_50">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="tf__common_heading">
                <h6>WORKING PROCESS</h6>
                <h2 className="tf__common_heading_color">
                  How Ai writer works
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-6 m-auto">
              <div className="tf__work_process_img">
                <img
                  src="images/work_img-1.png"
                  alt="process"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 mx-auto">
              <div className="tf__process_accordion">
                <Faq2 />
              </div>
              <a
                href="https://www.youtube.com/watch?v=B-ytMSuwbf8"
                className="tf__common_btn play_btn"
              >
                Sign up for free
                <i className="fa-sharp fa-regular fa-circle-play" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-sm-12 m-auto">
              <div className="tf__counter mt_75">
                <div className="tf__counter_text">
                  <h2>
                    <Counter end={8000000} />+
                  </h2>
                  <h4>Professional &amp; Teams Choose Met.Ai</h4>
                </div>
                <div className="tf__counter_img">
                  <img
                    src="images/counter_img.png"
                    alt="counter"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  WORK PROCESS END
    ==============================*/}
      {/*============================
  TESTIMONIAL START
    ==============================*/}
      <section className="tf__testimonial tf__about_testimonial pb_240">
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
    </ContisLayout>
  );
};
export default UseCasesDetails;
