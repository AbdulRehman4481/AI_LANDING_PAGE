import ContisLayout from "@/layouts/ContisLayout";
const blog_details = () => {
  return (
    <ContisLayout footer={3}>
      <section className="tf__blog_details pt_160 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-md-10 col-lg-10 m-auto">
              <div className="tf__common_heading">
                <h6>HOME / blog details</h6>
                <h2 className="tf__common_heading_color">
                  Ensuring your data security: Met.ai is now SOC 2 type ||
                  Compliant
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="tf__blog_details_left">
                <div className="tf__blog_details_left_img">
                  <img
                    src="images/blog-1.jpg"
                    alt="blog details"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="tf__blog_details_author d-flex flex-wrap">
                  <div className="tf__blog_details_author_img">
                    <img
                      src="images/post-1.jpg"
                      alt="author img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <p>Author</p>
                      <h6>Xolabiro</h6>
                    </li>
                    <li>
                      <p>Published</p>
                      <h6>August 5, 2023</h6>
                    </li>
                    <li>
                      <p>2 comments</p>
                      <h6>Join the conversation</h6>
                    </li>
                  </ul>
                </div>
                <div className="tf__blog_details_left_text">
                  <p>
                    Laboratories used for scientific research take many forms
                    because of the differing requirements of specialists in the
                    various fields of science and engineering. A physics
                    laboratory Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium, aperiam
                    ipsquae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim voluptatem
                    voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, aperiam
                    ipsquae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo
                  </p>
                  <h4>What Is A Business Technology Roadmap?</h4>
                  <p>
                    Unlike detailed blueprints that lay out all tasks,
                    deadlines, bug reports, and more along the way, technology
                    roadmaps are high-level visual summaries highlighting a
                    company’s vision or plans. In an Agile approach, a
                    technology roadmap feeds the sprint and grooming processes,
                    providing insight into how the product will travel from
                    start to finish. It makes it easier for development teams
                    to:
                  </p>
                  <div className="row">
                    <div className="col-xl-6 col-md-6">
                      <div className="tf__blog_details_left_text_img">
                        <img
                          src="images/blog_dtls-1.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="tf__blog_details_left_text_img">
                        <img
                          src="images/blog_dtls-2.jpg"
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <p>
                    Deadlines, bug reports, and more along the way, technology
                    roadmaps are high-level visual summaries highlighting a
                    company’s vision or plans. In an Agile approach, a
                    technology roadmap feeds the sprint and grooming processes,
                    providing insight into how the product will travel from
                    start to finish.
                  </p>
                </div>
                <div className="tf__blog_post_tag d-flex flex-wrap">
                  <h6>Post Tag:</h6>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a href="#">ChatGPT</a>
                    </li>
                    <li>
                      <a href="#">Perspectives</a>
                    </li>
                    <li>
                      <a href="#">Crypto</a>
                    </li>
                  </ul>
                </div>
                <div className="tf__blog_social_media d-flex flex-wrap justify-content-between">
                  <div className="tf__blog_social_link d-flex flex-wrap">
                    <h6>Share:</h6>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-product-hunt" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a href="#">
                        <i className="far fa-link" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <form className="tf__blog_form">
                  <h4>Leave a reply</h4>
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="tf__blog_form_input">
                        <label>Label (required)</label>
                        <input type="text" placeholder="Your name" />
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="tf__blog_form_input">
                        <label>Label (required)</label>
                        <input type="text" placeholder="Your company name" />
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="tf__blog_form_input">
                        <label>Label (required)</label>
                        <input type="text" placeholder="Phone number" />
                      </div>
                    </div>
                    <div className="col-xl-5">
                      <div className="tf__blog_form_input">
                        <label>Email (required)</label>
                        <input type="text" placeholder="Email address" />
                      </div>
                    </div>
                    <div className="col-xl-10">
                      <div className="tf__blog_form_input">
                        <label>Message (required)</label>
                        <textarea
                          placeholder="Type your message here"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="form-check tf__signup_check_area tf__blog_checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault1"
                  >
                    I’m okay with getting emails and having that activity
                    tracked to improve my experience.
                  </label>
                </div>
                <button className="tf__common_btn">
                  Sign up for free
                  <i
                    className="fa-regular fa-arrow-right-long"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="tf__blog_details_right tf__blog_details_responsib mb-4">
                <h5>Search</h5>
                <form>
                  <input type="text" placeholder="Search..." />
                  <button className="tf__search_icon">
                    <i className="far fa-search" />
                  </button>
                </form>
              </div>
              <div className="tf__blog_details_right mb-4">
                <h5>Categories</h5>
                <ul className="tf__blog_details_categories">
                  <li>
                    <a href="#" className="d-flex justify-content-between">
                      Ai Content<span>(03)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex justify-content-between">
                      Ai Technology<span>(03)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex justify-content-between">
                      Announcements <span>(03)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex justify-content-between">
                      Blog <span>(03)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex justify-content-between">
                      Business <span>(03)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex justify-content-between">
                      Developer <span>(03)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tf__blog_details_right mb-4">
                <h5>Popular Post</h5>
                <div className="tf__popular_post d-flex">
                  <div className="tf__popular_post_img">
                    <img
                      src="images/post-1.jpg"
                      alt="blog link"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__popular_post_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>· 9 min</li>
                      <li>. Admin</li>
                    </ul>
                    <a href="#">
                      Ensuring your data security: Met.ai is now SOC 2 type
                    </a>
                  </div>
                </div>
                <div className="tf__popular_post d-flex">
                  <div className="tf__popular_post_img">
                    <img
                      src="images/post-2.jpg"
                      alt="blog link"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__popular_post_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>· 9 min</li>
                      <li>. Admin</li>
                    </ul>
                    <a href="#">
                      Ensuring your data security: Met.ai is now SOC 2 type
                    </a>
                  </div>
                </div>
                <div className="tf__popular_post d-flex">
                  <div className="tf__popular_post_img">
                    <img
                      src="images/post-3.jpg"
                      alt="blog link"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__popular_post_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>· 9 min</li>
                      <li>. Admin</li>
                    </ul>
                    <a href="#">
                      Ensuring your data security: Met.ai is now SOC 2 type
                    </a>
                  </div>
                </div>
              </div>
              <div className="tf__blog_post_tag tf__blog_details_right">
                <h5>Tag Cloud</h5>
                <ul className="d-flex flex-wrap tf__blog_details_right_link">
                  <li>
                    <a href="#">ChatGPT</a>
                  </li>
                  <li>
                    <a href="#">Perspectives</a>
                  </li>
                  <li>
                    <a href="#">Crypto</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Developer</a>
                  </li>
                  <li>
                    <a href="#">Ai Content</a>
                  </li>
                  <li>
                    <a href="#">Perspectives</a>
                  </li>
                  <li>
                    <a href="#">Video</a>
                  </li>
                  <li>
                    <a href="#">Technology</a>
                  </li>
                  <li>
                    <a href="#">Crypto</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContisLayout>
  );
};
export default blog_details;
