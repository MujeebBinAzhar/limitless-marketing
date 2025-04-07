import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="banner service-banner">
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

      <section className="sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="sec-heading">Our Services</h2>
              <p className="fw-bold">
                We are an industry of well trained managers, industry leaders,
                leading sales and brand ambassadors all driving towards national
                expansion goals. Here at Limitless marketing we are looking to
                Rise to the top of Ireland with our blue chip clients, creating
                long term quality customers and upholding impeccable standards
                along the way.
              </p>
            </div>
          </div>

          <ul className="feature-ul mt-5">
            <li>
              <div className="feature-card">
                <div className="icon">
                  <img src="/assets/icons/aquisition.svg" alt="" />
                </div>
                <h4>Aquisition</h4>
                <p>
                  Maintaining and acquiring custom for our clients – always
                  thinking outside the box.
                </p>
              </div>
            </li>

            <li>
              <div className="feature-card">
                <div className="icon">
                  <img src="/assets/icons/awareness.svg" alt="" />
                </div>
                <h4>Awareness</h4>
                <p>
                  We make sure to put your products or services to the public
                  and get a great return – benefitting your company and ours.
                </p>
              </div>
            </li>

            <li>
              <div className="feature-card">
                <div className="icon">
                  <img src="/assets/icons/loyal.svg" alt="" />
                </div>
                <h4>Brand Loyalty</h4>
                <p>
                  Our sales and brand representatives are the face of your
                  company, therefore are committed to delivering a first class
                  service, putting every customer at the heart.
                </p>
              </div>
            </li>

            <li>
              <div className="feature-card">
                <div className="icon">
                  <img src="/assets/icons/management.svg" alt="" />
                </div>
                <h4>Management</h4>
                <p>
                  As we are outsourced and you come to us for our errorless
                  services, we will make sure everything runs smoothly while you
                  sit back and watch your brand or product grow.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
