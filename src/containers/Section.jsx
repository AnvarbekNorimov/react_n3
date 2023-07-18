import {} from "./section.scss";
import { Yertsaday, Today, Inactive } from "../components/Sectionimg";
import Urgent from "../assets/images/icon/urgent.svg";
import New from "../assets/images/icon/new.svg";
import Default from "../assets/images/icon/default.svg";
const Section = () => {
  return (
    <div className="cardbox">
      <div className="section__top">
        <div className="section__top-box">
          <h4 className="section__top-box-title">Unresolved</h4>
          <p className="section__top-box-subtitle">60</p>
        </div>
        <div className="section__top-box">
          <h4 className="section__top-box-title">Overdue</h4>
          <p className="section__top-box-subtitle">16</p>
        </div>
        <div className="section__top-box">
          <h4 className="section__top-box-title">Open</h4>
          <p className="section__top-box-subtitle">43</p>
        </div>
        <div className="section__top-box">
          <h4 className="section__top-box-title">On hold</h4>
          <p className="section__top-box-subtitle">64</p>
        </div>
      </div>

      <div className="hover">
        <div className="hover__left">
          <div>
            <h3 className="hover__left-title">Today’s trends</h3>
            <p className="hover__left-subtitle">as of 25 May 2019, 09:41 PM</p>
          </div>
          <div className="hover_left-button">
            <Today />
            <span>Today</span>
            <Yertsaday />
            <span>Yesterday</span>
          </div>
        </div>
        <div className="hover__right">
          <div className="hover__right-boxs">
            <h4 className="hover__right-boxs-title">Resolved</h4>
            <p className="hover__right-boxs-subtitle">449</p>
          </div>
          <div className="hover__right-boxs">
            <h4 className="hover__right-boxs-title">Received</h4>
            <p className="hover__right-boxs-subtitle">426</p>
          </div>
          <div className="hover__right-boxs">
            <h4 className="hover__right-boxs-title">
              Average first response time
            </h4>
            <p className="hover__right-boxs-subtitle">33m</p>
          </div>
          <div className="hover__right-boxs">
            <h4 className="hover__right-boxs-title">Average response time</h4>
            <p className="hover__right-boxs-subtitle">3h 8m</p>
          </div>
          <div className="hover__right-boxs">
            <h4 className="hover__right-boxs-title">Resolution within SLA</h4>
            <p className="hover__right-boxs-subtitle">94%</p>
          </div>
        </div>
      </div>
      <div className="article">
        <div className="article__left">
          <div className="article__left-tile">
            <div>
              <h4 className="article__left-text">Unresolved tickets </h4>
              <p className="article__left-textera"> Group: Support</p>
            </div>
            <p className="article__left-atext">View details</p>
          </div>

          <div className="article__left-boxs">
            <h4 className="article__left-boxs-title">
              Waiting on Feature Request
            </h4>
            <p className="article__left-boxs-subtitle">4238</p>
          </div>
          <div className="article__left-border"></div>
          <div className="article__left-boxs">
            <h4 className="article__left-boxs-title">
              Awaiting Customer Response
            </h4>
            <p className="article__left-boxs-subtitle">1005</p>
          </div>
          <div className="article__left-border"></div>
          <div className="article__left-boxs">
            <h4 className="article__left-boxs-title">Awaiting Developer Fix</h4>
            <p className="article__left-boxs-subtitle">914</p>
          </div>
          <div className="article__left-border"></div>
          <div className="article__left-boxs">
            <h4 className="article__left-boxs-title">Pending</h4>
            <p className="article__left-boxs-subtitle">281</p>
          </div>
        </div>
        <div className="article__right">
          <div className="article__left-tile">
            <div>
              <h4 className="article__left-text">Tasks </h4>
              <p className="article__left-textera">Today</p>
            </div>
            <p className="article__left-atext">View details</p>
          </div>

          <div className="article__left-boxs">
            <h4 className="article__left-boxs-title">Create new task</h4>
            <p className="article__left-boxs-subtitle">
              <Inactive />
            </p>
          </div>
          <div className="article__left-border"></div>
          <div className="article__left-boxs">
            <input className="article__left-boxs-check" type="checkbox" />
            <h4 className="article__left-boxs-title right__title">
              Finish ticket update
            </h4>
            <p className="article__left-boxs-subtitle">
              <img src={Urgent} alt="urgent" />
            </p>
          </div>
          <div className="article__left-border"></div>
          <div className="article__left-boxs ">
            <input className="article__left-boxs-check" type="checkbox" />
            <h4 className="article__left-boxs-title right__title">
              Create new ticket example
            </h4>
            <p className="article__left-boxs-subtitle">
              <img src={New} alt="new" />
            </p>
          </div>
          <div className="article__left-border"></div>
          <div className="article__left-boxs ">
            <input className="article__left-boxs-check" type="checkbox" />
            <h4 className="article__left-boxs-title right__title">
              Update ticket report
            </h4>
            <p className="article__left-boxs-subtitle">
              <img src={Default} alt="default" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
