import Link from "next/link";
import React from "react";
import NewsSection from "../components/NewsSection";

const page = () => {
  return (
    <>
      <section className="banner news-banner">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="banner-heading">
              Stay Informed with the Latest News & Updates
            </h1>
            <p className="banner-para">
              Explore the newest stories, insights, and announcements from
              Limitless Marketing. From industry trends to company updates, get
              the information that keeps you ahead.
            </p>

            <div className="link text-start">
              <Link className="banner-link" href="/contact">
                Contact Us{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NewsSection />
    </>
  );
};

export default page;
