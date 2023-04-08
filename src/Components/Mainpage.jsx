import React from "react";
import "./Mainpage.css";
import ReactDOM from "react-dom";
import target from "../images/target.png";
import medal from "../images/medals.jpg";
import rainbow from "../images/rainbow.jpg";
import phone from "../images/phone.png";
import quality from "../images/quality.png";

const Mainpage = () => {
  return (
    <>
      <div className="container">
{/* Main box content */}
        <div className="main-box">
          <div className="mobile-view choose-heading">Why choose Us?</div>
          <h1 className="main-heading">Why The Industry </h1>
          <h1 className="main-heading">Chooses Clickdee?</h1>
          <p className="main-para">
            We understand performance marketing from every angle and every stage
            of the funnel. Our clinets trust that we know what metrics move
            their bussiness towards growth. Our Publishers and affilate partners
            know that we make maximum revernue and ROAS a main focus when
            growing out partnerships.
          </p>
        </div>
        {/* All the box content */}
        <div className="box cnt mb-hide">
          <div className="inner-box grey-bg">
            <img src={target} className="target-img" />
            <h3 className="box-heading">Choose Your </h3>
            <h3 className="box-heading">Local Targeting</h3>
            <p className="box-para">
              Our trageted and tyacked calls are tailored to your bussiness needs,
              auidence, and geolocation.
            </p>
          </div>
        </div>
        <div className="box cnt mb-hide">
        <div className="inner-box white-bg">
          <img src={medal} className="target-img" />
          <h3 className="box-heading">Track Your Conversion</h3>
          <p className="box-para">
            Our trageted and tyacked calls are tailored to your bussiness needs,
            auidence, and geolocation.
          </p>
          </div>
        </div>
        <div className=" cnt mb-hide"></div>
        <div className="box cnt mb-hide">
          <div className="inner-box grey-bg">
            <img src={rainbow} className="target-img" />
            <h3 className="box-heading">Customized Campaings</h3>
            <p className="box-para">
              Audience budgets and goals you decide the criteria for your digital
              ad Campaing and we'll do the rest.
            </p>
          </div>
        </div>
        <div className="box cnt mb-hide">
          <div className="inner-box white-bg">
            <img src={phone} className="target-img" />
            <h3 className="box-heading">Get Dedicated Support Team</h3>
            <p className="box-para">
              We constanly monitor quality control! Our affilate network of
              published are digital ad experts that have been vetted.
            </p>
          </div>
        </div>
        <div className="box cnt mb-hide">
          <div className="inner-box grey-bg">
            <img src={quality} className="target-img" />
            <h3 className="box-heading">Quality Assurance</h3>
            <p className="box-para">
              We constanly monitor quality control! Our affilate network of
              publishers are digital ad experts that have been vetted,experts that have been vetted.
            </p>
          </div>
        </div>
{/* Mobile view custom card content */}
        <div class="mobile-view">
          <div class="cards-container">
            <div className="cards">
              <div class="card">
                <div class="box grey-bg">
                  <img src={target} class="target-img" />
                  <h3 class="box-heading">Choose Your Local Targeting</h3>
                  <p class="box-para">
                    Our targeted and tracked calls are tailored to your business
                    needs, audience, and geolocation.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="box grey-bg">
                  <img src={medal} class="target-img" />
                  <h3 class="box-heading">Track Your Conversion</h3>
                  <p class="box-para">
                    Our targeted and tracked calls are tailored to your business
                    needs, audience, and geolocation.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="box grey-bg">
                  <img src={rainbow} class="target-img" />
                  <h3 class="box-heading">Customized Campaigns</h3>
                  <p class="box-para">
                    Audience budgets and goals - you decide the criteria for
                    your digital ad campaign and we'll do the rest.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="box grey-bg">
                  <img src={phone} class="target-img" />
                  <h3 class="box-heading">Get Dedicated Support Team</h3>
                  <p class="box-para">
                    We constantly monitor quality control! Our affiliate network
                    of publishers are digital ad experts that have been vetted.
                  </p>
                </div>
              </div>
              <div class="card ">
                <div class="box grey-bg custom">
                  <img src={quality} class="target-img" />
                  <h3 class="box-heading">Quality Assurance Role</h3>
                  <p class="box-para">
                    We constantly monitor quality control! Our affiliate network
                    of publishers are digital ad experts ad experts that have been vetted,experts that have been.
                  </p>
                </div>
              </div>
            </div>
          </div>
{/* Footer */}
          <footer>
            <h3 class="footer-subheading">Work Together</h3>
            <div class="footer-heading">Let us All work Together</div>
            <p class="footer-text">
              Let our diverse marketing team advertise your services! We support
              clients in a variety of industries including: Health Insurance &
              Medicare, Final Expense, Term Life, Auto Insurance, Pest Control,
              Plumbing, Electricians, Term Life, HVAC, Home security, TV &
              Internet, Home Services, Debt consolidation, credit repairs, legal
              services and much more!.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
