import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="banner team-banner">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="banner-heading">Meet the Team Behind the Vision</h1>
            <p className="banner-para">
              Discover the passionate individuals driving Limitless Marketing
              forward. Our team is made up of dedicated professionals committed
              to excellence, innovation, and delivering results for our clients.
            </p>
            <div className="link text-start">
              <Link className="banner-link" href="/contact">
                Contact Us{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec team">
        <div className="container">
          <h2 className="sec-heading">Meet Our Team</h2>
          <ul className="team-ul">
            <li>
              <div className="team-card">
                <div className="team-image">
                  <div className="img-container">
                    <img
                      src="/assets/img/amir.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="name-container">
                    <h4>Amir Khalifa</h4>
                    <h5>Managing Director</h5>
                  </div>
                </div>
                <div className="team-content">
                  <p>
                    A seasoned sales leader with 10+ years at Limitless
                    Marketing, known for building top-performing teams and
                    driving consistent revenue growth. His expertise in
                    recruitment, training, and market expansion has been key to
                    the company’s success across Ireland
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="team-card">
                <div className="team-image">
                  <div className="img-container">
                    <img
                      src="/assets/img/leah.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="name-container">
                    <h4>Leah</h4>
                    <h5>Admin</h5>
                  </div>
                </div>
                <div className="team-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil officiis eum delectus eius, voluptas nulla veritatis
                    ipsam itaque sequi dolorem nobis suscipit dolores deserunt,
                    consequatur, iste eaque sunt debitis molestiae?
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
