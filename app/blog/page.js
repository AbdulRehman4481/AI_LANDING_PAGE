import PageBanner from "@/components/PageBanner";
import ContisLayout from "@/layouts/ContisLayout";
import Link from "next/link";
const blog = () => {
  return (
    <ContisLayout>
      <PageBanner pageName={"blog"} pageTitle={"Latest blog post"} bg={true} />
      <section className="tf__blog mb_200">
        <div className="tf__blog_iteam pt_60">
          <div className="container">
            <div className="row d-flex flex-wrap justify-content-between mb-4">
              <div className="col-xl-2 col-lg-2">
                <form className="tf__blog_search">
                  <input type="text" placeholder="Search..." />
                  <button className="tf__search_icon">
                    <i className="far fa-search" />
                  </button>
                </form>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="tf__blog_categories d-flex flex-wrap justify-content-end">
                  <p>Showing 1-25 of 56 results</p>
                  <ul className="d-flex flex-wrap tf__blog_selectbox">
                    <li>
                      <select className="select_js">
                        <option value>Categories</option>
                        <option value>Categories 1</option>
                        <option value>Categories 2</option>
                        <option value>Categories 3</option>
                      </select>
                    </li>
                    <li>
                      <select className="select_js">
                        <option value>Author</option>
                        <option value>Author 1</option>
                        <option value>Author 2</option>
                        <option value>Author 3</option>
                      </select>
                    </li>
                    <li>
                      <select className="select_js">
                        <option value>Tags</option>
                        <option value>Tags 1</option>
                        <option value>Tags 2</option>
                        <option value>Tags 3</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="tf__single_blog">
                  <div className="tf__single_blog_img">
                    <img
                      src="images/blog-1.jpg"
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_blog_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>9 min</li>
                      <li>Admin</li>
                    </ul>
                    <Link legacyBehavior href="/blog_details">
                      <a className="tf__single_blog_heading">
                        Ensuring your data security: FISTA is now SOC 2 type ||
                        Compliant
                      </a>
                    </Link>
                    <p>
                      <a href="#" className="tf__single_blog_link">
                        Case Study
                      </a>
                      <a href="#" className="tf__single_blog_link">
                        Perspectives
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="tf__single_blog">
                  <div className="tf__single_blog_img">
                    <img
                      src="images/blog-2.jpg"
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_blog_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>9 min</li>
                      <li>Admin</li>
                    </ul>
                    <Link legacyBehavior href="/blog_details">
                      <a className="tf__single_blog_heading">
                        Ensuring your data security: FISTA is now SOC 2 type ||
                        Compliant
                      </a>
                    </Link>
                    <p>
                      <a href="#" className="tf__single_blog_link">
                        Case Study
                      </a>
                      <a href="#" className="tf__single_blog_link">
                        Perspectives
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="tf__single_blog">
                  <div className="tf__single_blog_img">
                    <img
                      src="images/blog-3.jpg"
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_blog_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>9 min</li>
                      <li>Admin</li>
                    </ul>
                    <Link legacyBehavior href="/blog_details">
                      <a className="tf__single_blog_heading">
                        Ensuring your data security: FISTA is now SOC 2 type ||
                        Compliant
                      </a>
                    </Link>
                    <p>
                      <a href="#" className="tf__single_blog_link">
                        Case Study
                      </a>
                      <a href="#" className="tf__single_blog_link">
                        Perspectives
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="tf__single_blog">
                  <div className="tf__single_blog_img">
                    <img
                      src="images/blog-4.jpg"
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_blog_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>9 min</li>
                      <li>Admin</li>
                    </ul>
                    <Link legacyBehavior href="/blog_details">
                      <a className="tf__single_blog_heading">
                        Ensuring your data security: FISTA is now SOC 2 type ||
                        Compliant
                      </a>
                    </Link>
                    <p>
                      <a href="#" className="tf__single_blog_link">
                        Case Study
                      </a>
                      <a href="#" className="tf__single_blog_link">
                        Perspectives
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="tf__single_blog">
                  <div className="tf__single_blog_img">
                    <img
                      src="images/blog-1.jpg"
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_blog_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>9 min</li>
                      <li>Admin</li>
                    </ul>
                    <Link legacyBehavior href="/blog_details">
                      <a className="tf__single_blog_heading">
                        Ensuring your data security: FISTA is now SOC 2 type ||
                        Compliant
                      </a>
                    </Link>
                    <p>
                      <a href="#" className="tf__single_blog_link">
                        Case Study
                      </a>
                      <a href="#" className="tf__single_blog_link">
                        Perspectives
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="tf__single_blog mb-5">
                  <div className="tf__single_blog_img">
                    <img
                      src="images/blog-2.jpg"
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_blog_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>9 min</li>
                      <li>Admin</li>
                    </ul>
                    <Link legacyBehavior href="/blog_details">
                      <a className="tf__single_blog_heading">
                        Ensuring your data security: FISTA is now SOC 2 type ||
                        Compliant
                      </a>
                    </Link>
                    <p>
                      <a href="#" className="tf__single_blog_link">
                        Case Study
                      </a>
                      <a href="#" className="tf__single_blog_link">
                        Perspectives
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="tf__single_blog">
                  <div className="tf__single_blog_img">
                    <img
                      src="images/blog-7.jpg"
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_blog_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>9 min</li>
                      <li>Admin</li>
                    </ul>
                    <Link legacyBehavior href="/blog_details">
                      <a className="tf__single_blog_heading">
                        Ensuring your data security: FISTA is now SOC 2 type ||
                        Compliant
                      </a>
                    </Link>
                    <p>
                      <a href="#" className="tf__single_blog_link">
                        Case Study
                      </a>
                      <a href="#" className="tf__single_blog_link">
                        Perspectives
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="tf__single_blog">
                  <div className="tf__single_blog_img">
                    <img
                      src="images/blog-8.jpg"
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_blog_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>9 min</li>
                      <li>Admin</li>
                    </ul>
                    <Link legacyBehavior href="/blog_details">
                      <a className="tf__single_blog_heading">
                        Ensuring your data security: FISTA is now SOC 2 type ||
                        Compliant
                      </a>
                    </Link>
                    <p>
                      <a href="#" className="tf__single_blog_link">
                        Case Study
                      </a>
                      <a href="#" className="tf__single_blog_link">
                        Perspectives
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="tf__single_blog">
                  <div className="tf__single_blog_img">
                    <img
                      src="images/blog-9.jpg"
                      alt="blog img"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_blog_text">
                    <ul className="d-flex flex-wrap">
                      <li>Sep 26, 2021</li>
                      <li>9 min</li>
                      <li>Admin</li>
                    </ul>
                    <Link legacyBehavior href="/blog_details">
                      <a className="tf__single_blog_heading">
                        Ensuring your data security: FISTA is now SOC 2 type ||
                        Compliant
                      </a>
                    </Link>
                    <p>
                      <a href="#" className="tf__single_blog_link">
                        Case Study
                      </a>
                      <a href="#" className="tf__single_blog_link">
                        Perspectives
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContisLayout>
  );
};
export default blog;
