import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Urban Bazaar—your one-stop shop for all things trendy, affordable, and unique! Whether you're looking for fashion, gadgets, home essentials, or gifts, we’ve got something special just for you.

Born from the idea that shopping should be easy, fun, and accessible to everyone, we bring together a handpicked collection of quality products at prices that won’t break the bank. No fancy jargon, no endless scrolling—just great finds you’ll love.

We’re more than just a store; we’re your shopping buddy. Need help? Our team’s got your back. Happy browsing, and thanks for choosing Urban Bazaar!


          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
