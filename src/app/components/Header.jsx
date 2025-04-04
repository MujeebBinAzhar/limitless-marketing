"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setFalse = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <>
          <div className="custom-modal">
            <div className="modal-inner">
              <div className="close">
                <div className="logo">
                  <img src="/assets/img/logo-black.png" alt="" />
                </div>
                <div className="icon" onClick={setFalse}>
                  <img src="/assets/icons/close-menu.svg" alt="" />
                </div>
              </div>
              <div className="mobile-links">
                <ul>
                  <li>
                    <Link onClick={setFalse} href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={setFalse} href="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={setFalse} href="/what-we-do">
                      What we do
                    </Link>
                  </li>
                  <li>
                    <Link onClick={setFalse} href="/values">
                      Core Values
                    </Link>
                  </li>
                  <li>
                    <Link onClick={setFalse} href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link onClick={setFalse} href="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
      <header className={scroll ? "header header-scroll" : "header"}>
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <Link href="/">
                <img src="/assets/img/logo-white.png" alt="" />
              </Link>
            </div>

            <div className="links">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/what-we-do">What we do</Link>
                </li>
                <li>
                  <Link href="/values">Core Values</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div
              className="menu"
              onClick={() => {
                setOpen(true);
              }}>
              <Image
                src="/assets/icons/menu.svg"
                width={30}
                height={30}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
