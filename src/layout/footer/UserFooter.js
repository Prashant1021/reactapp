import React from "react";

import { Link } from "react-router-dom";

import { Footer } from "antd/es/layout/layout";
import {
  // AndroidOutlined,
  ClockCircleFilled,
  EnvironmentOutlined,
  FacebookFilled,
  // GithubFilled,
  // GooglePlusOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterCircleFilled,
  WhatsAppOutlined,
  // YoutubeFilled,
} from "@ant-design/icons";

const UserFooter = () => {
  return (
    <div>
      <Footer className=" bg-cyan-400  text-black">
        <div className="grid grid-cols-4 gap-4">
          <div>
            {/* <div>
              <Link to="/">
                <img className="w-12 h-12" src={logo} alt="" />
              </Link>
            </div> */}
            {/* <div>
              New Mobile Plus is one-stop destination for the latest and
              greatest mobile devices! We are passionate about providing
              high-quality smartphones to our customers and ensuring a seamless
              shopping experience
            </div> */}
            <div className="text-xl font-bold">CONTACTS</div>
            <div className=" text-black">
              <EnvironmentOutlined className=" text-black mt-3" />
              Checkpost,Chandragiri-6,Kathmandu
            </div>
            <div className=" text-black">
              <PhoneOutlined className=" text-black mt-3" />
              (+977) 9999999999
            </div>
            <div className=" text-black">
              <Link to="/">
                <MailOutlined className=" text-black mt-3" />
                NewMobilePlus@gmail.com
              </Link>
            </div>
          </div>
          <div>
            <div className="text-xl font-bold">INFORMATION</div>
            <div>Our Story</div>
            <div>Privacy & Policy</div>
            <div>Terms & Conditions</div>
            <div>Shipping & Delivery</div>
            <div>Careers</div>
            <div>FAQs</div>
          </div>
          <div>
            <div className="text-xl font-bold">OUR SOCIAL</div>
            <div>
              <ul className="inline-block pr-5">
                <li>
                  <a
                    href="https://m.facebook.com/p/New-Mobile-Plus-100054546276717/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookFilled className="p-2 text-red-600" />
                    Facebook
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppOutlined className="p-2 text-red-600" />
                    WhatsApp
                  </a>
                </li>
                {/* <li>
                  <AndroidOutlined className="p-2 text-red-600" />
                  Android
                </li> */}

                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramOutlined className="p-2 text-red-600" />
                    Instagram
                  </a>
                </li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterCircleFilled className="p-2 text-red-600" />
                  Twitter
                </a>
              </ul>
              {/* <ul className="inline-block pr-5"> */}
              {/* <li>
                  <InstagramOutlined className="p-2 text-red-600" />
                  Instagram
                </li> */}

              {/* <li>
                  <GithubFilled className="p-2 text-red-600" />
                  Github
                </li>
                <li>
                  <YoutubeFilled className="p-2 text-red-600" />
                  YouTube
                </li> */}
              {/* </ul> */}
            </div>
          </div>
          <div>
            <div>
              <div className="text-xl font-bold">OPENING TIME</div>
              <div>
                <ClockCircleFilled className="p-2 text-red-600" />
                Sunday - Friday: 08:00 am - 09:00 pm
              </div>
              {/* <div>Sat - Sun: 09:00 am - 10:00 pm</div> */}
            </div>
            <div>
              <div className="text-xl font-bold">PAYMENT OPTION</div>
              <div className=" grid grid-cols-4 gap-1 text-5xl text-red-600">
                <ul>
                  <li>
                    <a href="https://web.khalti.com/?csrt=185366038808237483#/">
                      <img
                        src="https://ongpng.com/wp-content/uploads/2023/04/8.khalti-Logo-1111x462-1.png"
                        alt="kalti Logo"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://esewa.com.np/#/home">
                      <img
                        src="https://ongpng.com/wp-content/uploads/2023/04/7-14.png"
                        alt="eSewa Logo"
                      />
                    </a>
                  </li>
                </ul>
                {/* <i class="fa-brands fa-cc-mastercard"></i>
                <i class="fab fa-cc-discover"></i>
                <i class="fab fa-cc-amex"></i>
                <i class="fab fa-cc-visa"></i>
                <i class="fab fa-cc-stripe"></i>
                <i class="fab fa-cc-stripe"></i>
                <i class="fab fa-cc-jcb"></i> */}
              </div>
            </div>
          </div>
        </div>
      </Footer>
      <Footer className=" bg-cyan-400 px-3 py-2 text-xs text-black text-center ">
        <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>
          © 2024 NEW MOBILE PLUS | All Rights Reserved.
        </div>
      </Footer>
    </div>
  );
};

export default UserFooter;
