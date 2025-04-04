import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className=" footer">
      <div className="container">
        <div className="row">
          <div className=" col-lg-3 col-md-6 mb-2">
            <div className="footer-logo">
              <Link href="/">
                <img src="/assets/img/logo-white.png" alt="" />
              </Link>
              <p className="small color-white mt-4">
                At Limitless Marketing, we specialize in delivering powerful
                sales and marketing solutions that drive real results. Based in
                Drogheda, we work with businesses and charities to expand their
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
                <Link href="/services/#aquisition">About Us</Link>
              </li>
              <li>
                <Link href="/services/#awareness">What We Do</Link>
              </li>
              <li>
                <Link href="/services/#brand-loyalty">Core Values</Link>
              </li>
              <li>
                <Link href="/services/#management">Contact Us</Link>
              </li>

              <li>
                <Link href="/services/#management">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6  mb-2">
            <h4 className="color-white fw-bold text-uppercase ">
              Contact Info
            </h4>
            <p className="color-white">
              26 Magdalene Street, Moneymore, Drogheda, A92 TXW6
            </p>

            <a
              href="mailto:info@limitless-marketing.co.uk"
              className="footer-link">
              info@limitless-marketing.co.uk
            </a>
            <a href="tell:02890 024711" className="footer-link">
              02890 024711
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
