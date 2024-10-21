// "use client"
// import PageBanner from "@/components/PageBanner";
// import ContisLayout from "@/layouts/ContisLayout";
// import { useState } from "react";

// const initialValues = {
//   userName: "",
//   companyName: "",
//   phoneNumber: "",
//   email: "",
//   message: "",
// };

// const contact = () => {
//   const [contactData, setContactData] = useState(initialValues);
//   const handleChange = (e) =>
//     setContactData((s) => ({ ...s, [e.target.name]: e.target.value }));
//   const handleContactData = (e) => {
//     e.preventDefault(); // Prevent the default form submission
//     console.log("contactData", contactData); // Log the contact data
//     // Optionally, you can reset the form or show a success message here
//   };
//   return (
//     <ContisLayout footer={3}>
//       <PageBanner pageName={"contact us"} pageTitle={"Contact us"} />
//       {/*============================
//   CONTACT START
//     ==============================*/}
//       <section className="tf__contact pb_100">
//         <div className="container">
//           <div className="row d-flex flex-wrap justify-content-center">
//             <div className="col-xl-5 col-md-6">
//               <div className="tf__contact_area">
//                 <span>
//                   <i className="fas fa-comment-alt-lines" aria-hidden="true" />
//                 </span>
//                 <div className="tf__contact_icon_text">
//                   <p>Email us</p>
//                   <a href="mailto:example@gmail.com">support@contis.ai</a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-5 col-md-6">
//               <div className="tf__contact_area">
//                 <span>
//                   <i className="fas fa-phone-alt" />
//                 </span>
//                 <div className="tf__contact_icon_text">
//                   <p>Call us</p>
//                   <a href="callto:123456789">(123) 431 3456</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*============================
//   CONTACT END
//     ==============================*/}
//       {/*============================
//   CONTACT FORM START
//     ==============================*/}
//       <section className="tf__contact_form pt_90 pb_100">
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-4 mx-auto">
//               <div className="tf__common_heading tf__common_heading2 tf__benefits_heading">
//                 <h2 className="tf__common_heading_color">Send us a message</h2>
//                 <p>
//                   Fill out the form and our team will get back to you as quickly
//                   as we can.
//                 </p>
//                 <ul className="tf__contact_icon d-flex flex-wrap">
//                   <li>
//                     <a href="#">
//                       <img className="svg" src="./svg/facebook.svg" alt />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <img src="./svg/instagram.svg" alt className="svg" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <img src="./svg/twitter.svg" alt className="svg" />
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-xl-7 mx-auto">
//               <form className="tf__blog_form" onSubmit={handleContactData}>
//                 <div className="row">
//                   <div className="col-xl-6">
//                     <div className="tf__blog_form_input tf__contact_form_input">
//                       <label>Label (required)</label>
//                       <input type="text" placeholder="Your name" name="userName"  onChange={handleChange}  />
//                     </div>
//                   </div>
//                   <div className="col-xl-6">
//                     <div className="tf__blog_form_input tf__contact_form_input">
//                       <label>Label (required)</label>
//                       <input type="text" placeholder="Your company name" name="companyName"  onChange={handleChange} />
//                     </div>
//                   </div>
//                   <div className="col-xl-6">
//                     <div className="tf__blog_form_input tf__contact_form_input">
//                       <label>Label (required)</label>
//                       <input type="text" placeholder="Phone number" name="phoneNumber" onChange={handleChange}/>
//                     </div>
//                   </div>
//                   <div className="col-xl-6">
//                     <div className="tf__blog_form_input tf__contact_form_input">
//                       <label>Email (required)</label>
//                       <input type="email" placeholder="Email address" value={contactData.email} name="email" onChange={handleChange}/>
//                     </div>
//                   </div>
//                   <div className="col-xl-12">
//                     <div className="tf__blog_form_input tf__contact_form_input">
//                       <label>Message (required)</label>
//                       <textarea
//                         rows={4}
//                         placeholder="Type your message here"
//                         name="message"
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </form>
//               <div className="form-check tf__signup_check_area tf__blog_checkbox">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   id="flexCheckDefault2"
//                 />
//                 <label className="form-check-label" htmlFor="flexCheckDefault2">
//                   I’m okay with getting emails and having that activity tracked
//                   to improve my experience.
//                 </label>
//               </div>
//               <button className="tf__common_btn" type="submit">
//                 Sign up for free
//                 <i
//                   className="fa-regular fa-arrow-right-long"
//                   aria-hidden="true"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*============================
//   CONTACT FORM END
//     ==============================*/}
//     </ContisLayout>
//   );
// };
// export default contact;
"use client";
import PageBanner from "@/components/PageBanner";
import ContisLayout from "@/layouts/ContisLayout";
import { useState } from "react";

