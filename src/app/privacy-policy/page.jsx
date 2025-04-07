import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="banner privacy-banner">
        <div className="container">
          <div className="col-lg-8">
            <h1 className="banner-heading">Your Privacy Matters to Us</h1>
            <p className="banner-para">
              At Limitless Marketing, we are committed to protecting your
              personal information. Our privacy policy outlines how we collect,
              use, and safeguard your data with transparency and care.
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
            <div className="col-lg-10 mx-auto">
              <h2>Privacy Policy for Limitless Marketing Ltd</h2>
              <p>
                At Limitless Marketing, accessible from
                www.limitless-marketing.co.uk, one of our main priorities is the
                privacy of our visitors. This Privacy Policy document contains
                types of information that is collected and recorded by Limitless
                Marketing and how we use it.
              </p>
              <p>
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us.
              </p>
              <p>
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in Limitless
                Marketing. This policy is not applicable to any information
                collected offline or via channels other than this website.
              </p>

              <h2>Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
              </p>

              <h2>Information we collect</h2>
              <p>
                The personal information that you are asked to provide, and the
                reasons why, will be made clear at the point we ask you to
                provide it.
              </p>
              <p>
                If you contact us directly, we may receive additional
                information such as your name, email address, phone number, and
                the contents of your message.
              </p>
              <p>
                When you register for an Account, we may ask for your contact
                information including name, company name, address, email
                address, and telephone number.
              </p>

              <h2>How we use your information</h2>
              <ul>
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, directly or via partners, including
                  customer service, updates, and promotional purposes
                </li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>

              <h2>Log Files</h2>
              <p>
                Limitless Marketing follows a standard procedure of using log
                files. These log visitors when they visit websites. All hosting
                companies do this as part of hosting services’ analytics. The
                information collected by log files includes IP addresses,
                browser type, ISP, date/time stamp, referring/exit pages, and
                click counts. These are not linked to personally identifiable
                information. The purpose is to analyze trends, administer the
                site, track users’ movement, and gather demographic info.
              </p>

              <h2>Cookies and Web Beacons</h2>
              <p>
                Like any other website, Limitless Marketing uses “cookies” to
                store visitors’ preferences and accessed pages. This helps us
                optimize the user experience by customizing content based on
                browser type and other information.
              </p>

              <h2>Advertising Partners Privacy Policies</h2>
              <p>
                You may consult this list to find the Privacy Policy for each
                advertising partner of Limitless Marketing.
              </p>
              <p>
                Third-party ad servers or ad networks use technologies like
                cookies, JavaScript, or Web Beacons in their advertisements and
                links on Limitless Marketing. These are sent directly to users’
                browsers and they automatically receive your IP address. These
                tools measure ad effectiveness and personalize content.
                Limitless Marketing has no access to or control over these
                cookies used by third-party advertisers.
              </p>

              <h2>Third Party Privacy Policies</h2>
              <p>
                Limitless Marketing’s Privacy Policy does not apply to other
                advertisers or websites. Please consult their Privacy Policies
                for detailed practices and opt-out options.
              </p>
              <p>
                You can disable cookies via your browser settings. Detailed
                information is available on respective browser websites.
              </p>

              <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
              <p>Under the CCPA, California consumers have the right to:</p>
              <ul>
                <li>
                  Request disclosure of the categories and specific pieces of
                  personal data collected
                </li>
                <li>Request deletion of collected personal data</li>
                <li>
                  Request a business not sell the consumer’s personal data
                </li>
              </ul>
              <p>
                If you make a request, we have one month to respond. Please
                contact us to exercise these rights.
              </p>

              <h2>GDPR Data Protection Rights</h2>
              <p>
                We want to ensure you are fully aware of your data protection
                rights. Every user is entitled to the following:
              </p>
              <ul>
                <li>
                  <strong>The right to access</strong> – Request copies of your
                  personal data
                </li>
                <li>
                  <strong>The right to rectification</strong> – Request
                  correction of inaccurate or incomplete data
                </li>
                <li>
                  <strong>The right to erasure</strong> – Request we delete your
                  personal data under certain conditions
                </li>
                <li>
                  <strong>The right to restrict processing</strong> – Request
                  restricted processing under certain conditions
                </li>
                <li>
                  <strong>The right to object to processing</strong> – Object to
                  our processing of your data under certain conditions
                </li>
                <li>
                  <strong>The right to data portability</strong> – Request we
                  transfer your data to another organization or to you
                </li>
              </ul>
              <p>
                If you make a request, we have one month to respond. Please
                contact us to exercise any of these rights.
              </p>

              <h2>Children’s Information</h2>
              <p>
                We prioritize protecting children while using the internet. We
                encourage parents to observe and guide their children’s online
                activity.
              </p>
              <p>
                Limitless Marketing does not knowingly collect Personal
                Identifiable Information from children under 13. If your child
                has provided such information, please contact us immediately and
                we will remove it promptly.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy occasionally. Please review
                this page periodically for changes. Updates are effective
                immediately upon posting.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or suggestions about our Privacy
                Policy, please do not hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
