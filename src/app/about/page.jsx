import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="banner about-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="banner-heading">
                Empowering Growth Through Strategic Marketing
              </h1>

              <p className="banner-para">
                At Limitless Marketing, we partner with businesses and charities
                to deliver impactful sales and marketing solutions. Based in
                Drogheda, our innovative and people-first approach helps build
                brands, engage audiences, and drive real results.
              </p>

              <div className="link text-start">
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
              <h2 className="sec-heading">About Us</h2>
              <p>
                At Limitless Marketing, we specialize in delivering powerful
                sales and marketing solutions that drive real results. Based in
                Drogheda, we work with businesses and charities to expand their
                reach, build brand awareness, and create meaningful customer
                connections.
              </p>
              <p>
                Our team is passionate about making an impact—whether it’s
                growing a brand or helping charities engage with supporters.
                With a dynamic approach and a commitment to excellence, we
                ensure that every campaign is tailored for success.
              </p>
              <p className="fw-bold">
                Join us in redefining marketing through innovation, strategy,
                and a people-first approach. Let’s create something great
                together!
              </p>

              <h4 className="fw-bold color-blue">Our Mission</h4>
              <p>
                {" "}
                To empower brands by expanding their reach through direct,
                personalized marketing.
              </p>
            </div>

            <div className="col-lg-6 mt-3 mt-lg-0">
              <img
                src="/assets/img/about-img.jpg"
                className="img-fluid border-radius"
                alt="Limitless Marketing"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
