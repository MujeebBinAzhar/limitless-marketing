import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="banner values-banner">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="banner-heading">
              The Foundation of Everything We Do
            </h1>
            <p className="banner-para">
              At Limitless Marketing, our values shape how we work and connect.
              With integrity at our core, we prioritize accountability,
              collaboration, and clear communication—delivering results with
              purpose and putting people first.
            </p>

            <div className="link text-start">
              <Link className="banner-link" href="/contact">
                Contact Us{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec values">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="valu-main">
              <span>
                <p>Our Values</p>
              </span>
            </div>
          </div>

          <ul className="values-list">
            <li>
              <a href="#integrity">
                <div className="value-card">
                  <span>integrity</span>
                </div>
              </a>
            </li>

            <li>
              <a href="#service">
                <div className="value-card">
                  <span>service</span>
                </div>
              </a>
            </li>

            <li>
              <a href="#communication">
                <div className="value-card">
                  <span>communication</span>
                </div>
              </a>
            </li>

            <li>
              <a href="#execution">
                <div className="value-card">
                  <span>execution</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="sec bg-grey" id="integrity">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="sec-heading">Integrity</h2>

              <ul className="features-ul">
                <li>
                  If we say we are going to do something, we do it. If we do
                  something, we do it well.
                </li>
                <li>
                  We consistently example the integrity and the behaviours that
                  we value.
                </li>
                <li>
                  Many minds are better than one. Solutions, systems and
                  processes are best developed in a productive environment.
                </li>
                <li>
                  We respect each other, but are still comfortable to disagree
                  with each other.
                </li>
                <li id="service">
                  We are accountable for the tasks we commit to complete, so we
                  do not let each other down.
                </li>
                <li>Every person will be treated with dignity and respect.</li>
              </ul>
            </div>

            <div className="col-lg-6 mt-3 mt-lg-0">
              <h2 className="sec-heading">Service</h2>

              <ul className="features-ul">
                <li>
                  We exist to serve and support our clients as they are the soul
                  of the business
                </li>
                <li>
                  We service our clients by showing professionalism, acquiring
                  customers, providing consistent customer acquisitions, and
                  amazing customer service.
                </li>
                <li>
                  Our responsibility is to voice our opinions and ideas,
                  although they may not be popular.
                </li>
                <li>
                  We recognise each of us has unique talents and perspectives
                  that contribute to our success.
                </li>
                <li>We value and appreciate each others contribution.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div id="communication"></div>
      <section className="sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="sec-heading">Communication</h2>

              <ul className="features-ul">
                <li>
                  Without open communication and constant feedback; we cannot
                  improve as people or as a business.
                </li>
                <li>
                  We have created an environment where openness and truth are
                  encouraged and rewarded.
                </li>

                <li>
                  We do not respond angrily or defensively when people disagree,
                  bring up issues or find fault.
                </li>
                <li>
                  We constantly think of better ways to improve every aspect of
                  the business.
                </li>
                <span id="execution"></span>
              </ul>
            </div>

            <div className="col-lg-6 mt-3 mt-lg-0">
              <h2 className="sec-heading">Execution</h2>
              <ul className="features-ul">
                <li>
                  We set our selves goals, make plans to accomplish these goals,
                  execute these plans, follow up and give recognition for timely
                  accomplishments.
                </li>
                <li>
                  We organise and structure our business around the results we
                  need to achieve.
                </li>
                <li>
                  If we are not producing results, we are open-minded enough to
                  look at alternative solutions.
                </li>
                <li>
                  We recognise and reward people who are proactive and who make
                  themselves responsible for deadlines, results and finding the
                  root of problems.
                </li>
                <li>
                  We realise that in working together, we get the right things
                  done more efficiently.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
