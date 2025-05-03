

import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="privacy policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 policy-content">
          <h1 className="bg-dark p-2 text-white text-center">PRIVACY POLICY</h1>
          <div className="policy-text">
            <h4>Information Collection</h4>
            <p>
              We collect personal information when you register, place an order, 
              or subscribe to our newsletter. This may include name, email, 
              address, and payment details.
            </p>
            
            <h4>Use of Information</h4>
            <p>
              Your information is used to process transactions, improve our services, 
              and communicate with you. We never sell your data to third parties.
            </p>
            
            <h4>Data Security</h4>
            <p>
              We implement security measures including encryption and secure 
              payment processing to protect your information.
            </p>
     
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;