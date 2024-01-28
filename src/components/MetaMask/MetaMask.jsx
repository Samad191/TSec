import React from "react";
import { Carousel } from "react-bootstrap";
import "./MetaMask.scss";

function MetaMask() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center mb-4">
          <Carousel>
            <Carousel.Item>
              <video width="100%" autoPlay loop playsInline muted>
                <source
                  src="https://videos.ctfassets.net/gjyjx7gst9lo/7A59wssQrNAohCvLkIZlRs/ffe63e793a0f380138cdf4af66071bc4/MM_03__3_.mp4"
                  type="video/mp4"
                />
              </video>
            </Carousel.Item>

            <Carousel.Item>
              <video width="100%" autoPlay loop playsInline muted>
                <source
                  src="http://videos.ctfassets.net/gjyjx7gst9lo/6JYWUxs5Z140XeNpC9KngE/9591f2bb909506b5f7b4cab034d8b6a6/MM_02__1_.mp4"
                  type="video/mp4"
                />
              </video>
            </Carousel.Item>

            <Carousel.Item>
              <video width="100%" autoPlay loop playsInline muted>
                <source
                  src="http://videos.ctfassets.net/gjyjx7gst9lo/7Bd17vpEKx7ftNsc5QfD1b/644e37f0b12bc27a8f87a39125eee285/MM_01__2_.mp4"
                  type="video/mp4"
                />
              </video>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="col-12 col-lg-6 d-flex flex-column align-items-start justify-content-start">
          <span className="metamask_heading">MetaMask</span>
          <span className="metamask_text">
            MetaMask is the leading self-custodial wallet for over 100 million
            users annually. MetaMask is everything you need to manage your
            identity, digital assets, and to explore web3. Available as a browser
            extension and mobile app.
          </span>
          <div className="container mt-5">
            <div className="row gap-3">
              <div className="key_numbers_div col-5">
                <span className="metamask_users_heading">MetaMask Users</span>
                <span className="key_number mt-3">100M</span>
              </div>
              <div className="key_numbers_div col-5">
                <span className="metamask_users_heading">Connected Dapps</span>
                <span className="key_number mt-3">17k+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetaMask;

