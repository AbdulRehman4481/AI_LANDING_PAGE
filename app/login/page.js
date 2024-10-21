import PageBanner from "@/components/PageBanner";
import ContisLayout from "@/layouts/ContisLayout";
import Link from "next/link";
const login = () => {
  return (
    <ContisLayout footer={2}>
      <PageBanner pageName={"WELCOME BACK!"} pageTitle={"Login to countinue"} />

      <section className="auth_from pb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6 col-xl-5">
              <div className="auth_card">
                <form className="tf__blog_form">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <label>Email or Username (required)</label>
                        <input
                          type="text"
                          placeholder="Enter Email or Username"
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <label>Password (required)</label>
                        <input type="password" placeholder="Enter Password" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="row">
                        <div className="d-flex flex-wrap justify-content-between">
                          <div className="form-group">
                            <div className="form-check tf__blog_checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault2"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <a href="#" className="small">
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <button className="tf__common_btn w-100">
                          Sign in with Contis.ai
                          <i
                            className="fa-regular fa-arrow-right-long"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <p className="or text-center py-3 text-black text-uppercase fw-bold text-dark">
                        OR
                      </p>
                    </div>
                    <div className="col-xl-12">
                      <div className="tf__blog_form_input tf__contact_form_input">
                        <button className="tf__common_btn tf__common_btn2 w-100">
                          Sign in with Google{" "}
                          <i className="fa-brands fa-google" />
                        </button>
                      </div>
                      <div className="text-center pt-3">
                        <span className="me-1">Don't have an account?</span>
                        <Link legacyBehavior href="/signup">
                          <a>Sign up</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContisLayout>
  );
};
export default login;
