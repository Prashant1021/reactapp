import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUS = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-cyan-400 min-h-screen p-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-32">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to New Mobile Plus, your one-stop destination for the latest
          and greatest mobile devices! We are passionate about providing
          high-quality smartphones to our customers and ensuring a seamless
          shopping experience.
        </p>
        <p className="text-gray-700 mb-4">
          At New Mobile Plus, we believe in staying ahead with technology
          trends, offering a diverse range of mobile phones from top brands. Our
          team is dedicated to helping you find the perfect device that suits
          your needs and preferences.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you're a tech enthusiast or just looking for a reliable phone,
          New Mobile Plus is here for you. Our commitment to customer satisfaction,
          competitive prices, and excellent service sets us apart in the mobile
          retail industry.
        </p>
        <p className="text-gray-700 mb-4">
          Explore our website, check out the latest arrivals, and feel free to
          reach out to our friendly customer support if you have any questions.
          Thank you for choosing Mobile Haven as your trusted mobile shopping
          partner!
        </p>
        <p className="text-gray-700">Happy shopping!</p>
        <div style={{ textAlign: "center" }}>
          <Button
            style={{ backgroundColor: "cyan" }}
            onClick={() => navigate("/")}
          >
            Back Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