const initialValues = {
  userName: "",
  companyName: "",
  phoneNumber: "",
  email: "",
  message: "",
};

const contact = () => {
  const [contactData, setContactData] = useState(initialValues);

  const handleChange = (e) =>
    setContactData((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleContactData = async(e) => {
    e.preventDefault(); 
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        ...contactData,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      await fetch("https://consumer-tasks.vercel.app/api/contact", requestOptions);
      console.log("Successfully sent contact");
      setContactData({userName: "",
        companyName: "",
        phoneNumber: "",
        email: "",
        message: ""}

      )
    } catch (error) {
      console.log(error);
    } 
  };

  return (
    <ContisLayout footer={3}>
      <PageBanner pageName={"contact us"} pageTitle={"Contact us"} />
      {/*============================
          CONTACT START
      ==============================*/}
      <section className="tf__contact pb_100">
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-center">
            <div className="col-xl-5 col-md-6">
              <div className="tf__contact_area">
                <span>
                  <i className="fas fa-comment-alt-lines" aria-hidden="true" />
                </span>
                <div className="tf__contact_icon_text">
                  <p>Email us</p>
                  <a href="mailto:example@gmail.com">support@contis.ai</a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="tf__contact_area">
                <span>
                  <i className="fas fa-phone-alt" />
                </span>
                <div className="tf__contact_icon_text">
                  <p>Call us</p>
                  <a href="callto:123456789">(123) 431 3456</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*============================
          CONTACT END
      ==============================*/}
      {/*============================
          CONTACT FORM START
      ==============================*/}
      <section className="tf__contact_form pt_90 pb_100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mx-auto">
              <div className="tf__common_heading tf__common_heading2 tf__benefits_heading">
                <h2 className="tf__common_heading_color">Send us a message</h2>
                <p>
                  Fill out the form and our team will get back to you as quickly
                  as we can.
                </p>
                <ul className="tf__contact_icon d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <img className="svg" src="./svg/facebook.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./svg/instagram.svg" alt="" className="svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./svg/twitter.svg" alt="" className="svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 mx-auto">
              <form className="tf__blog_form" onSubmit={handleContactData}>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="tf__blog_form_input tf__contact_form_input">
                      <label>Label (required)</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        name="userName"
                        value={contactData.userName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__blog_form_input tf__contact_form_input">
                      <label>Label (required)</label>
                      <input
                        type="text"
                        placeholder="Your company name"
                        name="companyName"
                        value={contactData.companyName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__blog_form_input tf__contact_form_input">
                      <label>Label (required)</label>
                      <input
                        type="text"
                        value={contactData.phoneNumber}
                        placeholder="Phone number"
                        name="phoneNumber"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="tf__blog_form_input tf__contact_form_input">
                      <label>Email (required)</label>
                      <input
                        type="email"
                        value={contactData.email}
                        placeholder="Email address"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="tf__blog_form_input tf__contact_form_input">
                      <label>Message (required)</label>
                      <textarea
                        rows={4}
                        placeholder="Type your message here"
                        defaultValue={""}
                        value={contactData.message}
                        name="message"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-check tf__signup_check_area tf__blog_checkbox">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault2"
                  >
                    I’m okay with getting emails and having that activity tracked
                    to improve my experience.
                  </label>
                </div>
                <button className="tf__common_btn" type="submit">
                  Sign up for free
                  <i
                    className="fa-regular fa-arrow-right-long"
                    aria-hidden="true"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*============================
          CONTACT FORM END
      ==============================*/}
    </ContisLayout>
  );
};

export default contact;
