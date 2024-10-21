import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import Testimonial from "@/components/Testimonial";
import ContisLayout from "@/layouts/ContisLayout";
import Link from "next/link";
const pricing = () => {
  return (
    <ContisLayout footer={2}>
      <PageBanner pageName={"pricing"} pageTitle={"Fast copywriting by Ai"} />
      <section className="tf__pricing pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_pricing mb-4">
                <h5>Free Plan</h5>
                <p>Perfect for testing</p>
                <Link legacyBehavior href="/signup">
                  <a className="tf__common_btn tf__pricing_btn">
                    Sign up for free{" "}
                    <i className="fa-regular fa-arrow-right-long" />
                  </a>
                </Link>
                <p>
                  <span>Free</span>-7 days trial
                </p>
                <p>No Credit Card Required</p>
                <ul>
                  <li>10 credits per month</li>
                  <li>100 bonus credits for the first month</li>
                  <li>20+ languages</li>
                  <li>80+ copywriting tools</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_pricing mb-4">
                <h5>Pro</h5>
                <p>Perfect for testing</p>
                <Link legacyBehavior href="/signup">
                  <a className="tf__common_btn tf__pricing_btn">
                    Sign up for free{" "}
                    <i className="fa-regular fa-arrow-right-long" />
                  </a>
                </Link>
                <p>
                  <span>$19</span>-7 days trial
                </p>
                <p>No Credit Card Required</p>
                <ul>
                  <li>10 credits per month</li>
                  <li>100 bonus credits for the first month</li>
                  <li>20+ languages</li>
                  <li>80+ copywriting tools</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_pricing mb-4">
                <h5>Team</h5>
                <p>Perfect for testing</p>
                <Link legacyBehavior href="/signup">
                  <a className="tf__common_btn tf__pricing_btn">
                    Sign up for free{" "}
                    <i className="fa-regular fa-arrow-right-long" />
                  </a>
                </Link>
                <p>
                  <span>$29</span>-7 days trial
                </p>
                <p>No Credit Card Required</p>
                <ul>
                  <li>10 credits per month</li>
                  <li>100 bonus credits for the first month</li>
                  <li>20+ languages</li>
                  <li>80+ copywriting tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf__faq pt_100 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 m-auto">
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
      <section className="tf__testimonial tf__pricing_testimonial pb_100">
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
          <div className="tf__single_testimonial">
            <div className="row testi_slider">
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
    </ContisLayout>
  );
};
export default pricing;
