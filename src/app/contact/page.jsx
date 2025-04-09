import Link from "next/link";
import React from "react";
import Contact from "../components/Contact";

const page = () => {
  return (
    <>
      <section className="banner contact-banner">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="banner-heading">
              Expert Sales & Marketing Services That Drive Growth
            </h1>
            <p className="banner-para">
              At Limitless Marketing, we specialize in customer acquisition,
              brand awareness, and loyalty-building. With a team of top-tier
              managers and ambassadors, we deliver seamless, results-driven
              campaigns—helping your brand grow while you focus on the bigger
              picture.
            </p>

            <div className="link text-start">
              <Link className="banner-link" href="/contact">
                Contact Us{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="sec-heading">Contact Us</h2>
              <p className="fw-bold">
                We are looking forward to hearing from you. Fill out the form
                below, and we willll get back to you as soon as we can.
              </p>

              <ul className="contact-ul">
                <li>
                  <div className="contact-card">
                    <div className="icon">
                      <img
                        src="/assets/icons/call.svg"
                        alt="Limitless Marketing"
                      />
                    </div>
                    <div className="content">
                      <h5>Phone</h5>
                      <a href="tel:(041) 983 6503">(041) 983 6503</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="contact-card">
                    <div className="icon">
                      <img
                        src="/assets/icons/email.svg"
                        alt="Limitless Marketing"
                      />
                    </div>
                    <div className="content">
                      <h5>Email</h5>
                      <a href="mailto:admin@limitless-marketing.ie">
                        Admin@limitless-marketing.ie
                      </a>
                    </div>
                  </div>
                </li>

                <li className="w-100">
                  <div className="contact-card third-card">
                    <div className="icon">
                      <img
                        src="/assets/icons/location-dark.svg"
                        alt="Limitless Marketing"
                      />
                    </div>
                    <div className="content">
                      <h5>Location</h5>
                      <p>
                        Unit 6, Block B Workspace centre Mayoralty Street
                        Ireland Co.Louth A92V044
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 mx-auto">
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
