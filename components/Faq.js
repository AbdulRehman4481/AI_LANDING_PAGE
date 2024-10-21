"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const faqData = [
  {
    id: 1,
    title: " What is the purpose of this app?",
    desc: "The app helps individuals with developmental challenges by providing personalized AI-driven conversations, task reminders, and routine management.",
  },
  {
    id: 2,
    title: "Who can use this app?",
    desc: "Caregivers, admins, and individuals with developmental needs can all benefit from the app’s personalized features.",
  },
  {
    id: 3,
    title: " How does the AI personalize interactions?",
    desc: "The AI learns user preferences and behavior to tailor conversations and improve engagement over time.",
  },
  {
    id: 4,
    title: "Can I track user progress?",
    desc: "Yes, admins can monitor task completion, activity levels, and receive alerts through the dashboard.",
  },
  {
    id: 5,
    title: "Is this app compatible with wearable devices?",
    desc: "Yes, the app integrates with smartwatches for seamless notifications and activity tracking.",
  },
];
const Faq = () => {
  const [active, setActive] = useState(1);
  return (
    <Accordion
      defaultActiveKey="collaps-1"
      className="accordion tf__faq_accordion"
      id="accordionExample01"
    >
      {faqData.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <h2 className="accordion-header" id="headingOne">
            <Accordion.Toggle
              className={`accordion-button ${
                faq.id == active ? "" : "collapsed"
              }`}
              as="button"
              eventKey={`collaps-${faq.id}`}
              onClick={() => setActive(faq.id == active ? 0 : faq.id)}
            >
              {faq.title}
            </Accordion.Toggle>
          </h2>
          <Accordion.Collapse
            eventKey={`collaps-${faq.id}`}
            className="accordion-collapse"
          >
            <div className="accordion-body">
              <p>{faq.desc}</p>
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export default Faq;

const faq2Data = [
  {
    id: 1,
    title: " Create Your Custom User Profile",
    desc: "Input personal details, preferences, and challenges for tailored AI engagement.",
  },
  {
    id: 2,
    title: " Set Tasks and Daily Reminders",
    desc: "Schedule personalized tasks, reminders, and notifications to fit individual routines.",
  },
  {
    id: 3,
    title: "Track Progress and Stay Connected",
    desc: "Monitor task completion, user activity, and receive real-time alerts on progress.",
  },
];
export const Faq2 = () => {
  const [active, setActive] = useState(1);
  return (
    <Accordion
      defaultActiveKey="collapse-1"
      className="accordion"
      id="accordionExample"
    >
      {faq2Data.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <h2 className="accordion-header" id="headingOne01">
            <Accordion.Toggle
              as={"button"}
              className={`accordion-button tf__process_accordion_btn ${
                faq.id == active ? "" : "collapsed"
              }`}
              eventKey={`collapse-${faq.id}`}
              onClick={() => setActive(faq.id == active ? 0 : faq.id)}
            >
              <span>{faq.id}</span>
              {faq.title}
            </Accordion.Toggle>
          </h2>
          <Accordion.Collapse
            eventKey={`collapse-${faq.id}`}
            className={`accordion-collapse`}
            aria-labelledby="headingOne01"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>{faq.desc}</p>
              <a href="#" className="tf__common_btn tf__accrodian_link">
                Get Started
                <i className="fa-regular fa-arrow-right-long" />
              </a>
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
