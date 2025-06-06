import Link from "next/link";
import React from "react";
import ScrollToTopp from "./ScrollToTopp";

const Footer = () => {
  return (
    <section className=" footer">
      <div className="container">
        <div className="row">
          <div className=" col-lg-3 col-md-6 mb-2">
            <div className="footer-logo">
              <Link href="/">
                <img
                  src="/assets/img/logo-white.png"
                  alt="Limitless Marketing"
                />
              </Link>
              <p className="small color-white mt-4">
                At Limitless Marketing, we specialize in delivering powerful
                sales and marketing solutions that drive real results. Based in
                Ireland, we work with businesses and charities to expand their
                reach, build brand awareness, and create meaningful customer
                connections.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  mb-2">
            <h4 className="color-white fw-bold text-uppercase ">Services</h4>
            <ul className="footer-ul">
              <li>
                <Link href="/services/#aquisition">Aquisition</Link>
              </li>
              <li>
                <Link href="/services/#awareness">Awareness</Link>
              </li>
              <li>
                <Link href="/services/#brand-loyalty">Brand Loyalty</Link>
              </li>
              <li>
                <Link href="/services/#management">Management</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6  mb-2">
            <h4 className="color-white fw-bold text-uppercase ">Useful link</h4>
            <ul className="footer-ul">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/what-we-do">What We Do</Link>
              </li>
              <li>
                <Link href="/values">Core Values</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>

              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6  mb-2">
            <h4 className="color-white fw-bold text-uppercase ">
              Contact Info
            </h4>
            <p className="color-white">
              Unit 6, Block B Workspace centre Mayoralty Street Ireland Co.Louth
              A92V044
            </p>

            <a
              href="mailto:admin@limitless-marketing.ie"
              className="footer-link">
              Admin@limitless-marketing.ie
            </a>
            <a href="tell:(041) 983 6503" className="footer-link">
              (041) 983 6503
            </a>

            <div className="social">
              <a
                href="https://www.facebook.com/LimitlessMarketingLTDBelfast"
                target="_blank">
                <div className="icon">
                  <img
                    src="/assets/icons/facebook.svg"
                    alt="Limitless Marketing"
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/limitless_marketing_ltd/"
                target="_blank">
                <div className="icon">
                  <img
                    src="/assets/icons/instagram.svg"
                    alt="Limitless Marketing"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopp />
    </section>
  );
};

export default Footer;
