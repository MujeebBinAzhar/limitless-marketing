import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="hero">
        <div className="video-bg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video"
            src="/assets/video/hero.mp4"
            type="video/mp4"></video>
        </div>

        <div className="overlay">
          <div className="container">
            <div className="row">
              <h1 className="main-heading">
                Limitless Growth —<span> Maximum Impact</span>
              </h1>

              <h2 className="banner-sub-heading">
                Building Connections, Growing Causes
              </h2>

              <div className="link">
                <Link className="banner-link" href="/contact">
                  Contact Us{" "}
                </Link>
              </div>
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
                At Limitless Marketing, we partner with different companies and
                brands which we are excited to promote
              </p>

              <p>
                Our company culture supports the development of leaders who
                strive toward excellence. We have nurtured a great company
                culture, in which key lessons like communication, time
                management, leadership and goal setting practices are quickly
                learned. Our workplace sets the stage for talented people to
                become confident leaders.
              </p>
              <p>
                Our goal is to help our sales and brand representatives attain
                the personal and professional skills that will allow them to
                thrive in any business environment, as well as driving towards
                our national and international expansion goals. Here at
                Limitless Marketing, we acquire long term quality customers for
                our clients while upholding impeccable standards along the way.
              </p>
              <p>
                {" "}
                <strong>
                  Get in touch today to see how we can help you grow.
                </strong>{" "}
              </p>

              <div className="colored-link">
                <Link href="#">Contact Us </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <img
                src="/assets/img/growth.jpg"
                className="img-fluid border-radius"
                alt="Limitless Marketing"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-grey">
        <div className="container">
          <ul className="feature-ul">
            <li>
              <div className="feature-card">
                <div className="icon">
                  <img
                    src="/assets/icons/aquisition.svg"
                    alt="Limitless Marketing"
                  />
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
                  <img
                    src="/assets/icons/awareness.svg"
                    alt="Limitless Marketing"
                  />
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
                  <img
                    src="/assets/icons/loyal.svg"
                    alt="Limitless Marketing"
                  />
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
                  <img
                    src="/assets/icons/management.svg"
                    alt="Limitless Marketing"
                  />
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

      <section className="sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-3 mt-lg-0 order-last order-lg-first">
              <img
                src="/assets/img/approach.jpg"
                className="img-fluid border-radius"
                alt="Limitless Marketing"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="sec-heading">Our Approach </h2>

              <p>
                At Limitless Marketing, we partner with different companies and
                brands which we are excited to promote
              </p>

              <p>
                We represent clients across two key channels: residential teams
                and private site teams. This approach allows us to reach a
                diverse range of potential customers while maintaining a
                personal, grassroots connection with each one. From major
                national expos to local retail precincts, we operate in a
                variety of settings to ensure maximum exposure and engagement
              </p>

              <h3 className="color-blue"> Our Mission</h3>
              <p>
                <strong>
                  To empower brands by expanding their reach through direct,
                  personalized marketing.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-black">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <h2 className="sec-heading color-white">The “S” word</h2>
              <h3 className="color-white fw-bold">Sales</h3>

              <p className="color-white">
                Every business has something to sell, but not every business
                knows how to sell it effectively to fuel growth. One of the
                biggest challenges today is identifying, targeting, and reaching
                the right audience. Building a loyal customer base can be
                tough—so we take the guesswork out of sales and marketing for
                brands that lack the time, experience, or resources. We help
                build a loyal customer base that drives consistent revenue,
                enabling businesses to scale, innovate, and deliver even more
                value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
