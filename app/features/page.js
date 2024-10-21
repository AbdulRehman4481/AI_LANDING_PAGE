import Counter from "@/components/Counter";
import { Faq2 } from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import ContisLayout from "@/layouts/ContisLayout";
const features = () => {
  return (
    <ContisLayout>
      <PageBanner
        pageName={"features"}
        pageTitle={"Generate AI-powered content in 1 click."}
        bg={true}
      />
      <div className="tf__main_features pt_75">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="ca-icon-message-fast" />
                </span>
                <a href="#">Write content faster</a>
                <p>
                  You do not need to spend hours to write good content — let our
                  advance AI Writer to get it done.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="ca-icon-hero" />
                </span>
                <a href="#">Tools and templates</a>
                <p>
                  Write and saved once, use everywhere. Also rewrite content for
                  different porpose with minimal effort.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="ca-icon-mingcute_brain" />
                </span>
                <a href="#">Brainstorm faster</a>
                <p>
                  You do not need to spend hours to write good content — let our
                  advance AI Writer to get it done.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="ca-icon-chat-paste-go" />
                </span>
                <a href="#">Copy and publish anywhere</a>
                <p>
                  Write and saved once, use everywhere. Also rewrite content for
                  different porpose with minimal effort.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="ca-icon-edit-pen" />
                </span>
                <a href="#">Repurpose content easily</a>
                <p>
                  You do not need to spend hours to write good content — let our
                  advance AI Writer to get it done.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="tf__single_service tf__single_benifit mb-4">
                <span>
                  <i className="ca-icon-language" />
                </span>
                <a href="#">Write in any language</a>
                <p>
                  Write and saved once, use everywhere. Also rewrite content for
                  different porpose with minimal effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*============================
  FEATURES END
    ==============================*/}
      {/*============================
  WORK PROCESS START
    ==============================*/}
      <section className="tf__work_process pt_70 pb_240">
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
    </ContisLayout>
  );
};
export default features;
