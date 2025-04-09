import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="banner values-banner">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="banner-heading">
              Driving Growth for Global and Local Brands
            </h1>
            <p className="banner-para">
              At Limitless Marketing, we deliver impactful sales and marketing
              solutions for top-tier clients and emerging brands across Ireland.
              From finance to non-profits and tech, our team is committed to
              creating long-term customer connections with unmatched quality and
              dedication.
            </p>

            <div className="link text-start">
              <Link className="banner-link" href="/contact">
                Contact Us{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="sec-heading">What We Do?</h2>
              <p>
                We are a Sales and Marketing company, representing some of the
                worlds biggest clients, expanding quickly throughout Ireland.
              </p>
              <p>
                Here at Limitless Marketing LTD, we are looking to rise to the
                top of Ireland, creating long term quality customers and
                upholding impeccable standards along the way. Our clients at the
                moment range from finance, non-profit, security and new apps on
                the market. We don’t just work with the well known and loved
                brands, we are looking to help local and upcoming brands too.
                Our company is made up of a group of success driven individuals
                who are recognised for their work ethic and talent every day.
              </p>
            </div>

            <div className="col-lg-6 mt-3 mt-lg-0">
              <img
                src="/assets/img/what-we-do.jpg"
                alt="Limitless Marketing"
                className="img-fluid border-radius"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-grey">
        <div className="container">
          <h2 className="sec-heading">LET US REPRESENT YOUR BRAND</h2>
          <p className="fs-3 fw-bold">
            Our Administration team can answer any questions you may have
            regarding our services.
          </p>

          <ul className="present-ul">
            <li>
              <div className="present-card">
                <div className="icon">
                  <img
                    src="/assets/icons/out-of-hours-icon.png"
                    alt="Limitless Marketing"
                  />
                </div>
                <p>Out of hours responses if required.</p>
              </div>
            </li>

            <li>
              <div className="present-card">
                <div className="icon">
                  <img
                    src="/assets/icons/team-icon.png"
                    alt="Limitless Marketing"
                  />
                </div>
                <p>Ireland team to respond to your requests.</p>
              </div>
            </li>

            <li>
              <div className="present-card">
                <div className="icon">
                  <img
                    src="/assets/icons/innovation-icon.png"
                    alt="Limitless Marketing"
                  />
                </div>
                <p>A trusted network ready to market your brand efficiently.</p>
              </div>
            </li>

            <li>
              <div className="present-card">
                <div className="icon">
                  <img
                    src="/assets/icons/face-meeting.png"
                    alt="Limitless Marketing"
                  />
                </div>
                <p>Face to face meetings</p>
              </div>
            </li>

            <li>
              <div className="present-card">
                <div className="icon">
                  <img
                    src="/assets/icons/phone-icon-23.png"
                    alt="Limitless Marketing"
                  />
                </div>
                <p>No waiting time to get through to us.</p>
              </div>
            </li>

            <li>
              <div className="present-card">
                <div className="icon">
                  <img
                    src="/assets/icons/cocktail-glass-icon-new.png"
                    alt="Limitless Marketing"
                  />
                </div>
                <p>Office meets at the best spots in town!</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
