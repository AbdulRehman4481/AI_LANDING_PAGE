import Counter from "@/components/Counter";
import Faq, { Faq2 } from "@/components/Faq";
import Testimonial from "@/components/Testimonial";
import ContisLayout from "@/layouts/ContisLayout";
import Link from "next/link";
const Index = () => {
  return (
    <ContisLayout footer={1}>
      {/*============================
  BANNER START
    ==============================*/}
      <section className="tf__banner pt_160">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 m-auto">
              <div className="tf__banner_text">
                <h1>Empowering Minds with AI </h1>
                <p>
                  AI-driven solutions to enhance communication, task management,
                  and daily engagement for individuals with developmental
                  challenges.
                </p>
                <Link legacyBehavior href="/signup">
                  <a className="tf__common_btn">
                    Sign up for free{" "}
                    <i className="fa-regular fa-arrow-right-long" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div >
                <img
                  src="images/Untitled design (2).png"
                  alt="banner img"
                  id="image1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  BANNER END
    ==============================*/}
      {/*============================
  SERVICE START
    ==============================*/}
      <section className="tf__service">
        <div className="container">
          <div className="tf__brand pt_80 pb_65">
            <div className="row">
              <div className="col-xl-12">
                <div className="tf__brand_heading">
                  <h6>
                    Trusted <span>120 companies</span> across the world
                  </h6>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-xl-2 col-sm-6 col-md-4">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-1.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-sm-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-2.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-sm-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-3.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-sm-6">
                <a href="#" className="tf__brand_img">
                  <img
                    src="images/Brands-4.png"
                    alt="brand name"
                    className="img-fluid w-100"
                  />
                </a>
              </div>
              <div className="col-xl-2 col-sm-6">
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
        <div className="tf__main_service pt_100 ml_70 mr_70 pb_75">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-md-8 m-auto">
                <div className="tf__common_heading">
                  <h6>Smart Solutions for Better Care</h6>
                  <h2>
                    Discover services that simplify caregiving and enhance your
                    loved ones' daily routines.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-9">
                <div className="row">
                  <div className="col-xl-4 col-md-6 mb-4">
                    <div className="tf__single_service">
                      <span>
                        <i className="ca-icon-edit-pen" />
                      </span>
                      <Link legacyBehavior href="/use-cases-details">
                        <a className="tf__single_service_link">
                          Dynamic Conversations
                        </a>
                      </Link>
                      <p>
                        Personalized AI chats tailored to user interests and
                        preferences.
                      </p>
                      <ul>
                        <li>Learns user behavior.</li>
                        <li>Enhances social skills.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 mb-4">
                    <div className="tf__single_service">
                      <span>
                        <i className="ca-icon-bag" />
                      </span>
                      <Link legacyBehavior href="/use-cases-details">
                        <a className="tf__single_service_link">
                          Task Reminderss
                        </a>
                      </Link>
                      <p>
                        Automated task prompts with soft alarms and visual cues.
                      </p>
                      <ul>
                        <li>Daily routine support.</li>
                        <li>Visual task aids. </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 mb-4">
                    <div className="tf__single_service">
                      <span>
                        <i className="ca-icon-document" />
                      </span>
                      <Link legacyBehavior href="/use-cases-details">
                        <a className="tf__single_service_link">
                        Admin Dashboard
                        </a>
                      </Link>
                      <p>
                      Real-time insights and management for caregivers and admins.
                      </p>
                      <ul>
                        <li>Task tracking.</li>
                        <li>Web/mobile access.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 mb-4">
                    <div className="tf__single_service">
                      <span>
                        <i className="ca-icon-bookmark" />
                      </span>
                      <Link legacyBehavior href="/use-cases-details">
                        <a className="tf__single_service_link">
                        Inactivity Alerts
                        </a>
                      </Link>
                      <p>
                      Safety monitoring with alerts for prolonged inactivity.
                      </p>
                      <ul>
                        <li>Prompts engagement.</li>
                        <li>Caregiver notifications.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 mb-4">
                    <div className="tf__single_service">
                      <span>
                        <i className="ca-icon-ticket-star" />
                      </span>
                      <Link legacyBehavior href="/use-cases-details">
                        <a className="tf__single_service_link">
                        Wearable Integration
                        </a>
                      </Link>
                      <p>
                      Sync with smartwatches for seamless notifications and tracking.
                      </p>
                      <ul>
                        <li>Tracks activity.</li>
                        <li>Timely reminders.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 mb-4">
                    <div className="tf__single_service">
                      <span>
                        <i className="ca-icon-graph" />
                      </span>
                      <Link legacyBehavior href="/use-cases-details">
                        <a className="tf__single_service_link">
                        Custom Profiles
                        </a>
                      </Link>
                      <p>
                      Tailored profiles based on individual needs and motivators.
                      </p>
                      <ul>
                        <li>Personalized preferences.</li>
                        <li>Supports unique challenges.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="tf__single_service_right">
                  <div className="tf__single_service_right_img">
                    <img
                      src="images/service_img.png"
                      alt="service"
                      className="img-fluid w-100"
                    />
                  </div>
                  <a href="#" className="tf__single_service_right_heading">
                  Start Your Journey Today, Sign Up Free!
                  </a>
                  <p>Join now and unlock personalized AI-driven assistance.</p>
                  <Link legacyBehavior href="/signup">
                    <a className="tf__common_btn mt_30">
                      Sign up for free
                      <i className="fa-regular fa-arrow-right-long" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  SERVICE END
    ==============================*/}
      {/*============================
  WORK PROCESS START
    ==============================*/}
      <section className="tf__work_process pt_100 pb_50">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
              <div className="tf__common_heading">
                <h6>WORKING PROCESS</h6>
                <h2 className="tf__common_heading_color">
                  How It Works in 3 Simple Steps
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
                How It Works{" "}
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
                  <h4>Professional &amp; Teams Choose FISTA</h4>
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
  CONTENT CREATOR START
    ==============================*/}
      <section className="tf__content_creator pt_100 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-8 m-auto">
              <div className="tf__common_heading">
                
                <h2 className="tf__common_heading_color">
                  Power of an AI content
                </h2>
              </div>
            </div>
          </div>
          <div className="tf__content_creator_top">
            <div className="row">
              <div className="col-xl-4 col-lg-5 m-auto">
                <div className="tf__content_creator_top_img">
                  <img
                    src="images/creator_img-1.jpg"
                    alt="creator"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 mx-auto">
                <div className="tf__content_creator_top_text">
                  <h4>The following ideas are inspired by your brand.</h4>
                  <p>
                    Got writer's block? Get ideas for stories, blog posts,
                    website copy, research topics and more.
                  </p>
                  <ul>
                    <li>Save time rapid AI-driven generation</li>
                    <li>No outdates continuous code document</li>
                  </ul>
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
          <div className="tf__content_creator_bottom">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="tf__single_content_creator_bottom">
                  <div className="tf__single_content_creator_bottom_img">
                    <img
                      src="images/creator_img-2.jpg"
                      alt="creator"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_content_creator_bottom_text">
                    <h4>
                      Write higher converting assistance post for all latest
                      user
                    </h4>
                    <p>
                      Got writer's block? Get ideas for stories, blog posts,
                      website copy, research topics and more.
                    </p>
                    <Link legacyBehavior href="/signup">
                      <a className="tf__common_btn tf__common_btn2">
                        Sign up for free
                        <i className="fa-regular fa-arrow-right-long" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tf__single_content_creator_bottom">
                  <div className="tf__single_content_creator_bottom_img">
                    <img
                      src="images/creator_img-3.jpg"
                      alt="creator"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_content_creator_bottom_text">
                    <h4>
                      Generate blog posts, stories &amp; even book with FISTA
                    </h4>
                    <p>
                      Got writer's block? Get ideas for stories, blog posts,
                      website copy, research topics and more.
                    </p>
                    <Link legacyBehavior href="/signup">
                      <a className="tf__common_btn tf__common_btn2">
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
      </section>
      {/*============================
  CONTENT CREATOR END
    ==============================*/}
      {/*============================
  TESTIMONIAL START
    ==============================*/}
      <section className="tf__testimonial pt_100 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-8 m-auto">
              <div className="tf__common_heading">
                <h6>TESTIMONIAL</h6>
                <h2>What our clients say</h2>
              </div>
            </div>
          </div>
          <div className="tf__single_testimonial">
            <div className="testi_slider">
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
      {/*============================
  TESTIMONIAL END
    ==============================*/}
      {/*============================
  PRICING START
    ==============================*/}
      <section className="tf__pricing pt_100 pb_75">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-8 m-auto">
              <div className="tf__common_heading">
                <h6>pricing</h6>
                <h2 className="tf__common_heading_color">
                  Fast copywriting by Ai
                </h2>
              </div>
            </div>
          </div>
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
      {/*============================
  PRICING END
    ==============================*/}
      {/*============================
  FAQ START
    ==============================*/}
      <section className="tf__faq pt_100 pb_240">
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
export default Index;
