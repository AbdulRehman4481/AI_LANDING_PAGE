import PageBanner from "@/components/PageBanner";
import ContisLayout from "@/layouts/ContisLayout";
import Link from "next/link";
const use_case = () => {
  return (
    <ContisLayout>
      <PageBanner
        pageName={"use case"}
        pageTitle={"Write high-converting content in a minutes"}
        bg={true}
      />
      <section className="tf__features">
        <div className="tf__main_features pt_75">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-edit-pen" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a>Daily Routine</a>
                  </Link>
                  <p>Help users maintain consistent daily activities and tasks.</p>
                  <ul>
                    <li>Encourages independence.</li>
                    <li>Reduces forgetfulness.</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-bag" aria-hidden="true" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a>Medication Reminders</a>
                  </Link>
                  <p>Automate reminders for medication schedules and health tasks.</p>
                  <ul>
                    <li>Improves health adherence.</li>
                    <li>Reduces missed doses.</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-document" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a>Social Engagement</a>
                  </Link>
                  <p>Facilitate conversations to enhance social skills and interaction.                  </p>
                  <ul>
                    <li>Builds communication confidence.</li>
                    <li>Encourages relationship building.</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-document" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a>Learning Support</a>
                  </Link>
                  <p>Provide prompts and tasks for educational engagement.</p>
                  <ul>
                    <li>Enhances focus.</li>
                    <li>Supports academic growth.</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-bookmark" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a>Activity Tracking</a>
                  </Link>
                  <p>Monitor physical activities and encourage movement throughout the day.</p>
                  <ul>
                    <li>Promotes fitness.</li>
                    <li>Tracks progress.</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-ticket-star" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a>Behavior Monitoring</a>
                  </Link>
                  <p>Observe and record behavioral patterns for better management.</p>
                  <ul>
                    <li>Identifies triggers.</li>
                    <li>Facilitates intervention.</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-graph" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a> Customizable Preferences</a>
                  </Link>
                  <p>Allow users to set personal preferences for tasks and reminders.</p>
                  <ul>
                    <li>Increases relevance.</li>
                    <li>Tailors engagement.</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-graph" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a>Emergency Alerts</a>
                  </Link>
                  <p>Notify caregivers of any unusual inactivity or emergencies.</p>
                  <ul>
                    <li>Ensures safety.</li>
                    <li>Provides timely response.</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-edit-pen" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a>Interactive Learning</a>
                  </Link>
                  <p>Engage users with fun, interactive educational content.</p>
                  <ul>
                    <li>Boosts motivation.</li>
                    <li>Enhances retention.</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-bag" aria-hidden="true" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a>Goal Setting</a>
                  </Link>
                  <p>Assist users in setting and tracking personal goals.</p>
                  <ul>
                    <li>Encourages achievement.</li>
                    <li>Fosters self-esteem.</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-document" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a>Family Connection</a>
                  </Link>
                  <p>Promote communication between users and family members.</p>
                  <ul>
                    <li>Strengthens bonds</li>
                    <li>Enhances support</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="tf__single_service tf__single_benifit mb-4">
                  <span>
                    <i className="ca-icon-document" />
                  </span>
                  <Link legacyBehavior href="/use-cases-details">
                    <a> Feedback Loop</a>
                  </Link>
                  <p>Gather user feedback to improve engagement strategies</p>
                  <ul>
                    <li>Informs adjustments.</li>
                    <li>Enhances satisfaction.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
  FEATURES END
    ==============================*/}
      {/*============================
  PRICING START
    ==============================*/}
      <section className="tf__pricing pt_70 pb_245">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto">
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
    </ContisLayout>
  );
};
export default use_case;
